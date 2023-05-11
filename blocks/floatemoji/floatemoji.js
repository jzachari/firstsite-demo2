function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  const elemmirror = document.getElementById("animatemirror");
  let pos = 0;
  let vpos = 0;
  let hpos = 0;
  let vposmirror = 0;
  let hposmirror = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  var w = window.innerWidth;
  var h = window.innerHeight;
  function frame() {
    if (vpos >= h) {
      clearInterval(id);
    } else {      
      pos++;
      let radians = pos * Math.PI/180;
      vpos = pos + 100 * Math.sin(radians);
      hpos = pos + 75 * Math.cos(radians);
      elem.style.top = -pos + "px";
      elem.style.left = hpos + "px";
      vposmirror = pos + 100 * Math.cos(radians);
      hposmirror = pos + 75 * Math.sin(radians);
      elemmirror.style.top = -pos + "px";
      elemmirror.style.left = hposmirror + "px";
    }
  }
}


function myMove2() {
  let id = null;
  const elem = document.getElementById("animate2");
  const elemmirror = document.getElementById("animatemirror2");
  let pos = 0;
  let hpos = 0;
  let vpos = 0;
  let vposmirror = 0;
  let hposmirror = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  var w = window.innerWidth;
  var h = window.innerHeight;
  function frame() {
    if (vpos >= h) {
      clearInterval(id);
    } else {      
      pos++;
      let radians = pos * Math.PI/180;
      vpos = pos + 100 * Math.sin(radians);
      hpos = pos +  100 * Math.cos(radians);
      elem.style.top = -vpos + "px";
      elem.style.left = hpos + "px";
 //     vposmirror = pos + 100 * Math.cos(radians);
        vposmirror = (pos**1.15)/2;   
        hposmirror = pos + 50 * Math.sin(radians);  
      elemmirror.style.top = -vposmirror + "px";
      elemmirror.style.left = hposmirror + "px";
    }
  }
}

export default function decorate(block) {
  let new_div = document.createElement("div");
    new_div.id = "container";
  let new_div2 = document.createElement("div");
    new_div2.id = "animate";
// var x = document.createElement("BUTTON");
// var t = document.createTextNode("Click me");
//   x.appendChild(t);
//   document.body.appendChild(x);
//   x.addEventListener("click", myMove);
  var z = document.createTextNode("Click an emoji to react to the page.");
    document.body.appendChild(z); 
  new_div.appendChild(new_div2);
    document.body.appendChild(new_div);
  var emoji = document.createTextNode("❤️");
    new_div2.appendChild(emoji);
    new_div2.addEventListener("click", myMove);
  let new_div3 = document.createElement("div");
    new_div3.id = "animatemirror";
    new_div.appendChild(new_div3);
      var emojimirror = document.createTextNode("❤️");
      new_div3.appendChild(emojimirror);
  let second_emoji_div = document.createElement("div");
    second_emoji_div.id = "container2";
  let second_emoji_div_animate = document.createElement("div");
    second_emoji_div_animate.id = "animate2";
    second_emoji_div.appendChild(second_emoji_div_animate);
    document.body.appendChild(second_emoji_div);
  var emoji2 = document.createTextNode("🚀");
    second_emoji_div_animate.appendChild(emoji2);
    second_emoji_div_animate.addEventListener("click", myMove2);
  let second_emoji_div_animate_mirror = document.createElement("div");
    second_emoji_div_animate_mirror.id = "animatemirror2";
    second_emoji_div.appendChild(second_emoji_div_animate_mirror);
      var secondemojimirror = document.createTextNode("🚀");
      second_emoji_div_animate_mirror.appendChild(secondemojimirror);
}
