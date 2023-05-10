function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  const elemmirror = document.getElementById("animatemirror");
  let pos = 0;
  let vpos = 0;
  let vposmirror = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  var w = window.innerWidth;
  var h = window.innerHeight;
  function frame() {
    if (vpos >= h) {
      clearInterval(id);
    } else {      
      pos++;
      let radians = pos * Math.PI/180;
      vpos = pos + 100 * Math.sin(radians);
      elem.style.top = -vpos + "px";
      elem.style.left = pos + "px";
      vposmirror = pos + 100 * Math.cos(radians);
      elemmirror.style.top = -vposmirror + "px";
      elemmirror.style.left = pos + "px";
    }
  }
}

export default function decorate(block) {
  let new_div = document.createElement("div");
    new_div.id = "container";
  let new_div2 = document.createElement("div");
    new_div2.id = "animate";
  var x = document.createElement("BUTTON");
  var t = document.createTextNode("Click me");
    x.appendChild(t);
    document.body.appendChild(x);
    x.addEventListener("click", myMove);
  new_div.appendChild(new_div2);
    document.body.appendChild(new_div);
  var emoji = document.createTextNode("❤️");
    new_div2.appendChild(emoji);
  let new_div3 = document.createElement("div");
    new_div3.id = "animatemirror";
    new_div.appendChild(new_div3);
      var emojimirror = document.createTextNode("❤️");
      new_div3.appendChild(emojimirror);
}
