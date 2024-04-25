const add = window.document.querySelector('input#add')
const exec = window.document.querySelector('input#exec')
let res = window.document.querySelector('div#res')
let somaN = 0

let Listadenumeros = []

add.addEventListener('click', adicionar) 
exec.addEventListener('click', executar)

function adicionar(n) {
    n = document.querySelector('input#num')
    
    if (n.value.length === 0) {
        alert('Insira um número')
    } else {
        
        num = Number(n.value)
        n.value = ''
        n.focus()
        
        if (Listadenumeros.indexOf(num) != -1 && num < 0 || num > 100) {
            alert('Número já está presente na lista ou número inválido')
        } else {
            let caixa = window.document.querySelector('select#caixa')
            somaN += num
            let opcao = window.document.createElement('option')
            
            Listadenumeros.push(num)
            
            for(let pos in Listadenumeros )  {
                opcao.setAttribute('value', 0)
                opcao.innerHTML = `Valor ${Listadenumeros[pos]} adicionado`
                caixa.appendChild(opcao)
            }
            
        }
        res.innerHTML = ''
    }
}


function executar () {
    if (Listadenumeros.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let maxN = Listadenumeros[0]
        let minN = Listadenumeros[0]

        for (let pos = 0; pos < Listadenumeros.length; pos ++) {
            if (maxN < Listadenumeros[pos]) {
                maxN = Listadenumeros[pos]
            }
        }

        for (let pos = 0; pos < Listadenumeros.length; pos ++) {
            if (minN > Listadenumeros[pos]) {
                minN = Listadenumeros[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${Listadenumeros.length} cadastrados</p>`
        res.innerHTML += `<p>O maior número é ${maxN}</p>`
        res.innerHTML += `<p>O menor número é ${minN}</p>`
        res.innerHTML += `<p>A soma dos números é ${somaN}</p>`
        res.innerHTML += `<p>A média dos números é ${somaN / Listadenumeros.length}</p>`
    }
    
    /*let qtdN = window.document.querySelector('p#qtdN')
    let maxN = window.document.querySelector('p#maxN')
    let minN = window.document.querySelector('p#minN')
    let somN = window.document.querySelector('p#somN')
    let medN = window.document.querySelector('p#medN')*/
    
    /*qtdN.innerHTML = `Ao todo, temos ${Listadenumeros.length} cadastrados`
    maxN.innerHTML = `O maior número é ${Math.max(...Listadenumeros)}`
    minN.innerHTML = `O menor número é ${Math.min(...Listadenumeros)}`
    somN.innerHTML = `O soma dos números é ${somaN}`
    medN.innerHTML = `A média dos números é ${somaN / Listadenumeros.length}`*/
}