let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
let hCount = 0
let gCount = 0
function incement1() {
    hCount += 1
    homeEl.textContent = hCount
}

function incement2() {
    hCount += 2
    homeEl.textContent = hCount
}

function incement3() {
    hCount += 3
    homeEl.textContent = hCount
}

function incement4() {
    gCount += 1
    guestEl.textContent = gCount
}

function incement5() {
    gCount += 2
    guestEl.textContent = gCount
}

function incement6() {
    gCount += 3
    guestEl.textContent = gCount
}

function reset() {
    guestEl.textContent = 0
    gCount = 0
    homeEl.textContent =  0
    hCount = 0
}