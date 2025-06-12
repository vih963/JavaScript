function calcular(){

    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
var s = window.document.getElementById('res')
    var n1 =Number(tn1.value)
    var n2= Number(tn2.value)

var s = n1 +n2
 res.innerHTML=`a SOMA de ${n1} + ${n2} =${s}`


}

function subtrair(){
    var tn3 = window.document.querySelector('input#txtn3')
    var tn4 = window.document.getElementById('txtn4')
    var menos =window.document.getElementById('sub')
    var n3= Number(tn3.value)
    var n4= Number(tn4.value)

    var menos = n3 - n4
    sub.innerHTML = `A SUBTRAÇÂO de ${n3} e ${n4} É IGUAL a ${sub}`
}
