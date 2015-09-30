/**
 * New DeviceOne File
 */
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });

var pic=ui("pic");
pic.on("touch", function(){
	app.openPage("source://view/mine/login.ui");
});

var login1=ui("login1");
login1.on("touch", function(){
	app.openPage("source://view/mine/login.ui");
});
int k=0;
var wifi=ui("wifi");
wifi.on("touch", function(){
	if(k==0){nf.toast("Only on Wi-Fi");k=1;}
	if(k==1){nf.toast("Use cellular");k=0;}
});
var localmusic0=ui("localmusic0");
localmusic0.on("touch", function(){
	nf.alert("你点击了本地音乐！");
});
var localmusic1=ui("localmusic1");
localmusic1.on("touch", function(){
	nf.alert("你点击了本地音乐！");
});
var localmusic2=ui("localmusic2");
localmusic2.on("touch", function(){
	nf.alert("你点击了本地音乐列表！");
});
var localmusic3=ui("localmusic3");
localmusic3.on("touch", function(){
	nf.alert("你点击了本地音乐列表！");
});
var random=ui("random");
random.on("touch", function(){
	nf.alert("你点击了随机按钮！");
});
var download0=ui("download0");
download0.on("touch", function(){
	nf.alert("你点击了下载音乐列表！");
});
var download1=ui("download1");
download1.on("touch", function(){
	nf.alert("你点击了下载音乐列表！");
});
var download2=ui("download2");
download2.on("touch", function(){
	nf.alert("你点击了下载音乐列表！");
});
var download3=ui("download3");
download3.on("touch", function(){
	nf.alert("你点击了下载音乐列表！");
});
var recent0=ui("recent0");
recent0.on("touch", function(){
	nf.alert("你点击了最近播放列表！");
});
var recent1=ui("recent1");
recent1.on("touch", function(){
	nf.alert("你点击了最近播放列表！");
});
var recent2=ui("recent2");
recent2.on("touch", function(){
	nf.alert("你点击了最近播放列表！");
});
var recent3=ui("recent3");
recent3.on("touch", function(){
	nf.alert("你点击了最近播放列表！");
});
var list0=ui("list0");
list0.on("touch", function(){
	nf.alert("你点击了自定义播放列表！");
});
var list1=ui("list1");
list1.on("touch", function(){
	nf.alert("你点击了自定义播放列表！");
});
var list2=ui("list2");
list2.on("touch", function(){
	nf.alert("你点击了自定义播放列表！");
});
var list3=ui("list3");
list3.on("touch", function(){
	nf.alert("你点击了自定义播放列表！");
});
var favorite0=ui("favorite0");
favorite0.on("touch", function(){
	nf.alert("你点击了最喜欢播放列表！");
});
var favorite1=ui("favorite1");
favorite1.on("touch", function(){
	nf.alert("你点击了最喜欢播放列表！");
});
var favorite2=ui("favorite2");
favorite2.on("touch", function(){
	nf.alert("你点击了最喜欢播放列表！");
});
var favorite3=ui("favorite3");
favorite3.on("touch", function(){
	nf.alert("你点击了最喜欢播放列表！");
});
var favorite4=ui("favorite4");
favorite4.on("touch", function(){
	nf.alert("你点击了最喜欢播放列表！");
});