function loadingWeather() {
    alert("Loading weather report...")
}
var cookies = document.querySelector(".cookies")
function acceptCookies() {
    cookies.remove()
}
var max = [
    {
        c: 24,
        f: 75,
    },
    {
        c: 27,
        f: 80
    },
    {
        c: 21,
        f: 69
    },
    {
        c: 26,
        f: 78
    }
]
var min = [
    {
        c: 18,
        f: 65,
    },
    {
        c: 19,
        f: 66
    },
    {
        c: 16,
        f: 61
    },
    {
        c: 21,
        f: 70
    }
]
var daysmax = [
    document.querySelector(".day1 #max-temp"),
    document.querySelector(".day2 #max-temp"),
    document.querySelector(".day3 #max-temp"),
    document.querySelector(".day4 #max-temp"),
]
var daysmin = [
    document.querySelector(".day1 #min-temp"),
    document.querySelector(".day2 #min-temp"),
    document.querySelector(".day3 #min-temp"),
    document.querySelector(".day4 #min-temp"),
]
function chooseUnit(it) {
    console.log("you choose " + it.value)
    if (it.value === "celsius"){
for (var i = 0; i < daysmax.length; i++) {
    daysmax[i].innerText = max[i].c + "°"
    daysmin[i].innerText = min[i].c + "°"    
} 

}else {
    for (var i = 0; i < daysmin.length; i++) {
        daysmax[i].innerText = max[i].f + "°"
        daysmin[i].innerText = min[i].f + "°"    
    } 
    }

}




