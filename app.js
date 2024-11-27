const botonAC = document.querySelector('.divAc')
const botonRetroceder = document.querySelector('.divRetroceder')
const botonPorcentaje = document.querySelector('.divPorcentaje')
const botonDivision = document.querySelector('.divDivision')
const boton7 = document.querySelector('.div7')
const boton8 = document.querySelector('.div8')
const boton9 = document.querySelector('.div9')
const botonMultiplicacion = document.querySelector('.divMultiplicacion')
const boton4 = document.querySelector('.div4')
const boton5 = document.querySelector('.div5')
const boton6 = document.querySelector('.div6')
const botonMenos = document.querySelector('.divMenos')
const boton1 = document.querySelector('.div1')
const boton2 = document.querySelector('.div2')
const boton3 = document.querySelector('.div3')
const botonMas = document.querySelector('.divMas')
const boton0 = document.querySelector('.div0')
const botonPunto = document.querySelector('.divPunto')
const botonIgual = document.querySelector('.divIgual')
const tablero = document.querySelector('#resultado')
let primerNumero = null
let segundoNumero = null;
let operador = null

document.addEventListener('DOMContentLoaded', function() {

    // Asegurarse de que siempre haya un 0 al inicio
    if (tablero.value === '') {
        tablero.value = '0';
    }

    boton0.addEventListener('click', function() {
        if (tablero.value !== '0') {
            tablero.value += '0';
        }
    });

    boton1.addEventListener('click', function() {
        if (tablero.value === '0') {
            tablero.value = '1';
        } else {
            tablero.value += '1';
        }
    });

    boton2.addEventListener('click', function() {
        if (tablero.value === '0') {
            tablero.value = '2';
        } else {
            tablero.value += '2';
        }
    });
    boton3.addEventListener('click', function() {
        if (tablero.value === '0') {
            tablero.value = '3';
        } else {
            tablero.value += '3';
        }
    });

    boton4.addEventListener('click', function() {
        if (tablero.value === '0') {
            tablero.value = '4';
        } else {
            tablero.value += '4';
        }
    });

    boton5.addEventListener('click', function() {
        if (tablero.value === '0') {
            tablero.value = '5';
        } else {
            tablero.value += '5';
        }
    });

    boton6.addEventListener('click', function() {
        if (tablero.value === '0') {
            tablero.value = '6';
        } else {
            tablero.value += '6';
        }
    });

    boton7.addEventListener('click', function() {
        if (tablero.value === '0') {
            tablero.value = '7';
        } else {
            tablero.value += '7';
        }
    });

    boton8.addEventListener('click', function() {
        if (tablero.value === '0') {
            tablero.value = '8';
        } else {
            tablero.value += '8';
        }
    });

    boton9.addEventListener('click', function() {
        if (tablero.value === '0') {
            tablero.value = '9';
        } else {
            tablero.value += '9';
        }
    });

    botonPunto.addEventListener('click', function() {
        if (!tablero.value.includes('.')) {
            tablero.value += '.';
        }
    });


    botonPunto.addEventListener('click', function() {
        if (!tablero.value.includes('.')) {
            tablero.value += '.';
        }
    });

    botonAC.addEventListener('click', function() {
        tablero.value = '0';
        primerNumero = null;
        segundoNumero = null;
        operador = null;
    });

    botonMas.addEventListener('click', function() {
        primerNumero = parseFloat(tablero.value);
        operador = '+';
        tablero.value = '0';
    });

    botonMenos.addEventListener('click', function() {
        primerNumero = parseFloat(tablero.value);
        operador = '-';
        tablero.value = '0';
    });

    botonMultiplicacion.addEventListener('click', function() {
        primerNumero = parseFloat(tablero.value);
        operador = '*';
        tablero.value = '0';
    });

    botonDivision.addEventListener('click', function() {
        primerNumero = parseFloat(tablero.value);
        operador = '/';
        tablero.value = '0';
    });

    botonPorcentaje.addEventListener('click', function() {
        tablero.value = (parseFloat(tablero.value) / 100).toString();
    });

    botonIgual.addEventListener('click', function() {
        if (primerNumero !== null && operador !== null) {
            segundoNumero = parseFloat(tablero.value);
            let resultado = 0;

            switch (operador) {
                case '+':
                    resultado = primerNumero + segundoNumero;
                    break;
                case '-':
                    resultado = primerNumero - segundoNumero;
                    break;
                case '*':
                    resultado = primerNumero * segundoNumero;
                    break;
                case '/':
                    if (segundoNumero !== 0) {
                        resultado = primerNumero / segundoNumero;
                    } else {
                        resultado = 'Error';
                    }
                    break;
            }

            tablero.value = resultado.toString();
            primerNumero = null;
            segundoNumero = null;
            operador = null;
        }
    });

    botonRetroceder.addEventListener('click', function() {
        if (tablero.value.length > 1) {
            tablero.value = tablero.value.slice(0, -1);
        } else {
            tablero.value = '0';
        }
    });

});


