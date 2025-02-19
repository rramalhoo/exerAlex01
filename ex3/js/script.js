ac = parseFloat(prompt('Digite a nota da AC'));
ag = parseFloat(prompt('Digite a nota da Avaliacao Geral'));
at = parseFloat(prompt('Digite a nota da Avaliação Trimestral'));

mediaGeral = ((ac * 20) + (ag * 30) + (at * 70)) / 100;

alert(`A media é ${mediaGeral}`)