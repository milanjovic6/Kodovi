console.log(x);

let age;
console.log(age, age + 3); // undefined, NaN - not a number

age = null;
console.log(age, age + 3); // null, 3

 var x = 5;
 var y = 7;
x = x + y;
console.log(x, y); // x = 12, y = 7

x *= 5; // x = x * 5; -> x = 60
y -= 2; // y = y - 2; -> y = 5
console.log(x, y);

x = 4.3;
y = -8;
x++; // x = x + 1;
y--; // y = y - 1;
console.log(x, y);

console.log(5 % 2);
console.log(77 % 6); // x % y kao rezultat daje {0, 1, 2, ..., y - 1}

console.log(y ** 2);



let ukupnoMinuti = 393;
let sati = Math.floor(ukupnoMinuti / 60);
//let sati2 = Number(ukupnoMinuti / 60);
let minuti = ukupnoMinuti % 60;
console.log(sati, minuti);

let datum = new Date();
let s = datum.getHours();
let m = datum.getMinutes();
console.log(s, m);
ukupnoMinuti = s * 60 + m;
console.log(ukupnoMinuti);

let god = datum.getFullYear(); // 2020
let mes = datum.getMonth();
mes++;
let dat = datum.getDate();
let dan = datum.getDay(); // 0 - nedelja, 1 - ponedeljak, ..., 6 - subota
//console.log(god, mes, dat, dan);
console.log(`${dat}.${mes}.${god}`);
console.log(`${god}/${mes}/${dat}`);

console.log(dat + "." + mes + "." + god + ".");

console.log(5 + 3);
console.log("Pera" + " Zdera");
console.log("Pera" + 5);
console.log("Pera" + 5 + 3);
console.log(5 + 3 + "Pera");
console.log("5" + 3 + "Pera");
console.log(5 / 0);