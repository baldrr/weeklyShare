## 2. v8的运行环境

### 2.1 概要
- Isolate是一个v8引擎实例，它有自己独立的堆内存
- local handle：v8内对象的引用，v8使用它来做GC。
- handle scope：handle的容器可以用来批量删除handle。
- context：v8实例中的沙箱环境，每个沙箱有独立的全局变量，脚本等。

### 2.2 HandleScope
HandleScope是handle的作用域，一旦我们创建一个HandleScope，所有的handle都会保存到这个作用域中。
如果我们新建一个HandleScope那个之后的handle会保存在新的HandleScope中。
HandleScope中的handle会随着HandleScope的销毁和销毁。

### 2.3 Contexts
在v8中同一个实例可以运行多个独立的js执行环境。他们拥有独立的全局对象和utils方法。v8执行js脚本的时候可以在不同的上下文中切换。

### 2.4 Templates
Templates是js和c++通信的接口