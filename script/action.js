var btn_pressed = false;
var btn_active = false;
var run = true;

function changeToHover() {
  var obj = document.getElementById("svgobj");
  var svg = obj.contentDocument;
  var imgChange1 = svg.getElementById("img1");
  var xlinkns = "http://www.w3.org/1999/xlink";
  imgChange1.setAttributeNS(xlinkns, "xlink:href", "../hover/hover1.png");
  var imgChange2 = svg.getElementById("img2");
  imgChange2.setAttributeNS(xlinkns, "xlink:href", "../hover/hover2.png");
  var imgChange3 = svg.getElementById("img3");
  imgChange3.setAttributeNS(xlinkns, "xlink:href", "../hover/hover3.png");
  var imgChange4 = svg.getElementById("img4");
  imgChange4.setAttributeNS(xlinkns, "xlink:href", "../hover/hover4.png");
}

function resumeFromHover() {
  var obj = document.getElementById("svgobj");
  var svg = obj.contentDocument;
  var imgChange1 = svg.getElementById("img1");
  var xlinkns = "http://www.w3.org/1999/xlink";
  imgChange1.setAttributeNS(xlinkns, "xlink:href", "../normal/normal1.png");
  var imgChange2 = svg.getElementById("img2");
  imgChange2.setAttributeNS(xlinkns, "xlink:href", "../normal/normal2.png");
  var imgChange3 = svg.getElementById("img3");
  imgChange3.setAttributeNS(xlinkns, "xlink:href", "../normal/normal3.png");
  var imgChange4 = svg.getElementById("img4");
  imgChange4.setAttributeNS(xlinkns, "xlink:href", "../normal/normal4.png");
}

function changeToDown() {
  var obj = document.getElementById("svgobj");
  var svg = obj.contentDocument;
  var imgChange = svg.getElementById("img1");
  var xlinkns = "http://www.w3.org/1999/xlink";
  imgChange.setAttribute("transform", "translate(56.5 22.5)");
  imgChange.setAttributeNS(xlinkns, "xlink:href", "../down/down1.png");
  imgChange.style.width = "934px";
  var circle1 = svg.getElementById("cirl1");
  circle1.style.visibility = "hidden";
  var newGtabg = document.createElementNS("http://www.w3.org/2000/svg", "g");
  newGtabg.style.opacity = "0.8";
  newGtabg.setAttribute("id", "g1");
  var newEl = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  newEl.setAttribute("id", "ell1");
  newEl.setAttribute("cx", "523.56px");
  newEl.setAttribute("cy", "480.58px");
  newEl.setAttribute("rx", "389.88px");
  newEl.setAttribute("ry", "390.23px");
  newEl.setAttribute("transform", "translate(-185 515.28) rotate(-44.02)");
  newEl.style.fill = "#363636";
  newGtabg.appendChild(newEl);
  var layer2 = svg.getElementById("Layer_2");
  var img2 = svg.getElementById("img2");
  layer2.insertBefore(newGtabg, img3);
  img2.style.width = "825px";
  img2.style.height = "825px";
  img2.setAttribute("transform", "translate(77.5 40.5)");
  img2.setAttributeNS(xlinkns, "xlink:href", "../down/down2.png");
  img2.style.opacity = "0.8";
  var img3 = svg.getElementById("img3");
  img3.style.visibility = "hidden";
  var img4 = svg.getElementById("img4");
  img4.style.visibility = "hidden";
}

function resumeFromDown() {
  var obj = document.getElementById("svgobj");
  var svg = obj.contentDocument;
  var imgChange = svg.getElementById("img1");
  var xlinkns = "http://www.w3.org/1999/xlink";
  imgChange.setAttribute("transform", "translate(4,11)");
  imgChange.setAttributeNS(xlinkns, "xlink:href", "../normal/normal1.png");
  imgChange.style.width = "964px";
  var circle1 = svg.getElementById("cirl1");
  circle1.style.visibility = "visible";
  var ell1 = svg.getElementById("ell1");
  ell1.parentNode.removeChild(ell1);
  var img2 = svg.getElementById("img2");
  img2.style.width = "950px";
  img2.style.height = "950px";
  img2.setAttribute("transform", "translate(48 15)");
  img2.setAttributeNS(xlinkns, "xlink:href", "../normal/normal2.png");
  var img3 = svg.getElementById("img3");
  img3.style.visibility = "visible";
  var img4 = svg.getElementById("img4");
  img4.style.visibility = "visible";
}

function changeToActive() {
  var obj = document.getElementById("svgobj");
  var svg = obj.contentDocument;
  var xlinkns = "http://www.w3.org/1999/xlink";
  var img1 = svg.getElementById("img1");
  img1.style.width = "980px";
  img1.setAttribute("transform", "translate(41 9)");
  img1.setAttributeNS(xlinkns, "xlink:href", "../act1/active1.png");

  var img2 = svg.getElementById("img2");
  img2.style.width = "960px";
  img2.setAttribute("transform", "translate(50 18)");
  img2.setAttributeNS(xlinkns, "xlink:href", "../act1/active2.png");

  var img3 = svg.getElementById("img3");

  img3.setAttributeNS(xlinkns, "xlink:href", "../act1/active3.png");

  var img4 = svg.getElementById("img4");
  img4.setAttributeNS(xlinkns, "xlink:href", "../act1/active4.png");

  var path1 = svg.getElementById("path1");
  path1.setAttribute("fill", "#def74b");

  var path2 = svg.getElementById("path2");
  path2.setAttribute("fill", "#7f47dd");

  var path3 = svg.getElementById("path3");
  path3.setAttribute("fill", "#7f47dd");

  var path4 = svg.getElementById("path4");
  path4.setAttribute("fill", "#fcc056");

  var path5 = svg.getElementById("path5");
  path5.setAttribute("fill", "#ff0");

  var path6 = svg.getElementById("path6");
  path6.setAttribute("fill", "#fcee21");

  var path7 = svg.getElementById("path7");
  path7.setAttribute("fill", "#93278f");

  var path8 = svg.getElementById("path8");
  path8.setAttribute("fill", "#93278f");

  var path11 = svg.getElementById("path11");
  path11.setAttribute("fill", "#7f47dd");

  var layer4 = svg.getElementById("Layer_4");
  layer4.style.visibility = "visible";

  var newImg2 = svg.getElementById("img4_2");
  newImg2.style.visibility = "visible";

  var flash = window.setInterval(function() {
    $(newImg2).fadeOut("slow");
    $(newImg2).fadeIn("slow");
  }, 4000);
}

function resumeFromActive() {
  var obj = document.getElementById("svgobj");
  var svg = obj.contentDocument;
  var obj = document.getElementById("svgobj");
  var svg = obj.contentDocument;
  var xlinkns = "http://www.w3.org/1999/xlink";
  var img1 = svg.getElementById("img1");
  img1.style.width = "964px";
  img1.setAttribute("transform", "translate(44 11)");
  img1.setAttributeNS(xlinkns, "xlink:href", "../normal/normal1.png");

  var img2 = svg.getElementById("img2");
  img2.style.width = "950px";
  img2.setAttribute("transform", "translate(48 15)");
  img2.setAttributeNS(xlinkns, "xlink:href", "../normal/normal2.png");

  var img3 = svg.getElementById("img3");
  img3.setAttributeNS(xlinkns, "xlink:href", "../normal/normal3.png");

  var img4 = svg.getElementById("img4");
  img4.setAttributeNS(xlinkns, "xlink:href", "../normal/normal4.png");

  var path1 = svg.getElementById("path1");
  path1.setAttribute("fill", "#aaa");

  var path2 = svg.getElementById("path2");
  path2.setAttribute("fill", "#7a7b7b");

  var path3 = svg.getElementById("path3");
  path3.setAttribute("fill", "#7a7a7b");

  var path4 = svg.getElementById("path4");
  path4.setAttribute("fill", "#7b7c7b");

  var path5 = svg.getElementById("path5");
  path5.setAttribute("fill", "#aaa");

  var path6 = svg.getElementById("path6");
  path6.setAttribute("fill", "#aaa");

  var path7 = svg.getElementById("path7");
  path7.setAttribute("fill", "#18b086");

  var path8 = svg.getElementById("path8");
  path8.setAttribute("fill", "#18b086");

  var path11 = svg.getElementById("path11");
  path11.setAttribute("fill", "#7a7b7b");

  var img4_2 = svg.getElementById("img4_2");
  img4_2.style.visibility = "hidden";
  var img4_1 = svg.getElementById("Layer_4");
  img4_1.style.visibility = "hidden";
}

function playMusic() {
  var music = document.getElementById("mplay");
  music.play();
}

function pauseMusic() {
  var music = document.getElementById("mplay");
  music.pause();
  music.currentTime = 0;
}

function handlehover() {
  var obj = document.getElementById("svgobj");

  if (btn_active == true) {
    resumeFromActive();
    btn_active = false;
    pauseMusic();
  }
  changeToHover();
}

function mouse_leave() {
  if (!btn_active) {
    resumeFromHover();
  }
}

function mouse_down() {
  if (btn_active) return;
  changeToDown();
  btn_pressed = true;
}

function mouse_up() {
  if (btn_pressed) {
    var obj = document.getElementById("svgobj");
    resumeFromDown();
    changeToActive();
    btn_active = true;
    btn_pressed = false;
    playMusic();
  }
}
var a = document.getElementById("svgobj");

a.addEventListener(
  "load",
  function() {
    var svgDoc = a.contentDocument;
    var rect2 = svgDoc.getElementById("last");
    rect2.addEventListener(
      "mouseover",
      function() {
        handlehover();
      },
      false
    );
    rect2.addEventListener(
      "mouseout",
      function() {
        mouse_leave();
      },
      false
    );
    rect2.addEventListener(
      "mousedown",
      function() {
        mouse_down();
      },
      false
    );
    rect2.addEventListener(
      "mouseup",
      function() {
        mouse_up();
      },
      false
    );
  },
  false
);
