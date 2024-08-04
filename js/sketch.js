// Copied from p5.js tutorial: https://p5js.org/tutorials/setting-up-your-environment/#vscode

// Video Tutorial I used for creating a Mouse Trail: https://www.youtube.com/watch?v=jiwg4H8a3fI


sparkles = [];

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
    clear();


    fill(255, 215, 0, 95);
    noStroke();
    sparkles.push(createVector(mouseX, mouseY));

    // Followed this tutorial to figure out how to limit the number of circles: https://www.youtube.com/watch?v=jiwg4H8a3fI
    if (sparkles.length > 25) {
      sparkles.shift();
    }
  
    //yellow circles drawn at all prev mouse position
    for (let i = 0; i < sparkles.length; i++) {
      circle(sparkles[i].x, sparkles[i].y, i * random(0.25, 0.5));
    }
  }

  function fixSizing() {
    resizeCanvas(document.documentElement.scrollWidth, document.documentElement.scrollHeight);
  }