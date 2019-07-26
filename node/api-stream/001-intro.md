## Stream

### 1. 流的意义
- 降低内存的消耗
- 多个流可以进行连接，公共完成一个任务
- 流不能减少cpu的使用，反而会更加消耗cpu

### 2. 类型
- Writable - 可写入数据的流（例如 fs.createWriteStream()）。
- Readable - 可读取数据的流（例如 fs.createReadStream()）。
- Duplex - 可读又可写的流（例如 net.Socket）。
- Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。

### 3. 留处理的数据
- Buffer: 高效率的操作二进制数据
- String: 

### 4. 缓冲
流在实际工作中使用内存缓冲。
在构造流是可以使用`highWaterMark`限制内存使用的总容量

### 5. 如何消费一个流

#### 5.1 Writable
- 创建一个可写流
- 调用write方法写入数据
- 调用end方法结束写入。
- 监听close完成。

#### 5.2 Readable
- 获得一个可读流

#### 5.3 pipe
多个流的连接
