var website = ["https://res.klook.com/image/upload/c_fill,w_800,h_533,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ib4zj8ljahdpnwjhkpsn.webp",
 "https://images.chinatimes.com/newsphoto/2019-09-25/900/20190925003872.jpg",
 "https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2018-11/f4735db5-c8a5-4ce3-9ac2-8a617598211e_m.jpg",
 "https://ikiwi.tw/wp-content/uploads/20191223113416_83.jpg",
 "https://img.cook1cook.com/upload/step/2/4/20887139564973724.jpg"];
var show = document.getElementById("display");
var prev = document.getElementById("previous");
var nex = document.getElementById("next");
var tex = document.getElementById("text");

var num = 0;

prev.className = "disabled";

function display(){
	document.getElementById("loading").style = "";
	show.src = website[num];
	show.onload = stop();
}

function stop(){
	document.getElementById("loading").style = "display: none";
}

function showHref(){
	tex.href = website[num];
	tex.innerHTML = website[num];
}

prev.onclick = function min(){
	if (num == 0)  return;
	num --;
	display();
	showHref();
	
	if (num == 0){
		prev.className = "disabled";
	}
	
	if (num < website.length - 1){
		nex.className = "";
	}
}

nex.onclick = function add(){
	if(num == website.length - 1)  return;
	num ++;
	display();
	showHref();
	
	if (num == website.length - 1){
		nex.className = "disabled";
	}
	
	if (num > 0){
		prev.className = "";
	}
}


