//zadatak1
let postarina = 5; // u dinarima
let popust = 10; // u procentima
let tezina = 230; // u gramima

let cenaBez=tezina*5; //Cena bez popusta

let cenaSa =cenaBez-(cenaBez/popust); // Cena sa popustom

console.log(`Cena bez popusta je ${cenaBez} dinara.`);

console.log(`Cena sa popustom je ${cenaSa} dinara.`);

//zadatak 2
/* let pocetakRadnogVremena = 9;
let krajRadnogVremena = 17;
let vreme= new Date();
let sati = vreme.getHours();
let kolikoRadi = krajRadnogVremena -pocetakRadnogVremena;
let preostalo =kolikoRadi - sati;
console.log(preostalo);
if (9 >= sati)
{
    console.log("Radno vreme jos uvek nije pocelo.");
}
else(17=<sati){
    console.log("Radno vreme je vec zavrseno.");
    document.getElementById("demo").innerHTML=""
}
 */

/*zadatak3*/
let plavi=17;
let zuti=15;
let buket=25;
// buket= plavi + zuti + plavoZuti
let plavoZuti=buket-plavi-zuti;

if (plavi>=10 || (plavoZuti>=5 && zuti>=10)){
    
    console.log(Math.abs(plavoZuti));
    console.log("Buket je ekskluzivan");
    
}
else{
    console.log("Buket je obican");
}
