function move_img(str) {
    var step=50; // change this to different step value
    switch(str){
    case "down":
    var x=document.getElementById('i1').offsetTop;
    x= x + step;
    document.getElementById('i1').style.top= x + "px";
    break;