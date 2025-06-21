
function verificar(){
    var par = window.document.getElementById('par')
    var par =Number(par.value)
    var res = window.document.getElementById('res')

    if (par % 2 == 0 ){
res.innerHTML = `O Valor é par`
    } else{
        res.innerHTML = `O valor é impar`
    }
}
    