
function setup() {
    createCanvas(1024, 1024)
    background(128)
}

var places = new Map()

function mouseDragged() {

    if (Math.random() < 0.2) {
        fill(128, 1);
        rect(0, 0, width, height);
    }

    d = Math.sqrt((pmouseX - mouseX) * (pmouseX - mouseX) + (pmouseY - mouseY) * (pmouseY - mouseY))
    stroke(color(0, 0, 0, 255 / (1 + d)))
    line(pmouseX, pmouseY, mouseX, mouseY)
    X(`stroke(color(0,0,0,255/(1+${d})));line(${pmouseX}, ${pmouseY}, ${mouseX}, ${mouseY})`)
    X(`places.set('${socket.id}', [${pmouseX}, ${pmouseY}])`)

    for (var o of places) {
        drawTo = o[1]
        r = Math.random()
        line(mouseX, mouseY, (drawTo[0] - mouseX) * r + mouseX, (drawTo[1] - mouseY) * r + mouseY)
    }


    pmouseX = mouseX
    pmouseY = mouseY
}
