let suma = ( x, y ) => x + y; 
let resta = ( x, y ) => x - y;
let multiplica = ( x, y ) => x * y;
//let divide = ( x, y ) =>  x / y;
let divide = ( x, y ) =>  {
    if(y==0){return `Sin evalauar. "y" en: ${y}`;}
    else {return x/y;}
}

console.log(suma(10,5));
console.log(resta(10,5));
console.log(multiplica(10,5));
console.log(divide(10,0));