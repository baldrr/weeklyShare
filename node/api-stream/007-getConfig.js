const fetch = require('node-fetch');
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');
const stream = require('stream');

// 命令行
var program = require('commander');
 
program
  .version('0.1.0')
  .option('-plt, --platform [string]', 'android|ios', 'android')
  .option('-b, --bundleName [string]', 'bundle', 'rn_kg')
  .option('-i, --bundleVersion [string]', '版本', '0.52.100')
  .option('-e, --env [number]', 'env 0', 0)
  .option('-k, --key [string]', '秘钥')
  .parse(process.argv);

let configRoot = '';

// 获取路径
async function getTracks(platform, bundleName, bundleVersion, env) {
  let host = 'http://mermaid.ximalaya.com/config';
  if (env === 1) {
    host = 'http://test.9nali.com/mermaid';
  } else if (env === 2) {
    host = 'http://cms.uat.9nail.com/mermaid';
  }
  let url = `${host}/ts/v2/tracks/cdn/1/${platform}`;
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: [{
        bundle: bundleName,
        type: 2,
        version: bundleVersion
      }]
    })
  }).then(res => res.json()).then(data => {
    if (data.data && data.data[0]) {
      return data.data[0].value;
    } else {
      console.log(`step1: 获取可视化埋点配置文件失败，${platform} ${bundleName} ${bundleVersion} `);
      const err = new Error('获取可视化埋点配置文件失败，格式错误: ' + JSON.stringify(data));
      throw err;
    }
  }).catch(e => {
    console.log('step1: 获取可视化埋点配置文件失败');
    throw e;
  });
}

// 获取配置
async function getConfig(path, env) {
  let host = 'http://fdfs.xmcdn.com';
  if (env === 1) {
    host = 'http://fdfs.test.ximalaya.com';
  } else if (env === 2) {
    host = 'http://fdfs.uat.ximalaya.com';
  }
  const url = `${host}/${path}`;
  return await fetch(url)
  .then((res) => {
    return res.body;
  }).catch((err) => {
    console.log('step2: 可视化埋点配置文件下载失败，url:' + url);
    throw err;
  });
}

function encodeUtf8(text) {
  const code = encodeURIComponent(text);
  const bytes = [];
  for (var i = 0; i < code.length; i++) {
      const c = code.charAt(i);
      if (c === '%') {
          const hex = code.charAt(i + 1) + code.charAt(i + 2);
          const hexVal = parseInt(hex, 16);
          bytes.push(hexVal);
          i += 2;
      } else bytes.push(c.charCodeAt(0));
  }
  return bytes;
}

class DecryptStream extends stream.Transform {

    constructor(key) {
        super();
        this.keyBuffer = encodeUtf8(key);
    }

    _transform(chunk, encoding, callback) {

        // 分配buffer
        const decodeBuffer = Buffer.alloc(chunk.length);

        for (let i = 0; i< chunk.length; i++) {
            var keyTemp = this.keyBuffer[i % this.keyBuffer.length];
            decodeBuffer.writeUInt8((chunk[i] ^ keyTemp), i);
        }
        this.push(decodeBuffer);
        callback();
    }
}

async function run(platform, bundleName, bundleVersion, env, key) {
  console.log(('下载可视化埋点配置文件', key));
  const path = await getTracks(platform, bundleName, bundleVersion, env);
  const configReadableStream = await getConfig(path, env);

  await configReadableStream.pipe(new DecryptStream(key))
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('./008-config.json'));

  console.log(('下载可视化埋点配置文件成功'));
}

run(program.platform, program.bundleName, program.bundleVersion, program.env, program.key)