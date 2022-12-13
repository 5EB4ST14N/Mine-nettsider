let section = [
    document.getElementsByClassName("rad1"), //0
    document.getElementsByClassName("rad2"), //1
    document.getElementsByClassName("rad3"), //2
    document.getElementsByClassName("rad4"), //3
    document.getElementsByClassName("rad5"), //4
    document.getElementsByClassName("rad6"), //5
    document.getElementsByClassName("rad7"), //6
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
]






var terningen = document.getElementById("terningen");
/*Lager tall fra 1-6*/
function terningKast() {
    return Math.floor((Math.random() * 6) + 1);
}
var terningSvar = document.getElementsByClassName("terningSvar");
/*Bruker tall fra terningKast() og putter det inn i HTML*/
function kast() {
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor != "green") {
            (terningSvar[i].stylebackgroundColor != "white")
            terningSvar[i].innerHTML = terningKast();
        }
    }
}
terningen.onclick = kast;

for (let i = 0; i < terningSvar.length; i++)
    terningSvar[i].style.backgroundColor = "white";

/*Gjør terningene grønne om de trykkes på*/
function gronn(terningNr) {
    if (terningSvar[terningNr - 1].style.backgroundColor == "white") {
        terningSvar[terningNr - 1].style.backgroundColor = "green";
    }

    else if (terningSvar[terningNr - 1].style.backgroundColor == "green") {
        terningSvar[terningNr - 1].style.backgroundColor = "white";
    }
}

function lagreSvar(radnummer, kolonnenummer) {
    resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].innerHTML)
        }
        terningSvar[i].style.backgroundColor = "white";
    }
    section[radnummer - 1][kolonnenummer - 1].innerHTML = resultat
}
function lagreSvar(radnummer, kolonnenummer) {
    resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].innerHTML)
        }
        terningSvar[i].style.backgroundColor = "white";
    }
    section[radnummer - 1][kolonnenummer - 1].innerHTML = resultat
}
function lagreSvar(radnummer, kolonnenummer) {
    resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].innerHTML)
        }
        terningSvar[i].style.backgroundColor = "white";
    }
    section[radnummer - 1][kolonnenummer - 1].innerHTML = resultat
}
function lagreSvar(radnummer, kolonnenummer) {
    resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].innerHTML)
        }
        terningSvar[i].style.backgroundColor = "white";
    }
    section[radnummer - 1][kolonnenummer - 1].innerHTML = resultat
}
function lagreSvar(radnummer, kolonnenummer) {
    resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].innerHTML)
        }
        terningSvar[i].style.backgroundColor = "white";
    }
    section[radnummer - 1][kolonnenummer - 1].innerHTML = resultat
}
function lagreSvar(radnummer, kolonnenummer) {
    resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].innerHTML)
        }
        terningSvar[i].style.backgroundColor = "white";
    }
    section[radnummer - 1][kolonnenummer - 1].innerHTML = resultat
}
function lagreSvar(radnummer, kolonnenummer) {
    resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].innerHTML)
        }
        terningSvar[i].style.backgroundColor = "white";
    }
    section[radnummer - 1][kolonnenummer - 1].innerHTML = resultat
}

function forsteSum(radNummer, kolonneNummer) {
    sum = 0

    if (section[radnummer - 1][kolonneNummer - 1].innerHTML > 0) {
    }
    else {
        for (let i = 0; i < 7; i++) {
            sum += Number(section[i][kolonneNummer - 1].innerHTML);
        }
        section[radNummer - 1][kolonneNummer - 1].innerHTML = sum;
        if (sum >= 63) {
            section[radNummer][kolonneNummer - 1].innerHTML = 50;
        }
        else {
            section[radNummer][kolonneNummer - 1].innerHTML = 0;
        }
    }
}

function etPar(radNummer, kolonneNummer) {
    resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat = resultat + Number(terningSvar[i].innerHTML);
        }
        terningSvar[i].style.backgroundColor = "white"
        if (resultat / 2 == Number(terningSvar[i].innerHTML) || resultat == 0) {
            section[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }

    }
    resetKast();
}
function toPar(radNummer, kolonneNummer) {
    let resultat = 0;
    let parArray = [];
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat = resultat + Number(terningSvar[i].innerHTML);
            parArray.unshift(Number(terningSvar[i].innerHTML));
        }
        terningSvar[i].style.backgroundColor = "white";
    }

    section[radNummer - 1][kolonneNummer - 1].innerHTML = 0;

    for (let j = 0; j < parArray.length; j++) {
        if (resultat / 2 == Math.max(...parArray) + Math.min(...parArray)) {
            section[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
        }
    }
    resetKast();
}
function sumHus(radNummer, kolonneNummer) {
    let resultat = 0;
    let parArray = [];
    let antallGronne = 0
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].innerHTML);
            parArray.unshift(Number(terningSvar[i].innerHTML));
            antallGronne++;
        }
        terningSvar[i].style.backgroundColor = "white";
    }
    parArray.sort();
    section[radNummer - 1][kolonneNummer - 1].innerHTML = 0;

    if (antallGronne == 5) {
        if (parArray[2] == parArray[3]) {
            if (resultat / 2 == parArray[2] * 1.5 + parArray[1]) {
                section[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
            }
        }
        if (parArray[2] == parArray[1]) {
            if (resultat / 2 == parArray[2] * 1.5 + parArray[3]) {
                section[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
            }
        }
    }
    resetKast();
}
function antallLike(radNummer, kolonneNummer, sumLike) {
    resultat = 0;
    antallGronne = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].innerHTML)
            antallGronne++;
        }
        terningSvar[i].style.backgroundColor = "white";
    }

    for (let i = 0; i < terningSvar.length; i++) {
        if (antallGronne == sumLike || resultat == 0) {
            if (resultat / sumLike == Number(terningSvar[i].innerHTML) || resultat == 0) {
                if (sumLike == 5 && antallGronne == 5) {
                    resultat = 50;
                }
                section[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
            }
        }
        else {
            section[radNummer - 1][kolonneNummer - 1].innerHTML = 0;
            feilMelding.innerHTML = "JUKSEPAVE"
            setTimeout(function () {
                feilMelding.innerText = 'Du jukser vel ikke?';
            }, 3000);
        }
    }
    resetKast();
}
function litenogstorStraight(radNummer, kolonneNummer) {
    let svarArray = []
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            svarArray.unshift(Number(terningSvar[i].innerHTML));
        }
    }
    section[radNummer - 1][kolonneNummer - 1].innerHTML = 0

    if (radNummer == 13) {
        if (svarArray.includes(1 && 2 && 3 && 4 && 5)) {
            section[radNummer - 1][kolonneNummer - 1].innerHTML = 15;
        }
    }
    if (radNummer == 14) {
        if (svarArray.includes(2 && 3 && 4 && 5 && 6)) {
            section[radNummer - 1][kolonneNummer - 1].innerHTML = 20;
        }
    }
    for (let i = 0; i < terningSvar.length; i++) {
        terningSvar[i].style.backgroundColor = "white";
    }
    resetKast();
}
function sjanse(radNummer, kolonneNummer) {
    resultat = 0;
    for (let i = 0; i < terningSvar.length; i++) {
        if (terningSvar[i].style.backgroundColor == "green") {
            resultat += Number(terningSvar[i].innerHTML)
        }
        terningSvar[i].style.backgroundColor = "white";
    }
    section[radNummer - 1][kolonneNummer - 1].innerHTML = resultat
    resetKast();
}

let vinnerArray = []
function totSum(radNummer, kolonneNummer) {
    sum = 0
    for (let i = 6; i < 17; i++) {
        sum += Number(section[i][kolonneNummer - 1].innerHTML);
    }
    // if (section[radNummer - 1][kolonneNummer - 1].innerHTML === "") { funker ikke lagrer ikke riktig verdi?
    vinnerArray.splice(kolonneNummer - 1, 0, section[radNummer - 1][kolonneNummer - 1].innerHTML);
    //    }

    section[radNummer - 1][kolonneNummer - 1].innerHTML = sum;
    resetKast();
    vinner();
}


function vinner() { //ANNONSERER VINNEREN når tot summene er fylt innn
    let nr1_poeng = 0;
    if (vinnerArray.length >= antallDeltagere.length || vinnerArray.length == 4) {
        nr1_poeng = Math.max(...vinnerArray);
        deltager_nr = vinnerArray.indexOf(String(nr1_poeng))

        if (deltagere[0 && 1 && 2 && 3].innerHTML === '') { //hvis du har spilt uten navn på alle plasser
            alert("Winner Winner Chicken DINNER:)." + (deltager_nr + 1) + " med " + nr1_poeng + " poeng")
        }
        else {
            alert("VICTORY ROYALE TO " + deltagere[deltager_nr].innerHTML + " med " + nr1_poeng + " poeng")
        }
    }
}

