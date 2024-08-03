// Copied from p5.js tutorial: https://p5js.org/tutorials/setting-up-your-environment/#vscode

function setup() {
  // Overlay a canvas on the website page.
    let cnv = createCanvas(document.documentElement.scrollWidth, document.documentElement.scrollHeight);
    cnv.position(0, 0);
    cnv.style('pointer-events', 'none'); // I asked ChatGPT how to click through a Canvas

  // Resource for adding event listener for adjusting window size: https://stackoverflow.com/questions/641857/javascript-window-resize-event
  // Used ChatGPT to debug issues with calling the resizeCanvas() function.
  window.addEventListener('resize', fixSizing);

  }

  function draw() {
    //when mouse button is pressed, circles turn black

    fill(255, 215, 0, 90);
    noStroke();
  
    //white circles drawn at mouse position
    circle(mouseX, mouseY, random(10,25));
  }

  function fixSizing() {
    resizeCanvas(document.documentElement.scrollWidth, document.documentElement.scrollHeight);
  }