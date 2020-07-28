//zadatak 1

/* let i = 1;

while (i<=20) {
    console.log(i);
    console.log();
    i++;
    
} */
//zadatak 2
/*  n = 1;
 m=20;
 i=n;
 let rez = "";
 while (i<=m) {
     rez = rez + i + " ";
     i++;
 }
 console.log(rez);
 */
// zadtak broj 4
//zadatak parni brojevi od 20 do 1
/* let i = 20;
while (i >= 1) {
    console.log(i);
    i-=2
} */

/*Ispisati parne od m do n (n < m)*/ 
/* let n=34;
let m=55;
let i=n;
while (i<=m) {
    if(i %2 ==0) {
        console.log(i);
    }
    i++;
} */
// zadatak 7
/* n=3;
m=10;
i=n;
let suma = 0;
while (i<=m) {
    suma+=i;
    i++;
}
console.log(suma); */

// zadatak 8
/* n=2;
m =5;
i= n;
let sumk =0
while (i<=m) {
    let i2=i*i;
    sumk=sumk + i2;
    i++;
}
console.log(sumk); */
//zadatak 9
/* let n=2;
let m =5;
let i= n;
let sumk =0;
while (i<=m) {
    if(i%2 ==0) {

      let  ina2=i*i;
      sumk= sumk +ina2;
    }
    i++;
}
console.log(sumk); */


//zadatak 10
/* n=2;
m =5;
i= n;
let sumkk =0;
let i2,i3;
while (i<=m) {
    if(i %2 ==0) {

        i2=i*i;
        sumkk= sumkk +i2;
        
    }else
    { 
         i3= i**3;
         sumkk = sumkk + i3;
    }
    i++;
    
    
}
console.log(sumkk); */
//zadatak 11
/* let k = 24;
i = 1;
let count =0;
while (i<=k) {
    if (k% i == 0) {
        count++;
    }
    i++;
}
console.log(`Broj delioca ${k} je : ${count}`);
// zadatak 12 
//prost ili slozen
let n = 8;
 i = 2;
let broj =0;
let prost = true;

while (i<=Math.floor(Math.sqrt(n))) {
    if (n % i == 0) {
        prost = false;
    }
    i++;
}
if(prost == true){
    console.log(`Broj ${n} je prost.`);
}else{
    console.log(`Broj ${n} je slozen.`);
}
 */
//zadatak 14
// n=3;
// let i = n;
// let a;
// let d =0;
// while (i<=n) {
//     a= i**3 - 3*i +n;
// if(a %7 == 0){
//     d=d+1;
// }
// i++;
// }
// console.log(d);
//zadatak 15
let n1=5
let b;
let summ= 0;
i = 1;
let alpha = 1;
let betha = -1;
while (i<=n1) {

    b=Math.sin(n1 +(i/n1));
    if(b<alpha || b>betha){
        summ=summ+b;
    }
    i++;
}
console.log(summ);
// zadatak 16
