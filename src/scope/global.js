// variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignación
var a = 'aa'; // redeclaración

// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);
let bestFruit = () => {
    console.log(fruit);
}

bestFruit(); // Out: Apple


function countries() {
    country = 'Colombia'; // global
    console.log(country);
}

countries();
console.log(country)