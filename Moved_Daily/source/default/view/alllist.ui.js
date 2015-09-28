/**
 * New DeviceOne File
 */
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
var myclose=ui("myclose");
page.on("back", function(){ app.closePage() });
next.on("touch",function(data, e){ app.closePage() });
var storage = sm("do_Storage");
/**********************************************************************************************************/
var mylabel = ui("do_Label_1");

var mylistview = ui("mylistview");
var listdata = mm("do_ListData");

mylistview.bindItems(listdata);// 建立ListView 与 ListData 的行数据关系;

storage.readFile("data://alllist.json", function(data){// 读取文件
    listdata.addData(data); // 给ListData添加数据
    mylistview.refreshItems(); // 刷新ListView 行数据;
});


mylistview.on("touch",function(data, e){
	nf.alert("点击了第"+data+"个listview");
	if(data==1){
		mylabel.text="      Now Playing: 南山南";
	}else if (data==2){
		mylabel.text="      Now Playing: 遇见你的时候所有星星都落到我头上";
	}else if(data==3){
		mylabel.text="      Now Playing: 如果这都不算爱";
	}
});

/*********************************/
var next=ui("next");
var i=1;
var last=ui("last");
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
		play.source="source://image/pause_2.png";
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
		play.source="source://image//play.png";
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

last.on("touch",function(data, e){
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
	i--;
	if(i==0){
		i=3;
	}
});

var z=1;
var mode =ui("mode");
mode.on("touch",function(data,e){
	if(z==1){
		mode.source="source://image/cycle.png";
	}else if(z==2){
		mode.source="source://image/random.png";
	}else if(z==3){
		mode.source="source://image/singlecycle.png";
	}else if(z==4){
		mode.source="source://image/normal.png";
	}
	z++;
	if(z==5){
		z=1;
	}
});
