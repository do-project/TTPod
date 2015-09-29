/**
 * New DeviceOne File
 */
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
global = sm("do_Global");
page.on("back", function(){ app.closePage() });

var imageBrowser = sm("do_ImageBrowser");
var mygrid = ui("mygrid");
var listdata = mm("do_ListData");
mygrid.bindItems(listdata);


var datas = [
              {"img":"source://image/4/1.png"},
              {"img":"source://image/4/2.png"},
              {"img":"source://image/4/3.png"},
              {"img":"source://image/4/4.png"},
              {"img":"source://image/4/5.png"},
              {"img":"source://image/4/6.png"},
              {"img":"source://image/4/7.png"},
              {"img":"source://image/4/8.png"}
             ];
             
listdata.addData(datas);
mygrid.refreshItems();

mygrid.on("touch",function(data, e){                       //griview点击事件
	//var img1 = datas[data].img ;
	//imageBrowser.show([
	//	{ source :img1 , init :img1 }
	//], 0);
	if(data==0){
		app.openPage("source://view/online/grid_0.ui");
	}else if(data==1){
		app.openPage("source://view/online/grid_1.ui");
	}else if(data==2){
		app.openPage("source://view/online/grid_2.ui");
	}else if(data==3){
		app.openPage("source://view/online/grid_3.ui");
	}else if(data==4){
		app.openPage("source://view/online/grid_4.ui");
	}else if(data==5){
		app.openPage("source://view/online/grid_5.ui");
	}else if(data==6){
		app.openPage("source://view/online/grid_6.ui");
	}else if(data==7){
		app.openPage("source://view/online/grid_7.ui");
	}
});