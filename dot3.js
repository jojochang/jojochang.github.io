var log = console.log.bind(console)

var e = function(selector) {
    var element = document.querySelector(selector)
    return element
}


var canvas = e('canvas')
var body = e('body')
canvas.setAttribute("width", screen.availWidth);
canvas.setAttribute("height", screen.availHeight);


var context = canvas.getContext('2d')


var draw = false
var x1 = 0
var y1 = 0
var x2, y2






var drawLine = (x1, x2, y1, y2) => {
    context.beginPath();
    context.strokeStyle = 'blue'
    context.lineWidth = 1
    context.moveTo(x1, y1)
    // log("x1:" + x1, "y1:" + y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}
    

canvas.addEventListener('mousedown', e => {
    x1 = e.offsetX 
    y1 = e.offsetY
    draw = true
})
  
canvas.addEventListener('mousemove', e => {
    if (draw === true) {
        x2 = e.offsetX
        y2 = e.offsetY
        drawLine(x1, x2, y1, y2);
        x1 = x2
        y1 = y2
    }
})
  
canvas.addEventListener('mouseup', e => {
    draw = false
})

canvas.addEventListener("mouseleave", function(event) {
    draw = false
    // log('1')
})

log("screen.availWidth:" + window.screen.availWidth)
log("screen.availHeight:" + window.screen.availHeight)


