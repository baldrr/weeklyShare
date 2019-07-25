### 1.JAVA发展史

### 2.JAVA环境配置

### 3.Hello World

### 4.JAVA中的数据类型
    
* 4.1 整型
    
    * int
    * short
    * long
    * byte
    
![](https://user-gold-cdn.xitu.io/2019/7/25/16c287eebe86890a?w=1648&h=376&f=png&s=191555)

* 4.2 浮点类型
    
    * double
    * float
![](https://user-gold-cdn.xitu.io/2019/7/25/16c288424a9b35c3?w=1664&h=280&f=png&s=176810)

* 4.3 char类型

* 4.4 boolean类型
    *整型值和布尔值之间不能转换 JAVA中

* 4.5 变量
    * 每句话必须以分号结尾 大小写敏感
```
public class Main {
    public static void main(String[] args) {
        double salary;
        int value;
        boolean isFinish;
    }
}
```
* 4.5 变量初始化
    * 每句话必须以分号结尾 大小写敏感
    
```
public class Main {
    public static void main(String[] args) {
        double salary = 0.8;
        int value = 100;
        boolean isFinish = false;
    }
}
```
* 4.6 常量
```
public class Main {
    public static void main(String[] args) {
        final int AGE = 18;
    }
}
```
* 4.7 运算符
* 4.7 强制类型转换
    
```
public class Main {
    public static void main(String[] args) {
        final double AGE = 18.99;
        int x = (int)AGE;
        System.out.println(x); // 18
    }
}
``` 
* 4,8字符串
