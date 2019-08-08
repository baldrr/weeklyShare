const fs = require('fs')

// 创建流
const ws = fs.createWriteStream('./004-file.txt', {
  flags: 'w',
  autoClose: false
})

// 写流的方法
function write () {
  let counter = 0

  const timer = setInterval(() => {
    if (counter === 10) {
      clearInterval(timer)
      ws.end()
      ws.close()
    } else {
      counter++
      console.info('写入', counter)
      ws.write(String(counter))
      ws.write('\n')
    }
  }, 200)
}

ws.addListener('open', (fd) => {
  console.info('open', fd)
  write()
})

ws.addListener('close', () => {
  console.info('close')
})

ws.on('finish', () => {
  console.info('finish')
})
