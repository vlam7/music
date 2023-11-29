var n;
let sound, sound1, sound2, sound3, sound4;
let sound5, sound6, sound7, sound8, sound9;
let sound10, sound11, sound12, sound13, sound14;
let sound15, sound16, sound17, sound18, sound19;
let sound20, sound21, sound22, sound23, sound24, sound25;
let promptText = "press and hold any keyboard to discover";
let promptVisible = true;
let colors = ['#8C7853'];
let betterGradeFont;
let typedText = "";
let typingSpeed = 2; // Adjust the typing speed

function preload() {
  // Load BetterGrade font
  betterGradeFont = loadFont('BetterGrade.ttf');
}
function setup() {
  //piano sound
  sound = loadSound("A minor.wav");
  sound1 = loadSound("Ambient Sound.wav");
  sound2 = loadSound("To X.mp3");
  sound3 = loadSound("Burn It Down.mp3");
  sound4 = loadSound("Funky Sound.wav");
  sound5 = loadSound("Fabulous.mp3");
  sound6 = loadSound("Melt Away.mp3");
  sound7 = loadSound("LoFi Sound.wav");
  sound8 = loadSound("A major.wav");
  //piano note
  sound9 = loadSound("A.wav");
  sound10 = loadSound("A2.wav");
  sound11 = loadSound("B major.wav");
  sound12 = loadSound("C1.wav");
  sound13 = loadSound("C3.wav");
  sound14 = loadSound("D1.wav");
  sound15 = loadSound("D2.wav");
  sound16 = loadSound("F2.wav");
  sound17 = loadSound("F1.wav");
  sound18 = loadSound("C2.wav");
  //guitar sound
  sound19 = loadSound("Waves.wav");
  sound20 = loadSound("Stay with Me.wav");
  sound21 = loadSound("Feelings.wav");
  sound22 = loadSound("Spanish.wav");
  sound23 = loadSound("Spliced.wav");
  sound24 = loadSound("Peace.wav");
  sound25 = loadSound("Green Eyes.wav");
  createCanvas(window.innerWidth, window.innerHeight);
  background("rgba(0, 0, 0, 0)");
  n = 10;
  stroke(random(0), 18);
  //noFill();
  textFont(betterGradeFont);

}

function draw() {
  if (promptVisible) {
    clear();
    fill('#8C7853');
    textSize(100);
    textAlign(CENTER);
    text(typedText, width / 2, height / 2);
  }
  noFill();
  // Typewriter effect
  // Typewriter effect
  if (frameCount % typingSpeed === 0 && typedText.length < promptText.length) {
    typedText = promptText.substring(0, typedText.length + 1);
  }

  // clear the background every 500 frames using mod (%) operator
  if (frameCount % 500 == 0) {
    clear();
  }
  //a
  if (keyIsDown(65)) {
    vinh();
  }
  //h
  if (keyIsDown(72)) {
    vinh();
  }
  //g
  if (keyIsDown(71)) {
    vinh();
  }
  //f
  if (keyIsDown(70)) {
    vinh();
  }
  //s
  if (keyIsDown(83)) {
    vinh();
  }
  //d
  if (keyIsDown(68)) {
    vinh();
  }
  //j
  if (keyIsDown(74)) {
    vinh();
  }
  //k
  if (keyIsDown(75)) {
    vinh();
  }
  //l
  if (keyIsDown(76)) {
    vinh();
  }
  //q
  if (keyIsDown(81)) {
    vinh();
  }
  //w
  if (keyIsDown(87)) {
    vinh();
  }
  //e
  if (keyIsDown(69)) {
    vinh();
  }
  //r
  if (keyIsDown(82)) {
    vinh();
  }
  //t
  if (keyIsDown(84)) {
    vinh();
  }
  //y
  if (keyIsDown(89)) {
    vinh();
  }
  //u
  if (keyIsDown(85)) {
    vinh();
  }
  //i
  if (keyIsDown(73)) {
    vinh();
  }
  //o
  if (keyIsDown(79)) {
    vinh();
  }
  //p
  if (keyIsDown(80)) {
    vinh();
  }
  //z
  if (keyIsDown(90)) {
    vinh();
  }
  //x
  if (keyIsDown(88)) {
    vinh();
  }
  //c
  if (keyIsDown(67)) {
    vinh();
  }
  //v
  if (keyIsDown(86)) {
    vinh();
  }
  //b
  if (keyIsDown(66)) {
    vinh();
  }
  //n
  if (keyIsDown(78)) {
    vinh();
  }
  //m
  if (keyIsDown(77)) {
    vinh();
  }
}

function keyTyped() {
  if (promptVisible) {
    clear();
    background("rgba(0, 0, 0, 0)");
    promptVisible = false;
  }

  if (key == "a") {
    vinh();
    sound2.play();
  }

  if (key == "h") {
    vinh();
    sound1.play();
  }

  if (key == "g") {
    vinh();
    sound.play();
  }

  if (key == "f") {
    vinh();
    sound3.play();
  }

  if (key == "j") {
    vinh();
    sound4.play();
  }

  if (key == "d") {
    vinh();
    sound5.play();
  }

  if (key == "s") {
    vinh();
    sound6.play();
  }

  if (key == "k") {
    vinh();
    sound7.play();
  }

  if (key == "l") {
    vinh();
    sound8.play();
  }

  if (key == "q") {
    sound9.play();
    vinh();
  }

  if (key == "w") {
    vinh();
    sound10.play();
  }

  if (key == "e") {
    vinh();
    sound11.play();
  }

  if (key == "r") {
    vinh();
    sound12.play();
  }

  if (key == "t") {
    vinh();
    sound13.play();
  }

  if (key == "y") {
    sound14.play();
    vinh();
  }

  if (key == "u") {
    vinh();
    sound15.play();
  }

  if (key == "i") {
    vinh();
    sound16.play();
  }

  if (key == "o") {
    vinh();
    sound17.play();
  }

  if (key == "p") {
    vinh();
    sound18.play();
  }

  if (key == "z") {
    vinh();
    sound19.play();
  }

  if (key == "x") {
    vinh();
    sound20.play();
  }

  if (key == "c") {
    vinh();
    sound21.play();
  }

  if (key == "v") {
    vinh();
    sound22.play();
  }

  if (key == "b") {
    vinh();
    sound23.play();
  }

  if (key == "n") {
    vinh();
    sound24.play();
  }

  if (key == "m") {
    vinh();
    sound25.play();
  }
}

function keyReleased() {
  promptVisible = true;
  noStroke();

  //piano sound
  sound.stop(),
    sound1.stop(),
    sound2.stop(),
    sound3.stop(),
    sound4.stop(),
    sound5.stop(),
    sound6.stop(),
    sound7.stop(),
    sound8.stop(),
    //piano note
    sound9.stop(),
    sound10.stop(),
    sound11.stop(),
    sound12.stop(),
    sound13.stop(),
    sound14.stop(),
    sound15.stop(),
    sound16.stop(),
    sound7.stop(),
    sound18.stop(),
    //guitar sound
    sound19.stop(),
    sound20.stop(),
    sound21.stop(),
    sound22.stop(),
    sound23.stop(),
    sound24.stop(),
    sound25.stop();

    typedText = "press and hold any keyboard to discover again";

}

function vinh() {
  var x1 = width * noise(n + 15);
  var x2 = width * noise(n + 25);
  var x3 = width * noise(n + 35);
  var x4 = width * noise(n + 45);
  var y1 = height * noise(n + 55);
  var y2 = height * noise(n + 65);
  var y3 = height * noise(n + 75);
  var y4 = height * noise(n + 85);
  let randomColor1 = random(colors);

  stroke(randomColor1);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  n += 0.005;
}
