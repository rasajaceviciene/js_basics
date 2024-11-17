/*
Didelis, keliu eiluciu komentaras
*/

//Vienos eilutes komentaras

/* Kintamasis – programos objektas, nusakomas vardu ir reikšme, 
kuri gali būti programoje naudojama ir keičiama. Galimų reikšmių aibę 
ir operacijas su jomis apibrėžia duomenų tipas, kuriam priklauso kintamasis.
Deklaruoto kintamojo reikšmė išsaugoma operatyvioje atmintyje (RAM), t.y.
deklaruojant kintamąjį rezervuojama vieta RAM'e */

/* Kintamuju vardams negalima naudoti JS rezervuotu zodziu */

/*var yra globalus, pasiekiamas visur, 
todel galime netycia sukurti amzinaji cikla
ir uzlausti programa
*/

var firstName = "Rasa"; 
let lastName = "Jaceviciene"; // let galioja tik tam tikrame bloke ar eiluteje

//Primitive data types

//Number is integer
let number = 12;

console.log("Kintamojo reiksme: " + number); //output number
console.log("Kintamojo duomenu tipas: " + typeof(number)); //variable number data type

//Number is float
let price = 12.45;

console.log("Kintamojo reiksme: " + price); //output number
console.log("Kintamojo duomenu tipas: " + typeof(price)); //variable number data type

//Boolean
let userStatus = true;

console.log("Kintamojo reiksme: " + userStatus); //output number
console.log("Kintamojo duomenu tipas: " + typeof(userStatus)); //variable number data type

//String
let userName = "Tadas";

console.log("Kintamojo reiksme: " + userName); //output number
console.log("Kintamojo duomenu tipas: " + typeof(userName)); //variable number data type

console.log(`Kintamojo reiksme: ${userName}`); //output number using template literals

console.log(`Visu kintamuju reiksmes: ${number}-${price}-${userStatus}-${userName}`)

//Non-primitive data types (objects)

//Array

let students = ["Tadas", "Jonas", "Ieva"];

console.log(`Kintamojo reiksme: ${students}`);
console.log("Kintamojo duomenu tipas: " + typeof(students));

console.log(students); //output only data structure
console.log(students[2]);
console.log(`Studentas: ${students[1]}`)
console.log(userName.length) //simboliu, sudaranciu kintamaji, skaicius
console.log(userName.toUpperCase())

//Object

//Object structure

let student = {                     //object
    id: 1,                          //object property: value
    firstName: "Petras",            //object property: value
    lastName: "Petraitis",           //object property: value
    email: "p.petraitis@gmail.com", //object property: value
    role: "Admin"                   //object property: value
}

console.log(student);
console.log(student.email)
console.log(`Student property: ${student.id}`)
console.log(Object.keys(student));   //output property
console.log(Object.values(student)); //output property values
console.log("Kintamojo duomenu tipas: " + typeof(student));

/*let (zemiau) nereikia kartoti, nes kintamasis jau deklaruotas, cia tik priskiriama nauja reiksme
Masyvo, kuris apima keleta objektu (pats masyvas irgi yra objektas)*/

students = [ 
    {                     
        id: 1, 
        firstName: "Petras",  
        lastName: "Petraitis", 
        email: "p.petraitis@gmail.com", 
        role: [
            "Admin",
            "Devel"
        ]
    },  
    {                     
        id: 1, 
        firstName: "Pasaka",  
        lastName: "Pasakaite", 
        email: "p.petraitis@gmail.com", 
        role: "Admin"
    },    
    {                     
        id: 1, 
        firstName: "Jonas",  
        lastName: "Jonaitis", 
        email: "p.petraitis@gmail.com", 
        role: "Admin"
    }                 
]

console.log(students[1]);

const value = 12;

console.log(value);

//isNaN - is not a number (true, false)
//boolean irgi yra skaicius

console.log(isNaN(number));
console.log(isNaN(userStatus));
console.log(isNaN(userName));

//Conditional (ternary) operator
//kai reikia paprastos if strukruros
let userOne = "Karolis";
let userTwo = "Ieva";
let isNiceName = userOne == "Ieva" ? "Very nice name" : "Chose another name";

console.log(isNiceName);

//Liekana (dalyba is modulio)
let Liekana = 10;
console.log(Liekana % 2); //isves 0
console.log(Liekana % 3); //isves 1

//didinimo ir mazinimo operatoriai

let count = 12;

count = count + 10;

//paprastesnis uzrasymas

count += 10;

count ++; //prideda 1
console.log(count);    //12+10+10+1=33
console.log(count++);  //pirma isveda 33, tada prideda 1, bet 34 neisveda, tik saugo atmintyje
console.log(++count);  //atmintyje saugo 34, todel isves 35

//if
if (count == 35) {
    console.log(`Count value is ${count}`);
};

//paprastesnis uzrasymas
if (count == 35) console.log(`Count value is ${count}`);

let vipNumber = 12;
let otherNumber = "12";

//Reiksmiu lyginimas, neatsizvelgiant i duomenu tipa
if(vipNumber == otherNumber){
    console.log(`Equal`);
}else{
    console.log(`not equal`)
}

//Reiksmiu lyginimas, atsizvelgiant i duomenu tipa
if(vipNumber === otherNumber){
    console.log(`Equal`);
}else{
    console.log(`not equal`)
}

//Kiti
if(vipNumber == otherNumber && vipNumber > 12){
    console.log(`Equal`);
}else{
    console.log(`not equal`)
}

if(vipNumber == otherNumber || vipNumber > 12){
    console.log(`Equal`);
}else{
    console.log(`not equal`)
}

if(vipNumber){
    console.log(`Equal`);
}else{
    console.log(`not equal`)
}

if(!vipNumber){
    console.log(`Equal`);
}else{
    console.log(`not equal`)
}

//Ciklai
//Iteracija - vienas ciklo prasisukimas

for (let i = 0; i < 10; i++){        // ciklas suksis, kol i padides po 1 nuo 0 iki 9
    console.log(`Iteracija: ${i}`); 
}

for (let i = 0; i < 10; i++){
    if(i == 5){
        break;    //nutraukia cikla, jei i=5, t.y. isveda nuo 0 iki 4
    }
    console.log(`Iteracija: ${i}`); 
}

for(let i = 0; i < 10; i++){
    if(i == 5){
        continue;    // tesia cikla praleisdamas 5
    }
    console.log(`iteracija: ${i}`)
}

let mokiniai = ['Tomas', 'Kristina', 'Mantas']

console.log(mokiniai[1]); //vietoje rasymo ranka, kuriame for:

for(let i = 0; i < mokiniai.length; i++){
    console.log(`Mokinys: ${mokiniai[i]}`);
}

//paprastesni budas (for in), veikia ir su objektais:
// 'in' kintamajam priskiria indeksa

for(let indeksas in mokiniai){
    console.log(indeksas);                //key saugo kintamojo reiksmes indeksa
}

for(let key in mokiniai){
    console.log(mokiniai[key]);      //isveda kintamojo reiksmes is eiles pagal indeksa
}

//dar paprastesnis budas (for of), bet neveikia su objektais, su masyvais veikia
// of kintamajam priskiria reiksme

for(let reiksme of mokiniai){
    console.log(reiksme);
}

let user = {
    id: 1,
    firstName: 'Tadas',
    email: 'tadas@gmail.com'
}

for(let property in user){
    console.log(user[property]);  //isveda tik reiksmes
}

for(let savybe in user){
    console.log(`Savybes: ${savybe} reiksme yra ${user[savybe]}`); //isveda ir savybes ir ju reiksmes
}

//teksta irgi galima iteruoti

let text = "Labai geras tekstas";

console.log(text[6]);

for(let letter in text){
    console.log(letter);  //isveda indeksa
}

for(let letter in text){
    console.log(text[letter]);
}