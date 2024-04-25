let num = [5,2,3,4,9]
num[5] = 1
num.push(211)
num.sort()
/*for(let pos = 0;pos < num.length; pos++) {
    console.log(`array: ${num[pos]}`)
}*/
for(let pos in num) {
    console.log(`array: ${num[pos]}`)
}
/*let pos = num.indexOf(9)
console.log(pos)*/
