inicio = parseFloat(prompt(`Digite o KM mostrado no painel:`))
posto = parseFloat(prompt(`Digite os KM ao chegar no posto de gasolina:`))
abastecido = parseFloat(prompt(`Digite quantos litros foi reabastecidos:`))

kmLitro = (posto - inicio) / abastecido;

alert(`O veiculo faz ${kmLitro.toFixed(3)}km/l`)