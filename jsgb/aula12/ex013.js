var dia = new Date()
var diaSem = dia.getDay()



switch (diaSem){
    case 0:
        console.log ('Domingo')
        break
        case 1:
        console.log ('Segunda')
        break
        case 2:
        console.log ('Terça')
        break
        case 3:
        console.log ('Quarta')
        break
        case 4:
        console.log ('Quint')
        break
        case 5:
        console.log ('Sexta')
        break
        case 6:
        console.log ('Sabado')
        break  
        default:
            console.log ('erro, dia invalido')     
}
console.log (diaSem)

// 0 = Domingo
// 1 = Segunda
// 2 = Terça
// 3 = Quarta
// 4 = Quinta
// 5 = Sexta
// 6 = Sabado



