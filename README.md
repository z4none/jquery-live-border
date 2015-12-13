# jquery-live-border

一个基于 jQuery 和 CSS3 的边框动态效果

![](http://z4none-me.qiniudn.com/live-border.gif)

[效果演示](http://github.z4none.me/jquery-live-border/demo.html)

使用方法：

* 引入相关文件
```html
<link rel="stylesheet" href="live-border.css"/>
<script type="text/javascript" src="live-border.js"></script>
```
* 初始化
```JavaScript
$("#id-btn1").liveBorder();
$("#id-btn2").liveBorder({
    top: true, 
    right: true, 
    bottom: true, 
    left: true
});
```
