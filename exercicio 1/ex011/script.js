var textHorario = window.document.querySelector('div#textHorario')
var Horario = new Date()

Horario = Horario.getHours() 


if (Horario > 1) {    
    textHorario.innerText = `Agora são ${Horario} Horas`
} else {
    textHorario.innerText = `Agora é ${Horario} Hora`
}