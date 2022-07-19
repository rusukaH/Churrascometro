//Carne - 400gr por pessoa + de 6 horas - 650gr
//Cerveja - 1200ml por pessoa + de 6 horas 2000ml
//Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
//Crianças valem por 0.5



let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de berveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} Garrafas Pet(2l) de bebida</p>`
}


function carnePP (duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP (duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP (duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}