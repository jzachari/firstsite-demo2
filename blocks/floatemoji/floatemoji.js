function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  var w = window.innerWidth;
  var h = window.innerHeight;
  function frame() {
    if (pos == h) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

export default function decorate(block) {
  let new_div = document.createElement("div");
  div.id = "container";
    let new_div2 = document.createElement("div");
    div.id = "animate";
      var x = document.createElement("BUTTON");
      var t = document.createTextNode("Click me");
      x.appendChild(t);
      document.body.appendChild(x);
}
