console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    };
};
console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo; 
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
};

function calcularAlturaTriangulo (lado1, base) {
    if (lado1 == base ) {
        console.warn('Esto no es un Triangulo Isosceles')
    } else {
        // h = raiz cuadrada (lado1 ** 2 - (b**2)/4)  
    } return Math.sqrt(lado1 ** 2) - ( (base ** 2) /4 );
}


function calcularEscalenoAltura (lado1, lado2, base) {
    const semiperimetro = (lado1 + lado2 + base) /2;
    
    if (lado1 == lado2 && lado1 == base) {
        console.warn('Esto no es un triángulo Escaleno')
    } else {
        H = ((2/lado1)) * Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - base));
        console.log('La altura "H" = ' + H);
    }
}



console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    baseTriangulo,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

console.groupEnd('Triangulo');


console.group('Circle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circuferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

function calcularCirculo (radio) {
    const  diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circuferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    };
};


console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circuferencia,
    areaCirculo,
});

console.groupEnd('Circle');

