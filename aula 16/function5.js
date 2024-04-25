//RECURSIVIDADE
function função (n) {
    if (n == 1) {
        return 1
    } else return n * função(n-1)
}

console.log(função(5))