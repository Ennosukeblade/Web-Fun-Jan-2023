console.log("page loaded...");

var element = [
    document.querySelector(".todd"),
    document.querySelector(".phil")
]
var reqNumber = document.querySelector(".req-number")
function removeReq(idx) {
    element[idx].remove()
    reqNumber.innerText -= 1
}

var profileName = document.querySelector(".card-body h1")
function changeName() {
    profileName.innerText = "Sarah Holmes"
}
var toAdd = [
    document.querySelector(".todd #todd").innerHTML,
    document.querySelector(".phil #phil").innerHTML
]

var connections = document.querySelector(".connections")
var conNumber = document.querySelector(".con-number")
var counter = 500
function addConnection(idx) {
    connections.innerHTML += `<li class="card-list-item start">${toAdd[idx]}</li>`
    counter++
    conNumber.innerText = counter + "+"
    console.log(connections);
    reqNumber.innerText -= 1
    element[idx].remove()
}

