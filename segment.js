let input = document.getElementById("sam2-input-url")
let submit = document.getElementById("sam-btn")
let x = document.getElementById("x")
let y = document.getElementById("y")
let output = document.getElementById("sam2-output")
let inputDisplay = document.getElementById("input-view")
let baseUrl = "https://f2a1-180-151-45-106.ngrok-free.app"

let segment1 = document.getElementById("segment-1")
let segment2 = document.getElementById("segment-2")
let segment3 = document.getElementById("segment-3")

input.addEventListener("keyup", dispalyImage)
input.onblur = showImage
submit.addEventListener("click", initSegment)

hideOutputs()

async function showImage(event) {
    hideOutputs()
    inputDisplay.src = event.target.value
}
async function dispalyImage(event) {
    hideOutputs()
    if (event.key == 'Enter') {
        inputDisplay.src = event.target.value
    }
}

async function initSegment(event) {
    await segmentImage()
}

async function segmentImage() {
    hideOutputs()
    let currentUrl = localStorage.getItem("baseUrl")
    let segmentUrl = (currentUrl) ? currentUrl : baseUrl
    let url = `${segmentUrl}/segment`
    let body = {
        media_type: "image",
        media_url: input.value,
        model: "large",
        pointers: [
            {
                x: parseFloat(x.value),
                y: parseFloat(y.value),
                label: 1
            }
        ]
    }
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    populateElements(await response.json())
}

function populateElements(resp) {
    hideOutputs(false)
    inputDisplay.src = resp.data.media_url
    let masks = resp.data.masks
    segment1.src = masks[0]
    segment2.src = masks[1]
    segment3.src = masks[2]
}

function hideOutputs(hidden = true) {
    output.style.display = (hidden) ? "none" : "flex"
}