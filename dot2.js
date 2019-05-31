var log = console.log.bind(console)

var e = function(selector) {
    var element = document.querySelector(selector)
    return element
}

var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}


var svg = e('svg')


var draw = true
var x1, x2, y1, y2


var svg = e("svg")
var bindMove = function() {
    svg.addEventListener('mousemove', function(event) {
        x2 = event.offsetX
        y2 = event.offsetY
        // log(x2, y2)
        drawLine(x1, x2, y1, y2)
        x1 = x2
        y1 = y2

    })
}

var template = (x1, x2, y1, y2) => {
    var t = `
    <line x1="${x1}" x2="${x2}" y1="${y1}" y2="${y2}" stroke="blue" fill="transparent" stroke-width="3"/>
    `
    return t
}

var drawLine = (x1, x2, y1, y2) => {
    var t = template(x1, x2, y1, y2)
    if (draw == true) {
        appendHtml(svg, t)
    }
    
}


svg.addEventListener("mousedown", function(event) {
    draw = true
    bindMove(draw)
    x1 = event.offsetX
    y1 = event.offsetY
    
})

svg.addEventListener("mouseup", function(event) {
    draw = false
})

svg.addEventListener("mouseleave", function(event) {
    draw = false
    // log('1')
})


