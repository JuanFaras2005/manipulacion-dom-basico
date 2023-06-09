const fechas = [ 
    {
        mes: "abril",
        diasDelMes: 31,
        diasFestivos: 5,
    },
    {
        mes: "agosto",
        diasDelMes: 30,
        diasFestivos: 10,
    },
    {
        mes: "febrero",
        diasDelMes: 28,
        diasFestivos: 3,
    },
];

const diasMesConDiasFestivos = fechas.map(function(diasObject) {
    return diasObject.diasDelMes * diasObject.diasFestivos;
});

const sumaDeDiasMesConDiasFestivos = diasMesConDiasFestivos.reduce(function(suma, nuevoValor) {
    return suma + nuevoValor;
}, 0);

const festivos = fechas.map(function(diasObject) {
    return diasObject.diasFestivos;
});

const sumaDeFestivos = festivos.reduce(function(suma, nuevoValor) {
    return suma + nuevoValor;
}, 0);

const PromedioPonderadoDiasMesConDiasFestivos = sumaDeDiasMesConDiasFestivos / sumaDeFestivos;

console.log(PromedioPonderadoDiasMesConDiasFestivos);
