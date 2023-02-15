let valor = document.getElementById(`valor`)
let pessoas = document.getElementById(`pessoas`)
let porcem = document.getElementById(`porcem`)
let res = document.querySelector(`.res`)



function calcularpor(n){
    n = Number(valor.value)
    let porcentagem = (n*Number(porcem.value))/100
    return porcentagem
}
function verificar(){
    if(valor.value.length == 0 || pessoas.value.length == 0 | pessoas.value.length == 0){
        alert(`Os valores não podem ficar vazios`)
    }else{
        if(porcem.value > 100 || porcem.value < 0){
            alert(`A Porcentagem deve ser entre 1 a 100%`)
        }else{
            res.style.border = "1px solid black"
            res.style.backgroundColor = "#6499ee86"
            res.style.borderRadius = "20px"
            res.innerHTML = `VALOR DA GORJETA DO GARSON:${calcularpor(valor.value)} <br>`
            res.innerHTML += `O valor a pagar por pessoa é de ${calcularpor(valor)/pessoas.value}$`
        }
        
    }
    
    
    
}





