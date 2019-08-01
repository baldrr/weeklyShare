# Flutter 简介

Flutter 是一种跨平台技术方案：自绘UI引擎 + 原生 + 自己的UI布局系统。

## 思路：

- 自绘UI引擎：直接调用系统API来绘制UI，实现不同平台UI的一致性，性能接近原生控件。
- 原生：其它系统能力调用
- 自己的UI布局系统：提供了一套丰富的widget系统，快速构建UI。

## 特点：

- 跨平台自绘引擎
  - 使用Skia作为2D渲染引擎： Google的2D图形处理函数库
    - 跨平台，提供非常友好的API
    - 安卓系统内置Skia，iOS需将Skia打入ipa

- 高性能 + 开发效率高
  - 使用自绘UI引擎，布局数据等由Dart语言直接控制，无需与Native通信
  - 使用 Dart 语言开发：
    - 开发效率高：支持 **JIT** (即时编译)
    - 高性能：支持 **AOT** (提前编译)
    - 快速内存分配
    - 支持静态类型检测

___

## 程序运行方式：

1. 静态编译：**AOT** (Ahead of time)
   - 在执行前全部被翻译为机器码
   - 典型代表：C/C++开发的应用
2. 动态解释：**JIT** (Just-in-time)
   - 一句一句边翻译边运行
   - 典型代表：JavaScript、Python等脚本语言

> 注意：
> 
> JIT和AOT指的是程序运行方式，和编程语言并非强关联的。有些语言既可以以JIT方式运行也可以以AOT方式运行，如Java、Python。


## Flutter 架构

![image](https://cdn.jsdelivr.net/gh/flutterchina/flutter-in-action@1.0/docs/imgs/framework.png)

- Flutter Framework
  - 底下两层（Foundation和Animation、Painting、Gestures）：
    - 对应Flutter中的 `dart:ui` 包
    - 是Flutter引擎暴露的底层UI库，提供动画、手势及绘制能力
  - Rendering层：
    - 是一个抽象的布局层，依赖于dart UI层
    - Rendering层会构建一个UI树，当UI树有变化时，会计算出有变化的部分，然后更新UI树，最终将UI树绘制到屏幕上，这个过程类似于React中的虚拟DOM。
    - Rendering层是Flutter UI框架最核心的部分，用于确定每个UI元素的位置、大小、进行坐标变换、绘制(调用底层 `dart:ui` )。
  - Widgets层：
    - 是Flutter提供的的一套基础组件库，在基础组件库之上，Flutter还提供了 Material 和 Cupertino 两种视觉风格的组件库。而我们Flutter开发的大多数场景，只是和这两层打交道。
- Flutter Engine
  - 纯 C++实现的 SDK：包括了 Skia引擎、Dart运行时、文字排版引擎等。在代码调用 `dart:ui` 库时，调用最终会走到Engine层，然后实现真正的绘制逻辑。
