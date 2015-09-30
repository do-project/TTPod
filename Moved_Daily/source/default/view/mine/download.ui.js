//related to download.ui
//related to localmusic.ui
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage(); });
ui("fanhui").on("touch", function(){ app.closePage(); });

var myslideview =ui("myslideview");
var lb_list = [ui("lb_0"),ui("lb_1"),ui("lb_2")];
var ly_list = [ui("ly_0"),ui("ly_1"),ui("ly_2")];
var color_list = [ui("color_0"),ui("color_1"),ui("color_2")];
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

var listdata = mm("do_ListData");  // 创建一个数据集合;

myslideview.bindItems(listdata);// 建立sliderview 与 ListData 的行数据关系;

listdata.addData([
    {template : 0},
    {template : 1},
    {template : 2},
    {template : 3}
]);

myslideview.refreshItems();

/*********************************/
var play=ui("play");
var alllist=ui("alllist");

alllist.on("touch", function(){
	app.openPage("source://view/alllist.ui");
});

var music=ui("music");
var next=ui("next");
var i=1;
var mu = sm("do_Audio");
var status=true;
var j=1;
var k=1;
play.on("touch",function(data, e){
	if (status==true)
	{
		if(k==1){
			music.source="source://res/love.png";
		}else if(k==2){
			music.source="source://res/nanshannan.png";
		}else if(k==3){
			music.source="source://res/nolove.png";
		}
		play.source="source://image/pause.png";
		if(j==1){
			mu.play({path:"source://res/love.mp3", point:0});
			j++;
		}else{
			mu.resume();
		}
		status=false;
	}
	else
	{
		music.source="source://image/music_index.png";
		play.source="source://image//mysonglist_play.png";
		mu.pause({});
		status=true;
	}
});

next.on("touch",function(data, e){
	if(i==1){
		k=1;
		mu.stop();
		mu.play({path:"source://res/love.mp3", point:0});
		music.source="source://res/love.png";
	}else if(i==2){
		k=2;
		mu.stop();
		mu.play({path:"source://res/nanshannan.mp3", point:0});
		music.source="source://res/nanshannan.png";
	}else if(i==3){
		k=3;
		mu.stop();
		mu.play({path:"source://res/nolove.mp3", point:0});
		music.source="source://res/nolove.png";
	}
	i++;
	if(i==4){
		i=1;
	}
});

var write=ui("write");

write.on("touch", function(){ 
	nf.alert("write");
});