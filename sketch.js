function setup() {
    createCanvas(800, 800);
    background("purple");
  }
  
  function draw() {
    stroke("black");
    fill("white");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 25);
    }
  }