var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.getElementById("datum").innerHTML = today;





function uitlegWerk(trigger) {

    if (trigger == true) {
        document.getElementById("showul").style.display = "flex";
        document.getElementById("sluitul").style.display = "flex";

    } else if (trigger == false) {

        document.getElementById("showul").style.display = "none";
        document.getElementById("sluitul").style.display = "none";

    }

}



function kiesDier() {
    var dier = ['Leeuw', 'Dolfijn', 'Panda', 'Aap', 'Neushoorn', 'Ezel', 'Vogel'];
    var ranDier = dier[Math.floor(Math.random() * dier.length)];
    document.getElementById("randomDier").innerHTML = ranDier;
}

var eenbKleur = "";

function kiesKleur(kleur) {
    document.getElementById("kleurVakGekozen").style.backgroundColor = kleur;

    if (kleur == "red") {
        eenbKleur = "red";
    } else if (kleur == "blue") {
        eenbKleur = "blue";
    } else if (kleur == "green") {
        eenbKleur = "green";
    }

}

function spelBlok(element) {

    element.style.backgroundColor = eenbKleur;

}

function reset() {

    for (var a = 0; a <= 48; a++) {
        document.getElementsByClassName("tdspel")[a].style.backgroundColor = "white";

    }
    document.getElementById("kleurVakGekozen").style.backgroundColor = "white";
    console.log("JA");
    eenbKleur = "";

}