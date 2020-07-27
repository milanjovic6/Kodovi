/* console.log("Test")

if(3<5){
    console.log("tri je manje od pet")
}

if(3<-5){
    console.log("tri je manje od pet")
}

let a = 110;
let b = 50;
if( a < b){
    console.log(`${a} je manje od ${b}`);
}

console.log("Proba");

let x = 5;
let y = 5;
if(x==y)
{
 console.log(`${x}i ${y} su jednake vrednosti `)
}

if(x===y)
{
 console.log(`${x}i ${y} su jednake pi tipu i vrednosti vrednosti `)
}

if (a<b)
{
    console.log(`${a} je manje od ${b}`)
} 
else
{
    console.log(`${a} nije manje od ${b}`)
}

// da li su dvevrednosti jednake 

let v1 = 5;
let v2 = 6;

// 1. nacin

if (v1 == v2) {
    console.log("Jednake su")
}
else{
    console.log("Nisu jednake")
}

//2.Nacin

if (v1 != v2) {
    console.log("Nisu jednake")
}
else{
    console.log("Jednake su")
}
 */
//Zadaci za vezbu sa casa

//zadatak broj 1.
/* let num1 = 55;
let num2 = 15;
if(num1 > num2)
{
  console.log(`${num1} je veci od ${num2}`) 
}
else
{
    console.log(`${num2} je manji ${num1}`)
}

// zadatak broj 2.

let temp = -10;

if (temp>=0) 
{
    console.log("Temperatura je u + ")
}
else 
{
    console.log("Temperatura je u -")
}

// zadatak broj 3.
let divPol = document.getElementById('pol');
let pol = "z";
if (pol == "m")
{
    divPol.innerHTML = `<img src="slike/man.png">`
}
else 
{
    divPol.innerHTML = `<img src="slike/woman.png ">`
} */

//zadatak broj 4.

let vreme = new Date();

let sati = vreme.getHours();
console.log(sati);
if (sati>=12) {
    console.log("Podne")
}
else {
    console.log("Prepodne") 
}

// zadatak broj 5.

let godRodjenja = 1995;

let godTren = vreme.getFullYear();

let godOsobe = godTren - godRodjenja;

if(godOsobe>=18){

    console.log("Osoba je punoletna")
}
else{
    console.log("Osoba nije punoletna")
}

//Primer
let br = 16;

if (br <= 10) {
    
    console.log("Broj je u prvoj desetici")
}
else if (br<=20)
{
    console.log("Broj je u drugoj desetici")
}
else if (br<=30)
{
    console.log("Broj je u trecoj desetici")
}
else(
    console.log("Broj je veci od 30")
)

console.log("IF-ELSE IF -ELSE ja zavrsen") 

//zadatak broj 6.

let b1 = 5;
let b2 = 3;
let b3 = 7;

//pretpostavka
let najveci = b1;

if (b2>najveci) {
 najveci = b2;
    
}
if (b3>najveci ) {
    najveci= b3;
}
console.log(`Najveci je ${najveci}`);

// zadatak broj 7
let brPoena = 87;

if (brPoena<=50)
{
    console.log("Nazalost pali ste ispit");
}
else if(brPoena ==100 )
{
    console.log("Cestitamo dobiliste ocenu 10 ");
}
else if ( brPoena>=90)
{
   console.log("Cestitamo dobiliste ocenu 9");
}
else if ( brPoena>=80)
{
    console.log("Cestitamo dobiliste ocenu 8");
    }
else if ( brPoena>=70)
    {
        console.log("Cestitamo dobiliste ocenu 7");
            }
else if ( brPoena>=60)
{
    console.log("Cestitamo dobiliste ocenu 6");
}
else if ( brPoena>=51)
{
    console.log("Cestitamo dobiliste ocenu 6");
}
else
{
    console.log("Nazalost pali ste ispit");

}
// zadatak 8.
// let ddd = new Date();
// let dd= ddd.getDay();
// if(dd == 0){
//     console.log("Nedelja kraj vikenda")
// }
// else if(dd == 1){
//     console.log(" Ponedeljak o nee");
// }
// else if(dd == 2){
//     console.log("Utorak");
// }
// else if(dd == 3){
//     console.log("Sreda jos malo pa vikend");
// }
// else if(dd == 4){
//     console.log("Cetvrtak");
// }
// else if(dd == 5){
//     console.log("Petak pocinje vikend");
// }
// else if(dd == 6){
//     console.log("Subota");
// }
// zadatak 9
// let d9= new Date();
// let dh9= d9.getHours();
// console.log(dh9);
// if(dh9<12){
//     console.log("dobro jutro");
// }
// if(dh9<18){
//     console.log("dobar dan");
// }
// else{
//     console.log("Dobro vece");
// }
//zadatak 10
let dd1 = 25;
let m1 = 7;
let g1 = 2020;

let dd2 =  18;
let m2 = 8;
let g2 = 2020;

if (g1<g2) 
{
    console.log(`${dd1}.${m1}.${g1}`);
}
else if (g2<g1)
 {
    console.log(`${dd2}.${m2}.${g2}`);
}
else 
 {
    if (m1<m2)
     {
        console.log(`${dd1}.${m1}.${g1}`);
    }
    else if (m2<m1)
     {
        console.log(`${dd2}.${m2}.${g2}`);
    }
    else 
    {
        if (dd1<dd2) {
            console.log(`${dd1}.${m1}.${g1}`);
        }
        else if(dd2<dd1){
            console.log(`${dd2}.${m2}.${g2}`);
        }
        else {
            console.log("Datumi su isti");
        }
    }
}


//zadatak 11

//zadatak 12

//zadatak 13
/*
2 / 2 = 1 + ost 0
4 / 2 = 2 + ost 0
6 / 2 = 3 + ost 0
 ... 
 3 / 2 = 1 + ost 1
 5 / 2 = 2 + ost 1
 7 / 2 = 3 + ost 1
*/ 

let broj = 15;
if(broj%2 == 0){
    //Broj je paran
    console.log("Broj je paran");
}else{
    //Broj je neparan
    console.log("Broj je neparan");
}

//zadatak 14

if(broj%3){

}

//zadatak 18

//prvi nacin
if (broj == Math.trunc(broj)) {
    console.log("Ceo broj");
    
}else{
    console.log("Decimalni broj");
}
// modulus  1 %

// Number.isInteger();

//Math.floor

//Zadatak 19

// zadatak 20

//zadatak 21

let broj1 = 3 ;
let broj2 = 7 ;
let broj3 = 9 ;


if (broj1>=broj2 && broj1>=broj3) {
    
    console.log("Broj 1 je najveci");
}
else if(broj2>=broj1 && broj2>=broj3)
{
    console.log("Broj 2 je najveci");
}
else
{
    console.log("Broj 3 je najveci");
}

if(broj1 == broj2 && broj2 == broj3){
 console.log("Sva tri broja s ista");
}else if(broj1==broj2){
 console.log("Broj 1 i 2 su isti");
}else if(broj2==broj3){
    console.log("Broj 2 i 3 su isti ");
}else if(broj1==broj3){
    console.log("Broj 1 i 3 su isti");
}else{
console.log("Brojevi su razliciti");
}

//zadatak 23

let god= 2000;
if(god%4 == 0 && god%100 != 0 || god%400 == 0){
    console.log("Prestupna godina");
}else{
    console.log("Prosta godina");
}


//zadata vrednost se prevede u minute i sate

let min =169;
sati = Math.trunc(min/60);
let minn = min%60;
console.log(`${sati}:${minn}`);

//zadatak 25

let dan = 0;
let sat = 14;
let min = 58;

if (dan == 0 || dan ==6)
{
    // od 10-18
    if (sat>=10 && sat < 18) {
        console.log("Vikend otvoreno");
    }
    else{
        console.log("Vikend zatvoreno");
    }
}
else
{
 //od 9-20
    if(sat >= 9 && sat < 20){
        console.log("Radni dan otvoreno");
    }
    else{
        console.log("Radni dan zatvoreno");
    }
}
