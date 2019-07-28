## 1. 下载v8源代码并编译

[参考文档](https://v8.dev/docs/source-code)

## 2. 新建一个c++项目

以xcode为例：
- 选择macOS项目
- command line tool

### 2.1 项目配置

#### 2.1.1 头文件搜索路径
在Build setting中找到`Header search path`，并加入v8中的头文件。例如`/Users/xmly/002-learn/v8/v8/include`。

#### 2.1.2 lib文件路径
在Build setting中找到`Library search path`，并加入v8的编译结果。例如`/Users/xmly/002-learn/v8/v8/out.gn/x64.release.sample/obj`。

#### 2.1.3 连接配置
在Build setting中找到`Other link flag`，并加入-lv8_monolith

## 3. 编译运行
接下来只要编写项目main方法，调用v8的api就可以运行v8了。