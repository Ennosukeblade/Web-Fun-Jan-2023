var count = [9,12,9]
var tag = [
    document.querySelector(".neil-likes"),
    document.querySelector(".nicole-likes"),
    document.querySelector(".jim-likes")
]
function increaseLikes(i) {
    count[i]++
    tag[i].innerText = count[i] + " likes(s)"
}