function operacionesmatematicas() {
    var a;
    var b;
    var t;
    var r;
    t = parseInt(prompt("Escoja la opcion que desea realizar:  1. suma/2. resta/3. multiplicacion/4. division"));
    a = parseInt(prompt("Ingrese el primer numero"));
    b = parseInt(prompt("Ingrese el segundo numero "));

    switch (t) {
        case 1:
            r = a + b;
            alert("El resultado de la suma es:  " + r);
            break;
        case 2:
            r = a - b;
            alert("El resultado de la resta es: " + r);
            break;
        case 3:
            r = a * b;
            alert("El resultado de la multiplicacion es: " + r);
            break;
        case 4:
            r = a / b;
            alert("El resultado de la divicion  es: " + r);
            break;
        default:
            alert("Se genero un ERROR")
    }
}
function mayornumero() {
    var num;
    var num2;

    num = parseInt(prompt("Ingrese el primer numero"));
    num2 = parseInt(prompt("Ingrese el segundo numero"));

    if (num > num2) {

        alert("El valor mayor es: " + num);
    } else {
        alert("El valor mayor es:  " + num2);
    }
}
function menortres() {
    var num;
    var num2;
    var num3;

    num = parseInt(prompt("Ingrese el primer numero"));
    num2 = parseInt(prompt("Ingrese el segundo numero"));
    num3 = parseInt(prompt("Ingrese el tercer numero"));

    if (num == num2 && num == num3) {
        alert("Los tres numeros son iguales")
    } else if (num < num2 && num < num3) {
        alert("El numero menor es: " + num)
    }
    else if (num2 < num && num2 < num3) {
        alert("El numero menor es:  " + num2)
    }
    else {
        alert("El numero menor es:  " + num3)
    }
}
function paroimpar() {
    var num;
    num = parseInt(prompt("Ingrese un numero"));

    if (num % 2 == 0) {
        alert("El numero par es:  " + num)
    } else {
        alert("El numero impar es:  " + num)
    }
}
function cuadrado() {
    var x;
    var t;

    x = parseInt(prompt("Ingrese un numero"));

    t = x * x
    alert("El cuadrado del es: " + t)
}
function areatriangulo() {
    var area;
    var b;
    var h;
    h = parseInt(prompt("Ingrese la altura del triangulo"));
    b = parseInt(prompt("Ingrese la base del triangulo"));

    area = b * h / 2;
    alert("El area del triangulo es:  " + area);

}
function centimetrometro() {
    var c;
    var m;
    m = parseInt(prompt("Ingrese los metros"));
    c = m * 100 / 1
    alert("El valor de metros a centimetros son:  " + c);

}
function edadusuario() {
    var edad;
    var año;
    var nacio;
    edad = parseInt(prompt("Ingrese su edad"));
    año = parseInt(prompt("Ingrese el año actual"));

    nacio = año - edad
    alert("Su año de nacimiento es:  " + nacio);
}
function inversion() {
    var i;
    var a;
    var g;


    i = parseInt(prompt("Ingrese cuanto capital desea invertir"));
    a = parseInt(prompt("Ingrese el numero de años de su inversion"));

    alert("La ganancia por el numero de años es:  " + g)
    g = i * 0.002 * a * 2
    alert("La inversion ganada es: " + i)
    i * 0.002 * a * 12
}
function promedio() {
    var c1;
    var c2;
    var c3;
    var c4;
    var c5;
    var p;

    c1 = parseInt(prompt("Ingrese la primera nota"));
    c2 = parseInt(prompt("Ingrese la segunda nota"));
    c3 = parseInt(prompt("Ingrese la tercera nota"));
    c4 = parseInt(prompt("Ingrese la cuatra nota"));
    c5 = parseInt(prompt("Ingrese la quinta nota"));

    p = (c1 + c2 + c3 + c4 + c5) / 5
    if (p > 1 && p <= 2.9) {
        alert("reprueba con: " + p)
    }
    else
        (p > 3 && p >= 5); {
        alert("aprueba con: " + p)
    }
}
function kilos() {
    var k;
    var d;
    var t;
    var kilo;

    k = parseInt(prompt("Ingrese cuantos kilos de manzanas compro"));
    if (k > 0 && k <= 2) {
        t = k * 4500
        kilo = t * 0
        d = t - kilo
        alert("Su descuento es del 0% en total es:  " + d)
    }
    else if
        (k <= 10) {
        t = k * 4500
        kilo = t * 0.15
        d = t - kilo
        alert("Su descuento es del 15% en total es:  " + d)
    }
    else if
        (k > 10 && k <= 11) {
        t = k * 4500
        kilo = t * 0.2
        d = t - kilo
        alert("Su descuento es del 20% en total es:  " + d)
    }
}