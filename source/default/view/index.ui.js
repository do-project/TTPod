var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });

/**********************************************************************************************************/
var myslideview =ui("myslideview");
var lb_list = [ui("lb_0"),ui("lb_1"),ui("lb_2"),ui("lb_3")];
var ly_list = [ui("ly_0"),ui("ly_1"),ui("ly_2"),ui("ly_3")];
var color_list = [ui("color_0"),ui("color_1"),ui("color_2"),ui("color_3")];
var v = [];
var prev = {lb: lb_list[0], ly: ly_list[0],color: color_list[0], index: 0};
for (var i = 0, len = ly_list.length; i < len; i++) {
    v = ly_list[i];
    v.lb = lb_list[i];
    v.color = color_list[i];
    v.on("touch", function(){
        prev.color.bgColor = "FFFFFFFF";
        this.color.bgColor = "4A9CEAFF";
        prev.lb.fontColor = "474747FF";
        this.lb.fontColor = "4A9CEAFF";
        
        prev.color = this.color;
        prev.lb = this.lb;
        prev.index = this.id.substring(3,4);
        myslideview.set({index: prev.index});
    });
}


myslideview.on("indexChanged", function(index){
	var lb_id = "lb_"  + index;
	var color_id = "color_"  + index;
	var ly_id = "ly_"  + index;
	lb_list.forEach(function(v,k){
		v.fontColor = "474747FF";
	});
	color_list.forEach(function(v,k){
		v.bgColor = "FFFFFFFF";
	});
	ui(color_id).bgColor = "4A9CEAFF";
	ui(lb_id).fontColor = "4A9CEAFF";
});

var listdata = mm("do_ListData");  // 创建一个 数据集合;

myslideview.bindItems(listdata);// 建立sliderview 与 ListData 的行数据关系;

listdata.addData([
    {template : 0},
    {template : 1},
    {template : 2},
    {template : 3}
]);

myslideview.refreshItems();

var list=ui("list");
list.on("touch", function(){
	nf.alert("你点击了侧边栏！");
});

var music=ui("music");
music.on("touch", function(){
	nf.alert("你点击了当前播放音乐！");
});
var play=ui("play");
play.on("touch", function(){
	nf.alert("你点击了播放按钮！");
});
var next=ui("next");
next.on("touch", function(){
	nf.alert("你点击了下一首按钮！");
});
var alllist=ui("alllist");
alllist.on("touch", function(){
	nf.alert("你点击了播放列表！");
});
