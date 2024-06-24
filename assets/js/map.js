function showIndia(e) {
    var x = e.pageX;
    var y = e.pageY;
    var address = document.getElementById("india-add");
    address.style.left = x-90 + "px";
    address.style.top = y-158 + "px"; //if Address include then change to 258
    address.style.opacity=1;
    address.style.zIndex=30;
}

function hideIndia(){
    var address = document.getElementById("india-add");
    address.style.opacity=0;
    address.style.zIndex=-10;
}

function changeindex(e){
    var x = e.pageX;
    var y = e.pageY;
    var address = document.getElementById("india-add");
    address.style.left = x-475 + "px";
    address.style.top = y-560 + "px";
}

function showSingapore(e) {
    var x = e.pageX;
    var y = e.pageY;
    var address = document.getElementById("singapore-add");
    address.style.left = x-90 + "px";
    address.style.top = y-158 + "px"; //if Address include then change to 258
    address.style.opacity=1;
    address.style.zIndex=30;
}

function hideSingapore(){
    var address = document.getElementById("singapore-add");
    address.style.opacity=0;
    address.style.zIndex=-10;
}

function showUS(e) {
    var x = e.pageX;
    var y = e.pageY;
    var address = document.getElementById("US-add");
    address.style.left = x-90 + "px";
    address.style.top = y-158 + "px"; //if Address include then change to 258
    address.style.opacity=1;
    address.style.zIndex=30;
}

function hideUS(){
    var address = document.getElementById("US-add");
    address.style.opacity=0;
    address.style.zIndex=-10;
}

function showAustralia(e) {
    var x = e.pageX;
    var y = e.pageY;
    var address = document.getElementById("austrila-add");
    address.style.left = x-90 + "px";
    address.style.top = y-158 + "px"; //if Address include then change to 258
    address.style.opacity=1;
    address.style.zIndex=30;
}

function hideAustralia(){
    var address = document.getElementById("austrila-add");
    address.style.opacity=0;
    address.style.zIndex=-10;
}