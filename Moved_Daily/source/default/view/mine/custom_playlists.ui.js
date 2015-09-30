//related to custom_playlists.ui
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage(); });
ui("fanhui").on("touch", function(){ app.closePage(); });
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



var mylistview = ui("mylistview");
var listdata = mm("do_ListData");

mylistview.bindItems(listdata);// 建立ListView 与 ListData 的行数据关系;

storage.readFile("data://custom_playlists.json", function(data){// 读取文件
    listdata.addData(data); // 给ListData添加数据
    mylistview.refreshItems(); // 刷新ListView 行数据;
});


mylistview.on("touch",function(data, e){
	nf.alert("点击了第"+data+"个listview");
	//var data = listdata.getOne(index);
	//app.openPage("source://view/indexC.ui", data);
});
