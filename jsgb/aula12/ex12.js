var agora = new Date()
var min = new Date()
var hora = agora.getHours()
var minu = min.getMinutes()
var dataatual = new Date()
var data = dataatual.getUTCDate()


console.log (`Hoje é  dia ${dataatual} e agora são ${hora} horas e ${minu} minutos`)
if (hora < 12) {
    console.log('Bom dia!')
}else if (hora <= 18){
    console.log('boa tarde!')
}else {
    console.log ('Boa noite')
}