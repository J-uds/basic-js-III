//1. Escribe una función que tome dos números como argumentos y devuelva su suma.
let num1 = 2;
let num2 = 2;
function sum(num1, num2){
    return num1+num2;
}

//2. Escribe una función que tome dos números como argumentos y devuelva su resta.
function sustraction(num1, num2){
    return num1-num2;
}

//3. Escribe una función que tome dos números como argumentos y devuelva su producto.
function product(num1, num2){
    return num1*num2;
}

//4. Escribe una función que tome dos números como argumentos y devuelva su división.
function fraction(num1, num2){
    return num1/num2;
}

//5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
function power(num1, num2){
    return num1**num2;
}

//6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function restFraction(num1, num2){
    return num1%num2;
}

//7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
function squared(num1){
    return Math.sqrt(num1);
}

//8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.
function absolute(num1){
    return Math.abs(num1);
}

//9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.
function rounded(num1){
    return Math.round(num1);
}

//10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
function randomly(){
    return Math.random();
}

//1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
let string1 = "1";
let string2 = "2";
function concetenation(string1, string2){
    return string1+string2;
}
// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
function lenght(string1){
    return string1.lenght;
}

// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
function upperCase(string1){
    return string1.toUpperCase();
}

// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
function lowerCase(string1){
    return string1.toLowerCase();
}

// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
function characterPosition(string1, position){
    return string1[position];
}

// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
function reversed(string1){
    return string1.split("").reverse().join("");
}

// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.
function times(string1, character){
    return 
}
// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.