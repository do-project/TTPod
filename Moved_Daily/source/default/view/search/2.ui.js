/**
 * New DeviceOne File
 */

var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });

var search = ui("do_ALayout_8");

search.on("touch",function(){
	app.openPage("source://view/search/search.ui");
});



