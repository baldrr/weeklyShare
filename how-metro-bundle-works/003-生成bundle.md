## 3. 生成bundle

### 3.1 简介
这一步主要完成依赖计算和babel转码两步。

```js
output.build(server, requestOpts)
```
我们先来看output的结构，在执行`unbundle`的时候，`output`特指metro/shared/output/unbundle.js

### 3.2 output.build方法
```js
async function buildBundle(
  packagerClient: Server,
  requestOptions: RequestOptions,
): Promise<RamBundleInfo> {
  const options = {
    ...Server.DEFAULT_BUNDLE_OPTIONS,
    ...requestOptions,
    bundleType: 'ram',
  };
  return await packagerClient.getRamBundleInfo(options);
}
```
这里我们看一下options的结构：
```js
{
    ...Server.DEFAULT_BUNDLE_OPTIONS,
    entryFile: args.entryFile,
    sourceMapUrl,
    dev: args.dev,
    minify: args.minify !== undefined ? args.minify : !args.dev,
    platform: args.platform,
    bundleType: 'ram',
}
```
可以看出，打包的流程都包含在`packagerClient.getRamBundleInfo(options);`中

### 3.3 Server对象

#### 3.3.1 Server初始化
- _createModuleId：初始化自增的id
- options：初始化opt对象
- cacheStores：初始化fileCache
- 构建Bundle对象
- getDependencyGraph（需要继续了解）
- 构建_deltaBundler

### 3.4 Bundle对象

初始化的过程中创建了_depGraphPromise，它调用了`DependencyGraph.load`

### 3.5 DependencyGraph

### 3.6 traverseDependencies
依赖遍历
