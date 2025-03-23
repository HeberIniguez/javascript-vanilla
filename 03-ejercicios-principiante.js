// 1. Escribe un comentario en una linea.
    // Esto es un comentario de una linea.

// 2. Escribe un comentario en varias lineas.
    /*
        Esto es un comentario
        de varias lineas. 
    */
   
// 3. Declara variables con valores asociados a todos los datos de tipo primitivo.
    let myString = "Esto es una cadena de texto (string)";
    let myNumber = 7;
    let isBoolean = true;
    let valorUndefined;
    let valorNulo = null;
    let mySymbol = Symbol("esto es un symbol");
    let myBigInt = 132165123156123151231531231531312315413215345n;

// 4. Imprime por consola el valor de todas las variables.
    console.log(myString);
    console.log(myNumber);
    console.log(isBoolean);
    console.log(valorUndefined);
    console.log(valorNulo);
    console.log(mySymbol);
    console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables.
    console.log(typeof myString);
    console.log(typeof myNumber);
    console.log(typeof isBoolean);
    console.log(typeof valorUndefined);
    console.log(typeof valorNulo);
    console.log(typeof mySymbol);
    console.log(typeof myBigInt);

// 6. A continuacion, modifica los valores de las variables por otros del mismo tipo.
    myString = "Esto es otra cadena de texto";
    myNumber = 9;
    isBoolean = false;
    valorUndefined = undefined;
    valorNulo = null;
    mySymbol = ("hello");
    myBigInt = BigInt(1216132168123168123165143512151231531351321512312);

// 7. A continuacion, modifica los valores de las variables por otros de diferente tipo.
    myString = 2123156132546512315612315615987897897987879789731512n;
    myNumber = Symbol("identificador");
    isBoolean = undefined;
    valorUndefined = true;
    valorNulo = 7;
    mySymbol = null;
    myBigInt = "hola";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.
    const myConstString = "Cadena de texto constante";
    const myConstNumber = 14;
    const myConstBoolean = false;
    const myConstUndefined = undefined;
    const myConstNulo = null;
    const myConstSymbol = Symbol("otro Symbol");
    const myConstBigInt = 132165123152587114753946531231531312315413215345n;

// 9. A continuacion, modifica los valores de las constantes.
    // myConstString = "cambiando texto";
    // myConstNumber = 7;
    // myConstBoolean = true;
    // myConstUndefined = "defined";
    // myConstNulo = 25;
    // myConstSymbol = ("Simbolo");
    // myConstBigInt = BigInt(554551324155634152341556314534155134);

// 10. Comenta las lineas que produzcan algun tipo de error al ejecutarse.
