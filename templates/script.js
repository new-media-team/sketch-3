let on; //is there a circle being drawn
let center_x; //saving center coords
let center_y;
let dia; //saving max diam
let current_dia; //current diam
let iteration;
let circle_count;
let rand_col_1;
let rand_col_3;




function setup() {
    on = 2 //neither being drawn nor finishing
    center_x = 0
    center_y = 0
    iteration = 0
    circle_count = 0
    rand_col_1 =  Math.floor(Math.random() * 200) + 1
    rand_col_3 =  Math.floor(Math.random() * 200) + 1
    createCanvas(1024,1024)
    background(128)
}


function draw() {
  if (on == 0) { //if there is a circle being drawn
    if (current_dia > dia) { //if the iteration hits the diameter, reset
      iteration = 1
    }
    if (circle_count > 254) {
      circle_count = 4
    }
    current_dia = Math.floor(iteration*dia/100) //calculate current diameter
    circle(center_x, center_y, current_dia)
    fill(55+2*iteration, circle_count, Math.floor(Math.random() * 200) + 1)
    X(`circle(${center_x}, ${center_y}, ${current_dia})`)
    X('fill(rand_col_1, circle_count, rand_col_3)');
    iteration = iteration + Math.floor(Math.random() * 10) + 1
    if (Math.random() < 0.2) {
      fill(128, 1);
      rect(0, 0, width, height);
    }
  }
}

function mouseDragged() {
    // this draws a line from the previous mouse position and the current mouse position
    d = Math.sqrt((pmouseX - mouseX) * (pmouseX - mouseX) + (pmouseY - mouseY) * (pmouseY - mouseY))
    c = color(256*Math.random(),256*Math.random(),256*Math.random(),255 / (1 + d));
    circle(pmouseX, pmouseY, mouseX - mouseY);
    fill(c);
    //pass in the audio context
    //var context = new AudioContext();
    //StartAudioContext(context, "#playButton")
    var synth = new Tone.Synth().toMaster();
    var list = ['A1','A2','A3','A4','A5','A6','A7','B1','B2','B3','B4','B5','B6','B7','C1','C2','C3','C4','C5','C6','C7','D1','D2','D3','D4','D5','D6','D7','E1','E2','E3','E4','E5','E6','E7','F1','F2','F3','F4','F5','F6','F7','G1','G2','G3','G4','G5','G6','G7'];
    //play a middle 'C' for the duration of an 8th note
    var pick = Math.round(Math.random() * (list.length - 1));
    var note = list[pick];
    synth.triggerAttackRelease(note, '8n');
    // this draws the same line on everyone else's screen
    // think carefully about the difference between this line:
    if (Math.random()<0.1){
      X(`circle(${pmouseX}, ${pmouseY}, ${mouseX} - ${mouseY}); var synth = new Tone.Synth().toMaster(); synth.triggerAttackRelease('${note}', '8n');`)
    }
    else{
       X(`circle(${pmouseX}, ${pmouseY}, ${mouseX} - ${mouseY});`)
    }
    // and the 'incorrect' X(`line(pmouseX, pmouseY, mouseX, mouseY)`)
    //X(`places.set('${socket.id}', [${pmouseX}, ${pmouseY}])`)
}

function mousePressed() {
    //otherwise save coordinates and listen for second click
    center_x = mouseX
    center_y = mouseY
    on = 1
}

function mouseReleased() {
  //if they already clicked, draw circle using euclidean distance
  dia = 2*(abs((center_x - mouseX))^2+ abs((center_y-mouseY))^2)^(1/2)
  on = 0
  circle_count = circle_count+8;
}
