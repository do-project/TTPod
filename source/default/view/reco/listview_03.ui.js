/**
 * New DeviceOne File
 */

var rootview, page;
rootview = ui("$");
page = sm("do_Page");

rootview.setMapping({
    "do_ImageView_1.source" : "image_1",
    "do_ImageView_2.source" : "image_2",
    "do_ImageView_3.source" : "image_3",
    "do_Label_1.text" :"content_1",
    "do_Label_2.text" :"content_2",
    "do_Label_3.text" :"content_3"
});