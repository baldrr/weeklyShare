
### 2.1 打开日志
```js
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue.js';
MessageQueue.spy(true);
```

### 2.2 有几种类型的msg，包含哪些数据？
- N->JS
- JS->N

- 数据：
    - type: number,
    - module: ?string,
    - method: string | number,
    - args: any[],

### 2.3 原生是event是如何在js中触发的