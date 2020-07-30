let i;
for (let i = 0; i <=10; i++) {
    
    console.log(i);
    
}
//zadatak 4

for (let i = 5; i <= 15; i++) {
   
    console.log(2*i);
    
}

/*suma br od 1 do 20*/ 
let suma=0;
for (let i = 1; i <=20; i++) {
    suma+=i;
    
}
console.log(suma);
/*suma parnih od 1 do 20*/

 suma=0;
for (let i = 2; i <=20; i+=2) {
    suma+=i;
    
}
console.log(suma);
/*suma parnih od n do m */
let n = 5;
let m = 25;
suma=0;
for(i = n;i <= m; i++){
    if (i%2==0) {   
        suma+=i;
 
    }
}
console.log(suma);
//zadatak 