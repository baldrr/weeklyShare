process.stdin.resume()
process.stdin.setEncoding('utf-8')
const fs = require('fs')

// 写
const ws = fs.createWriteStream('./006-file.txt', {
  flags: 'w'
})

// 标准输出
process.stdout.write('请输入:')

process.stdin.on('data', function (data) {
  var str = data.slice(0, -1)
  if (str === '1') {
    console.info('stop')
    process.stdin.unpipe(ws)
    process.stdin.emit('end')
  } else {
    ws.write(str)
    process.stdout.write('输入的:' + str + '\n')
    process.stdout.write('请输入:')
  }
})
process.stdin.on('end', function () {
  console.info('end')
  process.stdin.pause()
})
