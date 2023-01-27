var count = 3
var likes = document.querySelector(".likes")
function increaseLikes() {
    count++
    console.log(count);
    likes.innerText = count + " likes(s)"
}