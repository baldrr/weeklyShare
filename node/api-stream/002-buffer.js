const buf = Buffer.from('hello world', 'ascii')
console.log(buf)
console.log(buf.toString('ascii'))

const buf1 = Buffer.alloc(10, 0x68)
console.log(buf1)
console.log(buf1.toString('ascii'))
