var navnINP = document.getElementById("navnINP")
var adrINP = document.getElementById("adrINP")
var tlfINP = document.getElementById("tlfINP")
var skoleINP = document.getElementById("skoleINP")
var sitat1INP = document.getElementById("sitat1INP")
var blaaINP = document.getElementById("blaaINP")
var rodINP = document.getElementById("rodINP")
var bilde = document.getElementById("bilde")
var filBilde = document.getElementById("filBilde")
var leggInnbtn = document.getElementById("leggInnbtn")
var mal1 = document.getElementById("mal1")
var mal2 = document.getElementById("mal2")


var inpFilNavn = document.getElementById("inpFilNavn");
var bilde = document.getElementById("bilde")

function velgFil() {
    var aktueltFilNavn = URL.createObjectURL(inpFilNavn.files[0]);
    bilde.src = aktueltFilNavn;
}
inpFilNavn.addEventListener("mouseout", velgFil);

function blaacolor() {
    tittel.src = "blaaruss.tittel.png"
    mal1.setAttribute("id", "mal2")
}

function rodcolor() {
    tittel.src = "rodruss.tittel.png"
    mal1.setAttribute("id", "mal1")
}
