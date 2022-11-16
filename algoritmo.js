let valorNegativo = false
let salarioMaior = 0
let contadorEntrevistados = 0
let mediaSalario = 0
let mediaFilhos = 0
let percentual = 0

while(valorNegativo === false){
    let salario = parseFloat(prompt("Qual o seu salário"))
    let numFilhos = parseInt(prompt("Quanto filhos você tem?"))

    mediaSalario = mediaSalario + salario
    console.log(mediaSalario)
    mediaFilhos = mediaFilhos + numFilhos

    if(salario > salarioMaior){
        salarioMaior = salario
    }

    if(salario < 150){
        percentual++
    }

    if(salario < 0){
        valorNegativo = true
        mediaSalario = mediaSalario - salario
        mediaFilhos = mediaFilhos - numFilhos
    }else{
        contadorEntrevistados++
    }
}

mediaSalario = mediaSalario/contadorEntrevistados
mediaFilhos = mediaFilhos/contadorEntrevistados
percentual = percentual/contadorEntrevistados

console.log("Média Salarial: " +(mediaSalario))
console.log("Média Filhos: " +(mediaFilhos))
console.log("Maior Salário: " +salarioMaior)
console.log("Percentual de entrevistados com salário menos que R$150,00: " +percentual)
console.log("Número de entrevistados: " +contadorEntrevistados)