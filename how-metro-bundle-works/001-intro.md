## Metro-bundle学习笔记

本笔记主要记录Metro-bundle的文件加载、打包的过程。当前版本为0.38.1。

主要涉及到的命令：
- unbundle：这个命令在android上会打成多个小文件，在ios端会打成一个大文件。

Metro-bundle内部分为三大模块：
- resolve：模块依赖解析
- trasform：babel转码
- Serialization: 输出目标文件