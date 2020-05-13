
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
    // this draws the same line on everyone else's screen
    // think carefully about the difference between this line:
    X(`circle(${pmouseX}, ${pmouseY}, ${mouseX} - ${mouseY})`)
    // and the 'incorrect' X(`line(pmouseX, pmouseY, mouseX, mouseY)`)
    X(`places.set('${socket.id}', [${pmouseX}, ${pmouseY}])`)
}
