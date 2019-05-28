log = console.log.bind(console)
var e = function(selector) {
    var element = document.querySelector(selector)
    return element
}

var appendHtml = (element, html) => {
    element.insertAdjacentHTML('beforeend', html)
}

var draw = true
var xcoo, ycoo


var doc = e(".doc")
var bindMove = function() {
    doc.addEventListener('mousemove', function(event) {
        var xcoo = Number(event.offsetX)
        var ycoo = Number(event.offsetY)
        addDot(xcoo, ycoo)

    })
}


var addDot = function(xcoo, ycoo) {
    var container = e(".container")
    var t = template(xcoo, ycoo)
    if (draw == true) {
        appendHtml(container, t)
    }
    
}



var template = function(xcoo, ycoo) {
    var t = `
        <div class="dot" style="left: ${xcoo}px; top:${ycoo}px;"></div>
    `
    return t
}


doc.addEventListener("mousedown", function(event) {
    draw = true
    bindMove(draw)
})

doc.addEventListener("mouseup", function(event) {
    draw = false
})








