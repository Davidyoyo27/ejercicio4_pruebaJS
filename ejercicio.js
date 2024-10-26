
//ejercicio de entrevista de QA - IDEA UNO
// elimine del siguiente array los numeros repetidos
// array = [1,2,3,4,4,5,6]

let array = [1,2,3,4,4,5,6];
let newArray = [];

//V1
//usar .map: cuando necesite modificar el array y retornar uno nuevo es mejor usar el map
//usar for: cuando necesite solo recorrer el array
for (let index = 0; index < array.length; index++) {
    let elemento = array[index];

    // validar elemento existe dentro de newArray
    if(newArray.includes(elemento)){
        console.log("ya existe");
    }else{
        newArray.push(elemento);
    }
}

console.log(newArray);

//V2
let array2 = [1,2,3,4,4,5,5,6];
let newArray2 = [];

array2.map((elemento) => {
    console.log(elemento);
    if(newArray2.includes(elemento)){
        console.log("ya existe");
    }else{
        newArray2.push(elemento);
    }
});

console.log(newArray2);

// V3
let array3 = [1,2,3,4,4,5,5,6,6,6,7,8];
let newArray3 = [];

// en una linea de codigo y con operador ternario
array3.map( elemento => newArray3.includes(elemento) ? console.log("ya existe") : newArray3.push(elemento));
console.log(newArray3);

// for in itera sobre las posiciones del arreglo, no sobre sus valores
// por eso parte en cero (0)
for (i in array)
console.log(i);
console.log(array[i]);

// for of itera sobre los valores del arreglo
//for of retorna directamente los valores del array en este caso
for (i of newArray3)
console.log(i);

console.log(i);


