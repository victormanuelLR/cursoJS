function gerar_tabuada() {
    var numero = window.document.querySelector('input#numero')
    var res = window.document.querySelector("p#res")
    var select = window.document.createElement('select')
    numero.value = Number(numero.value)
    if (numero.value.length === 0) {
        alert('Digite um numero')
        res.innerHTML = ''
    } else {
        res.innerHTML = ''
        select.setAttribute('size', 10)
        for (var cont = 1;cont <= 10 ; cont ++) {
            var option = window.document.createElement('option')
            option.setAttribute('value', cont)
            option.innerHTML += `${numero.value} x ${cont} = ${numero.value *cont}`
            select.appendChild(option)
        }
        
        res.appendChild(select)
    }
    
}