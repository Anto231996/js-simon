/*  
    Visualizzare in pagina 5 numeri casuali.
    Da lì parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const arrayNumberRandom = []
const arrayNumberUser = []

console.log(arrayNumberRandom)
console.log(arrayNumberUser)



for(let i = 0; i < 5; i++){
    randomNum = Math.floor(Math.random()* 100) + 1;
    document.getElementById("numeri-casuali").innerHTML += (randomNum + " ");
    arrayNumberRandom.push(randomNum); 
}



setTimeout(deleteNumber, 3000);

function deleteNumber(){
    document.getElementById("numeri-casuali").innerHTML = "";
}

clearTimeout(deleteNumber);



setTimeout(myTimeout, 3000);

function myTimeout(){
    for(let i = 0; i < 5; i++){
        let userNum = parseInt(prompt("inserisci un numero")) 
        console.log(userNum)
        arrayNumberUser.push(userNum); 
    }
};

clearTimeout(myTimeout);