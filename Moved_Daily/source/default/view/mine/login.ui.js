//related to login.ui
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });
ui("fanhui").on("touch", function(){ app.closePage() });

ui("myphone").on("touch", function(){
	nf.alert("share-phone");
});
ui("myqq").on("touch", function(){
	nf.alert("share-myqq");
});
ui("myweibo").on("touch", function(){
	nf.alert("share-myweibo");
});
ui("myweixin").on("touch", function(){
	nf.alert("share-myweixin");
});