let img = document.getElementById("input-view")
let xValue = document.getElementById("x")
let yValue = document.getElementById("y")

inputDisplay.addEventListener("mousedown", getCoordinates)

function getCoordinates(e) {
    var PosX = 0;
    var PosY = 0;
    var imgPos;
    imgPos = [img.x, img.y];;
    if (e.pageX || e.pageY) {
        PosX = e.pageX;
        PosY = e.pageY;
    }

    // console.log({
    //     imgHeight: img.naturalHeight
    //     offsetHeight: img.offsetHeight,
    //     offsetTop: img.offsetTop,
    //     totalOffset: img.offsetHeight + img.offsetTop,
    //     posY: PosY,
    //     value: (img.offsetHeight + img.offsetTop) - PosY,
    //     yCor: (((img.offsetHeight + img.offsetTop) - PosY)/img.offsetHeight)
    // })

    // console.log({
    //     imgWidth: img.naturalWidth
    //     offsetLeft: img.offsetLeft,
    //     offsetWidth: img.offsetWidth,
    //     totalOffset: img.offsetWidth - img.offsetLeft,
    //     posX: PosX,
    //     value: PosX - img.offsetLeft,
    //     xCor: ((PosX - img.offsetLeft) / (img.offsetWidth))
    // })

    xValue.value = Math.round(((PosX - img.offsetLeft) / (img.offsetWidth)).toFixed(4) * img.naturalWidth);
    yValue.value = Math.round((((img.offsetHeight + img.offsetTop) - PosY) / img.offsetHeight).toFixed(4) * img.naturalHeight);
}
