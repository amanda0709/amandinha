function setup() {
    createCanvas(550, 550);
  background('white')
  }
  
  function draw() {
   stroke ("blue")
   fill('pink')
    
    if(mouseIsPressed) 
   rect(mouseX,mouseY,20,20);
  }