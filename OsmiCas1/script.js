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

