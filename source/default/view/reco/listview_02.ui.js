/**
 * New DeviceOne File
 */
var rootview, page;
rootview = ui("$");
page = sm("do_Page");

rootview.setMapping({
    "do_ImageView_1.source" : "image",
    "do_Label_1.text" :"title",
    "do_Label_2.text" :"content"
});