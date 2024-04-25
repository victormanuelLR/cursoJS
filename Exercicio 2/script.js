function verifica () {
    var data = new Date()
    data = data.getFullYear()
    var texto = window.document.querySelector('div#TextoInformandoIdadeGenero')
    var anoPluralSingular = '' 
    var AnodeNascimento = window.document.querySelector('input#textAno')
    AnodeNascimento = AnodeNascimento.value
    
    
    if (AnodeNascimento > data || AnodeNascimento.length == 0) {
        window.alert('Verifique os dados novamente')
    } else {
        var sexo = window.document.getElementsByName('radsex')
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        Idade = data - AnodeNascimento
        var genero = ''
        if (sexo[0].checked) {
            genero = 'homem'
        } else if (sexo[1].checked){
            genero = 'mulher'
        }
    }
    if (Idade === 1) {
        anoPluralSingular = 'ano'
    } else {
        anoPluralSingular = 'anos'
    }
    if (genero === 'homem'){
        if (Idade < 10) {
            img.setAttribute('src', 'Imagens/Nenê.png')
        } else if (Idade < 21) {
            img.setAttribute('src', 'Imagens/Jovem.png')
        } else if (Idade < 50) {
            img.setAttribute('src', 'Imagens/Adulto.png')
        } else {
            img.setAttribute('src', 'Imagens/Idoso.png')
        } 
    }else {
        if (Idade < 10) {
            img.setAttribute('src', 'Imagens/Nenê-1.png')
        } else if (Idade < 21) {
            img.setAttribute('src', 'Imagens/Jovem-1.png')
        } else if (Idade < 50) {
            img.setAttribute('src', 'Imagens/Adulto-1.png')
        } else {
            img.setAttribute('src', 'Imagens/Idosa-1.png')
        }
    }
    texto.style.textAlign = 'center'
    texto.innerHTML = `Detectamos ${genero} com ${Idade} anos`
    texto.appendChild(img)
}

