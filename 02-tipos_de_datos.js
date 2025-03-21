//Tipos de datos primitivos, son 7 en total.

// 1.- Cadenas de texto (string) - Nos permite interactuar con textos.
    let myName = "Heber Iñiguez";
    let alias = 'Nekkun97';
    let email = `heber-iniguez@gmail.com`

// 2.- Numeros (number)
    let age = 27; // Numero entero (int)
    let height = 1.70; // Numero decimal

// 3.- Booleanos (boolean) - Indica si algo es verdadero o falso. Solo tiene esos 2 valores.
    let isTeacher = false; // Falso
    let isStudent = true; // Verdadero

// 4.- Undefined - Una variable que no esta definida aun.
    let undefinedValue;
    console.log(undefinedValue); //Imprime undefined

// 5.- Null - Una variable la cual tiene un valor nulo.
    let nullValue = null;

// 6.- Symbol - Son valores unicos, usados por ejemplo para Identificadores.
    let mySymbol = Symbol("mysymbol");

// 7.- BigInt - Es un numero entero grande que no cabe en una variable normal (number).
    let myBigInt = BigInt(225452135435183435181512181218453153123187875135138121215);
    let myBigInt_2 = 15122123138512153512311554513215245451354321534531231513545123n;

// typeof - permite saber el tipo de dato que contiene la variable.

    console.log("\n1.- Strings");
    console.log(typeof myName);
    console.log(typeof alias);
    console.log(typeof email);

    console.log("\n2.- Numbers")
    console.log(typeof age);
    console.log(typeof height);

    console.log("\n3.- Boolean")
    console.log(typeof isTeacher);
    console.log(typeof isStudent);

    console.log("\n4.- Undefined")
    console.log(typeof undefinedValue);

    console.log("\n5.- Null")
    console.log(typeof nullValue);

    console.log("\n6.- Symbol")
    console.log(typeof mySymbol);

    console.log("\n7. BigInit")
    console.log(typeof myBigInt);
    console.log(typeof myBigInt_2);