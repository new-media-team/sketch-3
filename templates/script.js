function setup() {
    createCanvas(1024,1024)
    background(128)
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
