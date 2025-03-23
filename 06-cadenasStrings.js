// Strings (cadenas de texto).

// El operador + sirve para concatenar cadenas de texto, al ser usado en strings.
    let myName = "Heber";
    let greeting = "Hola, " + myName + "!";

    console.log(greeting); 
    console.log(typeof greeting);

// Obtener longitud
    console.log(greeting.length); // El metodo length permite ver la longitud de la cadena de texto

// Acceso a caracteres
    console.log(greeting[0]);
    console.log(greeting[3]);
    console.log(greeting[11]);

// Metodos comunes
console.log(greeting.toUpperCase()); // Imprime toda la cadena en mayusculas.
console.log(greeting.toLowerCase()); // Imprime toda la cadena en minuscula.
console.log(greeting.indexOf("Hola")); // Imprime el indice donde empieza la palabra Hola, posicion 0
console.log(greeting.indexOf("Heber")); // Imprime el indice donde empieza la palabra Heber, posicion 6
console.log(greeting.indexOf("Nekkun97")); // Imprime -1 por que no existe la palabra en la cadena de texto.
console.log(greeting.includes("Hola")); // Devuelve un boleano, en este caso un true por que la palabra si existe.
console.log(greeting.includes("Nekkun97")); // Devuelve un boleano, en este caso un false por que la palabra no existe.
console.log(greeting.slice(0, 8)); //Imprime solo los caracteres en el rango especificado.
console.log(greeting.slice(0, 8).length); //Comprobamos que imprime hasta el caracter 8.
console.log(greeting.replace("Heber", "Nekkun97")); // Reemplaza la palabra especificada por otra.
console.log(greeting.replace("Hola", "Hasta Luego")); // En este caso reemplazamos la palabra "Hola".

// Template literals (plantillas literales)
    let message = `Hola, este
    es mi 
    curso de JavaScript
    !`;

    console.log(message);

    console.log(`Hola, ${myName}!`); // Interpolacion de variable

    let email = "heber-iniguez@gmail.com"

    console.log(`Hola, ${myName}! tu correo es ${email}`);// Interpolacion de multiples variables