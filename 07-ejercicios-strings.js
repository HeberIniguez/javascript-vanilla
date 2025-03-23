// 1. Concatena dos cadenas de texto.
    let firstName = "Heber";
    let lastName = "Iñiguez";
    let fullName = firstName + " " +  lastName;

    console.log(fullName);

// 2. Muestra la longitud de una cadena de texto.
    console.log(`${fullName}, tu nombre completo tiene ${fullName.length} caracteres.`);

// 3. Muestra el primer y ultimo caracter de un string
    console.log(`${firstName}, el primer caracter de tu nombre es ${firstName[0]}`);
    console.log(`${firstName}, el ultimo caracter de tu nombre es ${firstName[firstName.length-1]}`);

// 4. Convierte a mayusculas y minusculas un string.
    let mayusculas = fullName.toUpperCase();
    let minusculas = fullName.toLowerCase();

    console.log("Nombre en mayusculas " + mayusculas);
    console.log("Nombre en minusculas " + minusculas);

// 5. Crea una cadena de texto en varias lineas.
    console.log("Esto es\nuna cadena\nde texto en\nvarias lineas.");
    console.log(`
        Esto es 
        otra cadena 
        de texto en
        varias lineas`);

// 6. Interpola el valor de una variable en una string.
    let numero1, numero2;

    numero1 = 2;
    numero2 = 5;

    console.log(`La suma de ${numero1} + ${numero2} = ${numero1 + numero2}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
    let cadenaDeTexto = "Esta es una cadena de texto";

    console.log(cadenaDeTexto.replace(/ /g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
    cadenaDeTexto.includes("texto") ? console.log("la palabra texto si se encuentra.") : console.log("la palabra texto no se encuentra.");
    cadenaDeTexto.includes("string") ? console.log("la palabra string si se encuentra.") : console.log("la palabra string no se encuentra.");

// 9. Comprueba si dos strings son iguales.
    firstName === firstName ? console.log("Son iguales.") : console.log("No son iguales");
    firstName === lastName ? console.log("Son iguales.") : console.log("No son iguales");

// 10. Comprueba si dos strings tiene la misma longitud.
    console.log(lastName.length == lastName.length);
    console.log(firstName.length == lastName.length);
        