// Operadores

// 1.- Operadores Aritmeticos.
    
    let a = 14;
    let b = 9;

    console.log( a + b ); // El operador + es una suma.
    console.log( a - b ); // El operador - es una resta.
    console.log( a * b ); // El operador * es una multiplicacion.
    console.log( a / b ); // El operador / es una division.
    console.log( a % b ); // El operador % es un modulo.
    console.log( a ** b ); // El operador ** es un exponente.

    a++; // El operador ++ es un incermento.
    console.log( a );

    b--; // El operador -- es un decremento.
    console.log( b );


// 2.- Operadores de asignacion
    
    let myVariable = 2; // El operador = es un asignador.

    myVariable += 3; // El operador += incrementa y asigna el nuevo valor.
    console.log(myVariable);

    myVariable -= 3; // resta y asigna el nuevo valor a la variable.
    myVariable *= 3; // multiplica y asigna el nuevo valor a la variable.
    myVariable /= 3; // divide y asigna el nuevo valor a la variable.
    myVariable %= 3; // obtiene el modulo y asigna el nuevo valor a la variable.
    myVariable **= 3; // optiene la potencia y asigna el nuevo valor a la variable.

// 3.- Operadores de comparacion.

    console.log( 7 > 14 ); // 7 es mayor(>) a 14 = falso
    console.log( 7 < 14 ); // 7 es menor(<) a 14 = true
    console.log( 7 >= 14 ); // 7 es mayor o igual(>=) que 14 = falso
    console.log( 7 <= 14 ); // 7 es menor o igual(<=) que 14 = true 
    console.log( 7 > 7 ); // 7 es mayor(>) a 7 = false
    console.log( 7 >= 7 ); // 7 es mayor o igual(>=) a 7 = true
    console.log( 7 == 14 ); // 7 es igual(==) a 14 = true

    //Operador == es igualdad por valor.
    console.log( 7 == "7" ); // 7(number) es igual a "7"(string) = true
    console.log( 7 == 7 ); // 7(number) es igual a 7(number) = true

    //Operador === es igualdad por identidad (tipo y valor).
    console.log( 7 === "7" ); // 7(number) es igual a "7"(string) = false
    console.log( 7 === 7 ); // 7(number) es igual a 7(number) = true

    // Truthy values (valores verdaderos)

        //Todos los numeros positivos y negativos a excepcion del cero (0).
        //Todas las cadenas de texto a excepcion de las vacias (" ").

    // Falsy values (valores falsos)

        // 0
        // 0n
        // null
        // undefined
        // NaN
        // Cadenas de texto vacias

// 4.- Operadores logicos.

    //Operador AND (&&) - Si una de las comparaciones es false, entonces sera falso.
    console.log(5 > 10 && 15 > 20); // false y false = false 
    console.log(5 < 10 && 15 < 20); // true y true = true
    console.log(5 > 10 && 15 < 20); // false y true = false
    console.log(5 < 10 && 15 > 20); // true y false = false

    //Operador OR (||) - Si alguna comparacion es verdadera, entonces sera verdadero.
    console.log(5 > 10 || 15 > 20); // false y false = false 
    console.log(5 < 10 || 15 < 20); // true y true = true
    console.log(5 > 10 || 15 < 20); // false y true = true
    console.log(5 < 10 || 15 > 20); // true y false = true

    //Operador NOT (!) - Invierte el resultado, true = false y false = true.
    console.log(!(5 > 10 && 15 > 20)); // false y false = (not)false = true
    console.log(!(5 < 10 || 15 < 20)); // true y true = (not)true = false

// 5.- Operadores ternarios
    
    const isRaining = true;

    isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo."); // true = Esta lloviendo 
    !(isRaining) ? console.log("Esta lloviendo") : console.log("No esta lloviendo."); // Not(true) = No esta lloviendo