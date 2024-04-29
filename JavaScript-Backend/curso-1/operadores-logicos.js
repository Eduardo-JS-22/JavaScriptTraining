const notaFinal = 7;
const faltas = 2;
const adivertencias = 0;

if (notaFinal < 7 || faltas > 4) {
    console.log('REPROVADO, Boas Festas.');
} else {
    console.log('Não foi reprovado por faltas.');
}

if (notaFinal < 7 && faltas > 4) {
    console.log('REPROVADO, Boas Festas.');
} else {
    console.log('Não foi reprovado por faltas.');
}

if (faltas <= 2 && !adivertencias) {
    console.log('Recebeu bonus.');
} else {
    console.log('Não recebeu bonus.');
}