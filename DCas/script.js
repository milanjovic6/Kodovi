//zadatak 1

let  dan1 = 0;

switch (dan1) {
        case 0:
            console.log(`${0} je Nedelja `);
        break;
        case 1:
            console.log(`${1} je Ponedeljak `);
        break;
        case 2:
            console.log(`${2} je Utorak`);
        break;
        case 3:
            console.log(`${3} je Sreda `);
        break;
        case 4:
            console.log(`${4} je Cetvrtak `);
        break;
        case 5:
            console.log(`${5} je Petak`);
        break;
        case 6:
            console.log(`${6} je Subota `);
        break;
    default:
        break;
}
//zadatak 2
let ocena= 4;

switch (ocena) {
        case 1:
        console.log("Nedovoljan");
        break;

        case 2:
            console.log("Dovoljan");
        break;
        case 3:
            console.log("Dobar");
        break;
        case 4: case 5:
            console.log("Vrlo dobar ili Odlican");
        break;

    default:
        console.log("Ne znam za tu ocenu :( ");
        break;
}


//zadatak 3
let num1 = 5;

if(num1<=10 )
{
    switch (num1) {
        case 0:
            console.log("Uneti broj je 0");
            break;
        case 2:
            console.log("Uneti broj je 2");
            break;
        case 4:
            console.log("Uneti broj je 4");
            break;
        case 6:
            console.log("Uneti broj je 6");
            break;
        case 8:
            console.log("Uneti broj je 8");
            break;
        case 10:
            console.log("Uneti broj je 10");
            break;

        default:
            console.log("Pogresan unosi ili broj nije od nije paran");
            break;
    }
}

// zadatak 4
let operation = "o"
let number1 = 4 ;
let number2 = 7 ;
let rez;
switch (operation) {
    case "m":
         rez = number1 * number2;
        console.log(`${number1}*${number2}= ${rez}`);
        break;
    case "d":
        if (number2 == 0) {
            console.log("Nije dozvoljeno deliti nulom")
        }else{

             rez = number1 / number2;
            console.log(`${number1}/${number2}= ${rez}`);
        }
        break;
    case "s":
         rez = number1 + number2;
        console.log(`${number1}+${number2}= ${rez}`);
        break;
    case "o":
         rez = number1 - number2;
        console.log(`${number1}-${number2}= ${rez}`);
        break;
    default:
        console.log("Doslo je do greske");
        break;
}
//zadatak 5
let datumcic = new Date();
let day = datumcic.getDay();
console.log(day );
switch (day) {
    case 0:
        console.log("Preostalo je jos 5 dana do sledeceg vikenda");
        break;
    case 1:
        console.log("Preostalo je jos 4 dana do vikenda");
        break;
    case 2: 
        console.log("Preostalo je jos 3 dana do vikenda");
        break;  
    case 3:
        console.log("Preostalo je jos 2 dana do vikenda");
        break;
    case 4:
        console.log("Preostalo je jos 1 dan do vikenda");
        break;
    case 5:
        console.log("Danas je Petak pocinje vikend ");
        break;
    case 6:
        console.log("Vikend je jos 6 dana do sledeceg vikenda");
        break;
    default:
        break;
}



// zadatak 7

let datum = new Date();
let godina = datum.getUTCFullYear();
let mesec = datum.getMonth();
let dan = datum.getDay();
let brojdana =datum.getDate();
console.log(godina);


switch (mesec) {
        case 1:
            console.log(brojdana);
        break;
        case 2:
            if((godina%4 === 0 && godina %100 != 0) || godina % 400 === 0)
            {
                console.log("Godina je prestupna");
            }
            else
            {
                console.log("Godina je prosta");
            }
            console.log(`Broj dana u mesecu je ${brojdana}`);
        break;
        case 3:
            console.log(`Broj dana u mesecu je ${brojdana}`);
        break;
        case 4:
            console.log(`Broj dana u mesecu je ${brojdana}`);
        break;
        case 5:
            console.log(`Broj dana u mesecu je ${brojdana}`);
        break;
        case 6:
            console.log(`Broja dana u mesecu je ${brojdana}`);
        break;
        case 7:
            console.log(`Broj dana u mesecu je ${brojdana}`);
        break;
        case 8:
            console.log(`Broj dana u mesecu je ${brojdana}`);
        break;
        case 9:
            console.log(`Broj dana u mesecu je ${brojdana}`);
        break;
        case 10:
            console.log(`Broj dana u mesecu je ${brojdana}`);
        break;
        case 11:
            console.log(`Broj dana  u mesecu je ${brojdana}`);
        break;
        case 12:
            console.log(`Broj dana u mesecu je ${brojdana}`);
        break;
    default:
        break;
}
//zadatak 8
let color = "yellow";

switch (color) {
    case "red":
        document.getElementById("paragraf").style.color = "#FF0000"; 
        break;

    case "blue":
        document.getElementById("paragraf").style.color = "blue";
        break;

    case "green":
        document.getElementById("paragraf").style.color = "green";
        break;

    default:
        document.getElementById("paragraf").style.color = "yellow";
        break;
}