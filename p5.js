let emojis = ['🙂', '💻', '🌐', '📡', '💾', '🖥️', '📱', '💻', '🌟'];
let currentEmoji = '';
let lastChangeTime = 0;
let changeInterval = 3000;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
    currentEmoji = emojis[0];
}

function draw() {
    if (dist(mouseX, mouseY, pmouseX, pmouseY) > 10) {
        text(currentEmoji, mouseX, mouseY);
    }

    fill(0,0,0);
    textSize(30);
    let currentTime = millis();
  
    if (currentTime - lastChangeTime > changeInterval) {
      currentEmoji = random(emojis);
      lastChangeTime = currentTime;
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
}
