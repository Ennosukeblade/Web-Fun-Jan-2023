var fac = 1
for (var i = 2; i <= 12; i++) {
    fac *= i
}
console.log(fac);

// another method
var fac2 = 1
var i = 2
while (i <= 12) {
    fac2 *= i
    i++
}
console.log(fac2);