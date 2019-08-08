## 1. 将setState放入队列

- react会根据组件类型的不同，分别调用不同的update.enqueueSetState
- 这个updater有运行时注入

## 2. enqueueSetState（以classComponent为例）
- requestCurrentTime：