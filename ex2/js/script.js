inicio =parseFloat(prompt(`Digite o KM mostrado no painel:`))
posto = parseFloat(prompt(`Digite os KM ao chegar no posto de gasolina:`))
abastecidos = parseFloat(prompt(`Digite quantos litros foi reabastecidos:`))

media = inicio + posto / abastecidos;

alert(`O veiculo faz ${media}km/l`)