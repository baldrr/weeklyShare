# 环境搭建（Mac）

## 配置Flutter SDK

1. 下载Flutter SDK

   - [官网地址](https://flutter.io/sdk-archive/#macos)
   - [git地址](https://github.com/flutter/flutter/releases)

2. 解压安装包到开发目录

    ```shell
    cd ~/01_Workspace/01_Code
    unzip ~/Downloads/flutter_macos_v1.7.8+hotfix.4-stable.zip
    ```
3. 更新环境变量

    - 暂时设置PATH环境变量，仅针对当前终端窗口（更改[PATH_TO_FLUTTER_GIT_DIRECTORY]路径）：
        - `vim ~/.bash_profile`
        - 增加一行：`export PATH=PATH_TO_FLUTTER_GIT_DIRECTORY/flutter/bin:$PATH`：
        - 更新刚配置的环境变量：`source ~/.bash_profile`
    - 永久更新环境变量，以便 `flutter` 命令运行在任何终端窗口（**推荐**）：
        - 确定Flutter SDK的目录
        - 打开(或创建) `$HOME/.bash_profile`
        - 添加以下行并更改[PATH_TO_FLUTTER_GIT_DIRECTORY]路径:

            ```
            export PUB_HOSTED_URL=https://pub.flutter-io.cn //国内用户需要设置
            export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn //国内用户需要设置
            export PATH=PATH_TO_FLUTTER_GIT_DIRECTORY/flutter/bin:$PATH
            ```
        - 运行：`source $HOME/.bash_profile`

4. 运行 `flutter doctor` 命令，来查看是否还需要安装其它依赖，根据其检测结果修复问题

> 注意:
> 
> 如果使用的是zsh，终端启动时 ~/.bash_profile 将不会被加载，解决办法就是修改 ~/.zshrc ，在其中添加：source ~/.bash_profile

## 设置iOS / Android开发工具
（在flutter doctor中会检测是否安装好）

- iOS
  - 安装Xcode（Xcode 7.2+）
  - 设置iOS模拟器
  - 安装到iOS设备
  - 启动设备 `flutter run`
  
- Android
  - 安装Android Studio
  - 设置Android设备
  - 设置Android模拟器

## 编辑器配置

- vscode: 插件安装flutter
- vscode: >p flutter: run flutter doctor

## 创建新项目

- vscode: >p flutter: new project
- `F5` 运行app

# 资料：

- [flutter中文网](https://flutterchina.club/setup-macos/#%E5%AE%89%E8%A3%85-xcode)
- [flutter环境配置详解MAC版](https://www.jianshu.com/p/b50a92afbef1)
