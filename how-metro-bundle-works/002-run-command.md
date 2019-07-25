## 命令node node_modules/@xmly/xm-metro-bundler/build/cli/cli.js unbundle

这个命令会执行cli/cli.js中的run()方法。

在run方法中，我们注册了命令`unbundle`。
```js
const documentedCommands = [
  require('./bundle'),
  require('./unbundle'),
  require('./baseBundle')
];
```

我们来具体看`unbundle`命令。
```js
function unbundle(argv, config, args) {
  return bundleWithOutput(argv, config, args, outputUnbundle);
}
```
我们来看每一个参数
argv：为空
config：从metro.config.js中加载
args：命令行中加入的参数

outputUnbundle：这个对象可以调用server.js中的getRamBundleInfo方法，从而开始打包。

接下来`buildBundle`方法会正式启动打包流程。
```js
buildBundle(args, config, output);
```
这个方法已完成一下事件：
- 构建Server对象
- 通过output.build()计算bundle，bundle里包含依赖的js模块
- 通过output.save()保存bundle
- 通过server.getAssets()获得静态资源
- 通过saveAssets，保存静态资源

---

接下来我们看一下bundle的生成
