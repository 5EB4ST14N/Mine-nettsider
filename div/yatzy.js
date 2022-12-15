/*  Genererer et  tall fra 1 til 6*/
var terningen = document.getElementById("terningen");
function terningKast() {
    return Math.floor((Math.random() * 6) + 1);
}
var terningResultat = document.getElementsByClassName("terningResultat");

function kast() {
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor != "green") {
            terningResultat[i].innerHTML = terningKast();
        }
    }
}
terningen.onclick = kast;

for (let i = 0; i < terningResultat.length; i++)
    terningResultat[i].style.backgroundColor = "white";



function Gronne(terningNummer) {
    if (terningResultat[terningNummer - 1].style.backgroundColor == "white") {
        terningResultat[terningNummer - 1].style.backgroundColor = "green";
    }

    else if (terningResultat[terningNummer - 1].style.backgroundColor == "green") {
        terningResultat[terningNummer - 1].style.backgroundColor = "white";
    }
}



var seksjonArray = [
    document.getElementsByClassName("rad1"),
    document.getElementsByClassName("rad2"),
    document.getElementsByClassName("rad3"),
    document.getElementsByClassName("rad4"),
    document.getElementsByClassName("rad5"),
    document.getElementsByClassName("rad6"),
    document.getElementsByClassName("rad7"),
    document.getElementsByClassName("rad8"),
    document.getElementsByClassName("rad9"),
    document.getElementsByClassName("rad10"),
    document.getElementsByClassName("rad11"),
    document.getElementsByClassName("rad12"),
    document.getElementsByClassName("rad13"),
    document.getElementsByClassName("rad14"),
    document.getElementsByClassName("rad15"),
    document.getElementsByClassName("rad16"),
    document.getElementsByClassName("rad17"),
    document.getElementsByClassName("rad18"),
]



function lagreSvar(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++;
            terningResultat[i].style.backgroundColor = "white"
        }
    }

    if (resultat / antallGronne == radNummer) {
        seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
    }
    else {
        seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
    }
}



function forsteSum(radNummer, kolonneNummer) {
    var summen = 0;
    for (let i = 0; i < 6; i++) {
        summen += Number(seksjonArray[i][kolonneNummer - 1].innerHTML);
    }
    seksjonArray[6][kolonneNummer - 1].innerHTML = summen;

    if (summen >= 63) {
        seksjonArray[7][kolonneNummer - 1].innerHTML = 50;
    }

    else {
        seksjonArray[7][kolonneNummer - 1].innerHTML = 0;
    }
}




function etPar(radNummer, kolonneNummer) {
    var resultat = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green")
            resultat += Number(terningResultat[i].innerHTML);
        terningResultat[i].style.backgroundColor = "white"
    }
    if (resultat % 2 == 0 && resultat <= 12) {
        seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
    }
    else {
        seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = "Nei";
    }
}



function toPar(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 4) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
        }
    }
}

function treLike(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 3) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
        }
    }
}

function fireLike(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 4) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
        }
    }
}

function litenStraight(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 5) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
        }
    }
}

function storStraight(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 5) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
        }
    }
}

function sumHus(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 5) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
        }
    }
}

function sjanse(radNummer, kolonneNummer) {
    var resultat = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            terningResultat[i].style.backgroundColor = "white"
        }
        seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
    }
}

function sumHus(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 5) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
        }
    }
}


function yatzy(radNummer, kolonneNummer) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 5) {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 50;
        }
        else {
            seksjonArray[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
        }
    }
}



function ferdigSum(radNummer, kolonneNummer) {
    var summen = 0;
    for (let i = 6; i <= 17; i++) {
        summen += Number(seksjonArray[i][kolonneNummer].innerHTML);
    }
    seksjonArray[radNummer-1][kolonneNummer].innerHTML = summen;
}