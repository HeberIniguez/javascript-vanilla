// Hay tres formas de declarar variables. Los nombres de las variables deben ser descriptivos.

// 1.- Variable var - Es la manera original, aunque actualmente ya no es usado.
    var helloWorld = "Hello, World";
    console.log(helloWorld);

    helloWorld = "Hello, JavaScript";
    console.log(helloWorld);

// 2.- Variable let - Actulamente usado, ocupa ser declarada antes de poder acceder a ella.
    let helloWorld_2 = "Hola de nuevo, Mundo";
    console.log(helloWorld_2);

    helloWorld_2 = "Hola de nuevo, JavaScript";
    console.log(helloWorld_2);

// 3.- const - ocupa ser inicializada y no permite cambiar el dato definido.
    const helloWorld_3 = "Hola una vez mas, Mundo";
    console.log(helloWorld_3);

    // Error - no se puede cambiar el valor de una constante.
    // helloWorld_3 = "Hola una vez mas, JavaScript";
    // console.log(helloWorld_3);