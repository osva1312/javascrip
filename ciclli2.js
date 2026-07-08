let sumaImpares = 0;
let contadorImpares = 0;

for( let i = 1; i <= 20; i ++) {
    if (i % 2 === 0) {
        console.log(i);
    } else{
        sumaImpares += i;
        contadorImpares ++;
    }
}
let mediaImpares = sumaImpares / contadorImpares;

console.log(" La media de los impares es :" + mediaImpares);