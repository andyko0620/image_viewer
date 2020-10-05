var slideIndex = 1;
var imgsrc = [
    "./images/loading.gif",
    "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201810272230",
    "https://yt3.ggpht.com/a/AGF-l7-wxI7DLGTXjXY0-SYuB7Os-aFHwgmtf4jPUQ=s900-c-k-c0xffffffff-no-rj-mo",
    "https://img.technews.tw/wp-content/uploads/2020/07/14143919/1F34.tmp_-e1594708784769.jpg"
];
showinit();

// Next/previous controls
function next_img() {
  var myimg = document.getElementById("myImg");
  var myimgdes = document.getElementById("Imgdes");
  myimg.src = imgsrc[0];
  myimgdes.href = imgsrc[0];
  myimgdes.innerHTML = "Loading"
  slideIndex += 1;
  index_mng();
  myimg.src = imgsrc[slideIndex];
  myimgdes.href = imgsrc[slideIndex];
  myimgdes.innerHTML = "image"+slideIndex
  console.log(slideIndex);
}

function prev_img() {
  var myimg = document.getElementById("myImg");
  var myimgdes = document.getElementById("Imgdes");
  myimg.src = imgsrc[0];
  myimgdes.href = imgsrc[0];
  myimgdes.innerHTML = "Loading"
  slideIndex -= 1;
  index_mng();
  myimg.src = imgsrc[slideIndex];
  myimgdes.href = imgsrc[slideIndex];
  myimgdes.innerHTML = "image"+slideIndex
  console.log(slideIndex);
}



function index_mng() {
  var mybutton = document.getElementsByClassName("image-viewer__button");
  if (slideIndex > imgsrc.length-1) {
    slideIndex = imgsrc.length-1
    mybutton[1].style.visibility = "hidden";
  }
  else if (slideIndex < 1) {
    slideIndex = 1
    mybutton[0].style.visibility = "hidden";
  }
  else {
    for (i = 0; i < mybutton.length; i++) {
      mybutton[i].style.visibility = "visible";
  }
  }
}

function showinit() {
  var myimg = document.getElementById("myImg");
  var myimgdes = document.getElementById("Imgdes");
  myimg.src = imgsrc[slideIndex];
  myimgdes.href = imgsrc[slideIndex];
  myimgdes.innerHTML = "image"+slideIndex
}
