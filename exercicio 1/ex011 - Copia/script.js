var textHorario = window.document.querySelector('div#textHorario')
var Horario = new Date()
var imagembola = window.document.querySelector('img#ImagemBola')
Horario = Horario.getHours() 
Horario = 6


if (Horario > 1) {    
    textHorario.innerText = `Agora são ${Horario} Horas`
} else {
    textHorario.innerText = `Agora é ${Horario} Hora`
}

if (Horario < 13) {
    imagembola.src = 'Manha.png'
    window.document.body.style.background = '#A6D3EA'
} else if (Horario < 18){
    imagembola.src = 'tarde.png'
} else {
    imagembola.src = 'Noite.png'
    window.document.body.style.background = '#324B4F'
}