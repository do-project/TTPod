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
	app.openPage("source://view/mine/localmusic.ui");
});

var localmusic3=ui("localmusic3");
localmusic3.on("touch", function(){
	app.openPage("source://view/mine/localmusic.ui");
});
var random=ui("random");
random.on("touch", function(){
	nf.alert("你点击了随机按钮！");
});
var download0=ui("download0");
download0.on("touch", function(){
	app.openPage("source://view/mine/download.ui");
});

var download3=ui("download3");
download3.on("touch", function(){
	app.openPage("source://view/mine/download.ui");
});
var recent0=ui("recent0");
recent0.on("touch", function(){
	app.openPage("source://view/mine/recently.ui");
});

var recent3=ui("recent3");
recent3.on("touch", function(){
	app.openPage("source://view/mine/recently.ui");
});

var list2=ui("list2");
list2.on("touch", function(){
	app.openPage("source://view/mine/custom_playlists.ui");
});
var list3=ui("list3");
list3.on("touch", function(){
	app.openPage("source://view/mine/custom_playlists.ui");
});
var favorite0=ui("favorite0");
favorite0.on("touch", function(){
	app.openPage("source://view/mine/favorites.ui");
});

var favorite3=ui("favorite3");
favorite3.on("touch", function(){
	app.openPage("source://view/mine/favorites.ui");
});
var favorite4=ui("favorite4");
favorite4.on("touch", function(){
	app.openPage("source://view/mine/favorites.ui");
});