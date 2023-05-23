// myMove is for the heart animation
function myMove() {
  let id = null;
  const elem = document.getElementById('animate');
  const elemmirror = document.getElementById('animatemirror');
  let pos = 0;
  let vpos = 0;
  let hpos = 0;
  // let vposmirror = 0;
  let hposmirror = 0;
  clearInterval(id);
  // let w = 'window.innerWidth';
  let h = 'window.innerHeight';
  function frame() {
    if (vpos >= h) {
      clearInterval(id);
    } else {
      pos = pos + 1;
      const radians = pos * Math.PI/180;
      vpos = pos + 100 * Math.sin(radians);
      hpos = pos + 75 * Math.cos(radians);
      elem.style.top = -pos + "px";
      elem.style.left = hpos + "px";
      // vposmirror = pos + 100 * Math.cos(radians);
      hposmirror = pos + 75 * Math.sin(radians);
      elemmirror.style.top = -pos + "px";
      elemmirror.style.left = hposmirror + "px";
    }
  }
  id = setInterval(frame, 5);
}

// myMove2 is for the Rocket animation
function myMove2() {
  let id = null;
  const elem = document.getElementById('animate2');
  const elemmirror = document.getElementById('animatemirror2');
  let pos = 0;
  let hpos = 0;
  let vpos = 0;
  let vposmirror = 0;
  let hposmirror = 0;
  clearInterval(id);
  // let w = 'window.innerWidth';
  let h = 'window.innerHeight';
  function frame() {
    if (vpos >= h) {
      clearInterval(id);
    } else {      
      pos = pos + 1;
      const radians = pos * Math.PI/180;
      vpos = pos + 100 * Math.sin(radians);
      hpos = pos +  100 * Math.cos(radians);
      elem.style.top = -vpos + "px";
      elem.style.left = hpos + "px";
 // vposmirror = pos + 100 * Math.cos(radians);
        vposmirror = (pos**1.15)/2;   
        hposmirror = pos + 50 * Math.sin(radians);  
      elemmirror.style.top = -vposmirror + "px";
      elemmirror.style.left = hposmirror + "px";
    }
  }
  id = setInterval(frame, 5);
}



export default function decorate(block) {
  // Create a div to be used with a text
  let floatemoji_text_div = document.createElement("div");
    floatemoji_text_div.id = "floatemojitext";
    
  // Create some text and nest it in floatemoji_text_div
  var floatemojitext = document.createTextNode("Click an emoji to react to the page.");
    floatemoji_text_div.appendChild(floatemojitext);

  // Nest floatemoji_text_div in the page
  document.body.appendChild(floatemoji_text_div);

  // This creates a div and gives it an id of "container", this id is referenced in the css file.
  let new_div = document.createElement("div");
    new_div.id = "container";

  // This creates a div and gives it an id of "animate", this id is referenced in the css file.  
  let new_div2 = document.createElement("div");
    new_div2.id = "animate";

// The next commented out lines would have created a button that calls the myMove function.   
// var x = document.createElement("BUTTON");
// var t = document.createTextNode("Click me");
//   x.appendChild(t);
//   document.body.appendChild(x);
//   x.addEventListener("click", myMove);

  // Assemble the divs.
  // nest new_div2 inside new_div.  
  new_div.appendChild(new_div2);

  // nest new_div inside the whole page.
    document.body.appendChild(new_div);

  // Create the large heart emoji and nest it in new_div2.  Make it clickable, and on click it calls the myMove function.  
  var emoji = document.createTextNode("❤️");
    new_div2.appendChild(emoji);
    new_div2.addEventListener("click", myMove);
  
  // Create new_div3 with an id of animatemirror.  Nest new_div3 inside of new_div.
  // Create the small heart emoji and nest it in new_div3.
  let new_div3 = document.createElement("div");
    new_div3.id = "animatemirror";
    new_div.appendChild(new_div3);
      var emojimirror = document.createTextNode("❤️");
      new_div3.appendChild(emojimirror);

  // Create a div that contains the rocket emojis.  This is hard coded in the css to be left 50px of the hearts.
  // There is probably a better way of doing this.  It uses "container2" and "animate2" in the css.    
  let second_emoji_div = document.createElement("div");
    second_emoji_div.id = "container2";
  let second_emoji_div_animate = document.createElement("div");
    second_emoji_div_animate.id = "animate2";

    // nest second_emoji_div_animate inside of second_emoji_div.
    second_emoji_div.appendChild(second_emoji_div_animate);

    // Nest second_emoji_div inside of the page.
    document.body.appendChild(second_emoji_div);

  // Create the large rocket emoji.  Nest it inside second_emoji_div_animate, and on click it calls the myMove2 function.
  var emoji2 = document.createTextNode("🚀");
    second_emoji_div_animate.appendChild(emoji2);
    second_emoji_div_animate.addEventListener("click", myMove2);

  // Create a second_emoji_div_animate_mirror div.
  let second_emoji_div_animate_mirror = document.createElement("div");
    second_emoji_div_animate_mirror.id = "animatemirror2";

    // Nest second_emoji_div_animate_mirror inside of second_emoji_div.
    second_emoji_div.appendChild(second_emoji_div_animate_mirror);

      // Create the small rocket emoji and nest it inside of second_emoji_div_animate_mirror.
      var secondemojimirror = document.createTextNode("🚀");
      second_emoji_div_animate_mirror.appendChild(secondemojimirror);
}

