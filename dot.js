log = console.log.bind(console)
var e = function(selector) {
    var element = document.querySelector(selector)
    return element
}


var addDot = function() {
    var doc = e(".doc")
    doc.addEventListener('click', function(event) {
        // 检查是否监测到点击事件
        log("click")
        var xcoo = Number(event.offsetX)
        var ycoo = Number(event.offsetY)
        //检查 x y 坐标
        log("offsetX:" + xcoo, "offsetY:" + ycoo)
        //插入小圆点
        var container = e(".container")
        var t = template(xcoo, ycoo)
        container.insertAdjacentHTML("beforeend", t)
    })
}

var template = function(xcoo, ycoo) {
    var t = `
        <div class="dot" style="left: ${xcoo}px; top:${ycoo}px;"></div>
    `
    return t
}

addDot()

