function contar () {    
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var res = window.document.querySelector('p#res')

    
    if (inicio.value.length === 0) {
        alert('Insira o numero inicial')
        res.innerHTML = ''

    }
    if (fim.value.length === 0) {
        alert('Insira o numero final')
        res.innerHTML = ''

    }
    if (passo.value.length === 0 || passo.value <= 0) {
        alert('Impossivel dar 0 passos ou menos será tratado como 1 passo')
        passo = 1

    } else{
        passo = Number(passo.value)

    }
    if (inicio.value.length === 0|| fim.value.length === 0){
        res.innerHTML = 'Impossivel contar'
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        /*alert(inicio)
        alert(passo)
        alert(fim)
        alert(inicio)*/
        res.innerHTML = 'Contando: <br>'
        if (inicio <= fim ) {
            
            for (inicio; inicio <= fim; inicio += passo) {
                res.innerHTML += `${inicio} 👉 `
            } 
        } else {
            for (inicio; inicio >= fim ; inicio -= passo)
            res.innerHTML += `${inicio} 👉 `
        res.innerHTML += '\u{1F3C1}'
    }
    }
}