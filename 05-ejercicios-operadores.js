// 1. Crea una variable para cada operacion aritmetica.
    let suma = 3 + 2;
    let resta = 3 - 2;
    let multiplicacion = 3 * 2;
    let division = 3 / 2;
    let modulo = 3 % 2;
    let exponente = 3 ** 2;

// 2. Crea una variable para cada tipo de operacion de asignacion que 
// haga uso de las variables utilizadas para las operaciones aritmeticas.
    let asignacionSuma = suma += 5;
    let asignacionResta = resta -= 5;
    let asignacionMult = multiplicacion *= 5;
    let asignacionDiv = division /= 5;
    let asignacionModulo = modulo %= 5;
    let asignacionExp = exponente **= 5;

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparacion.
    console.log(suma < multiplicacion);
    console.log(resta < division);
    console.log(exponente > multiplicacion);
    console.log(modulo < suma);
    console.log(suma > resta);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion.
    console.log(suma > multiplicacion);
    console.log(resta == division);
    console.log(exponente < multiplicacion);
    console.log(modulo == suma);
    console.log(suma < resta);

// 5. Utiliza el operador logico AND
    console.log(suma < multiplicacion && modulo < suma);
    console.log(modulo == suma && modulo < suma);

// 6. Utiliza el operador logico OR
    console.log(suma < resta || exponente > multiplicacion);
    console.log(resta == division || suma > multiplicacion);

// 7. Combina ambos operadores logicos.
    console.log(suma < multiplicacion && modulo < suma || resta == division || suma > multiplicacion);
    console.log((resta == division || suma > multiplicacion) && (exponente < multiplicacion && modulo < suma));

// 8. Añade alguna negacion.
    console.log(!(resta == division || suma > multiplicacion && exponente < multiplicacion && modulo < suma));

// 9. Utiliza el operador ternario.
    true != false ? true : false;

// 10. Combina operadores aritmeticos, de comparacion y logicos.
    4+5 > 2+1 && suma < multiplicacion || 4-5 == 1 && !(resta > suma) ? console.log("Es verdadero") : console.log("Es falso");