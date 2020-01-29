var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.getElementById("datum").innerHTML = today;


// Hier is JS van Winkelwagen



var modal = document.getElementById("myModal");
var btn = document.getElementById("myCart");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Hier is JS van Datum

// Hier is JS van Prijzenlijst



function ticket(soort) {
  var tekst = "";
  var maxRijen = 10;

  if (soort == "kind") {

    document.getElementById("PrijsNormaal").style.display = "none";
    document.getElementById("PrijsFamilie").style.display = "none";
    document.getElementById("PrijsKind").style.display = "flex";

    function tabelKind() {

      for (var k = 1; k <= maxRijen; k++) {
        var tabelSom = k * 7.60;
        var tabelRijK = "<tr><th>" + "De prijs voor " + k + " kinder tickets =" + "</th><td>" + "&euro; " + Math.round((tabelSom + Number.EPSILON) * 100) / 100 + "</td></tr>";
        tekst += tabelRijK;
        document.getElementById("tableK").innerHTML = tekst;
      }
    }

    tabelKind();

  } else if (soort == "normaal") {

    document.getElementById("PrijsKind").style.display = "none";
    document.getElementById("PrijsFamilie").style.display = "none";
    document.getElementById("PrijsNormaal").style.display = "flex";

    function tabelNormaal() {
      for (var n = 1; n <= maxRijen; n++) {
        var tabelRijN = "<tr><th>" + "De prijs voor " + n + " normale tickets =" + "</th><td>" + "&euro; " + n * 16.50 + "</td></tr>";
        tekst += tabelRijN;
        document.getElementById("tableN").innerHTML = tekst;
      }
    }
    tabelNormaal();

  } else if (soort == "familie") {

    document.getElementById("PrijsNormaal").style.display = "none";
    document.getElementById("PrijsKind").style.display = "none";
    document.getElementById("PrijsFamilie").style.display = "flex";

    function tabelFamilie() {
      for (var f = 1; f <= maxRijen; f++) {
        var tabelRijF = "<tr><th>" + "De prijs voor " + f + " familie tickets =" + "</th><td>" + "&euro; " + f * 50 + "</td></tr>";
        tekst += tabelRijF;
        document.getElementById("tableF").innerHTML = tekst;
      }
    }

    tabelFamilie();

  }
}

// Hier is de knop voor het sluiten van de Prijzentabel

function closePrijs() {
  document.getElementById("PrijsKind").style.display = "none";
  document.getElementById("PrijsNormaal").style.display = "none";
  document.getElementById("PrijsFamilie").style.display = "none";
}

// HIER KOMT DE WINKELMAND PRIJZEN GENERATOER

function totaalBerekening() {
  var totaal = parseInt(subtotaalK) + parseInt(subtotaalN) + parseInt(subtotaalF);
  document.getElementById("totaals").innerHTML = "&euro;" + totaal;
}

// HIER IS K

var bedragK = 7.60;
document.getElementById("totaalbedragK").innerHTML = "&euro; " + Math.round((bedragK + Number.EPSILON) * 100) / 100;
var getalK = 0;
document.getElementById("gtlK").value = getalK;
var sK = document.getElementById("subtotaalK").innerHTML = "&euro; " + Math.round((bedragK + Number.EPSILON) * 100) / 100;
var subtotaalK = 0;

function plusK() {

  if (getalK <= 24) {
    getalK++;
    document.getElementById("gtlK").value = getalK;
    subtotaalK = getalK * bedragK;
    document.getElementById("totaalbedragK").innerHTML = "&euro; " + Math.round((subtotaalK + Number.EPSILON) * 100) / 100;
    sK = document.getElementById("subtotaalK").innerHTML = "&euro; " + Math.round((subtotaalK + Number.EPSILON) * 100) / 100;
  } else {

  }
  totaalBerekening();
}

function minK() {

  if (getalK >= 1) {
    getalK--;
    document.getElementById("gtlK").value = getalK;
    subtotaalK = getalK * bedragK;
    document.getElementById("totaalbedragK").innerHTML = "&euro; " + Math.round((subtotaalK + Number.EPSILON) * 100) / 100;
    sK = document.getElementById("subtotaalK").innerHTML = "&euro; " + Math.round((subtotaalK + Number.EPSILON) * 100) / 100;
  } else {

  }
  totaalBerekening();
}

// HIER IS N

var bedragN = 16.50;
document.getElementById("totaalbedragN").innerHTML = "&euro; " + bedragN;
var getalN = 0;
document.getElementById("gtlN").value = getalN;
var sN = document.getElementById("subtotaalN").innerHTML = "&euro; " + Math.round((bedragN + Number.EPSILON) * 100) / 100;
var subtotaalN = 0;

function plusN() {

  if (getalN <= 24) {
    getalN++;
    document.getElementById("gtlN").value = getalN;
    subtotaalN = getalN * bedragN;
    document.getElementById("totaalbedragN").innerHTML = "&euro; " + subtotaalN;
    sN = document.getElementById("subtotaalN").innerHTML = "&euro; " + Math.round((subtotaalN + Number.EPSILON) * 100) / 100;
  } else {

  }
  totaalBerekening();
}

function minN() {

  if (getalN >= 1) {
    getalN--;
    document.getElementById("gtlN").value = getalN;
    subtotaalN = getalN * bedragN;
    document.getElementById("totaalbedragN").innerHTML = "&euro; " + subtotaalN;
    sN = document.getElementById("subtotaalN").innerHTML = "&euro; " + Math.round((subtotaalN + Number.EPSILON) * 100) / 100;
  } else {

  }
  totaalBerekening();
}


// HIER KOMT F

var bedragF = 50;
document.getElementById("totaalbedragF").innerHTML = "&euro; " + bedragF;
var getalF = 0;
document.getElementById("gtlF").value = getalF;
var sF = document.getElementById("subtotaalF").innerHTML = "&euro; " + Math.round((bedragF + Number.EPSILON) * 100) / 100;
var subtotaalF = 0;

function plusF() {

  if (getalF <= 24) {
    getalF++;
    document.getElementById("gtlF").value = getalF;
    subtotaalF = getalF * bedragF;
    document.getElementById("totaalbedragF").innerHTML = "&euro; " + subtotaalF;
    sF = document.getElementById("subtotaalF").innerHTML = "&euro; " + Math.round((subtotaalF + Number.EPSILON) * 100) / 100;
  } else {

  }
  totaalBerekening();
}

function minF() {

  if (getalF >= 1) {
    getalF--;
    document.getElementById("gtlF").value = getalF;
    subtotaalF = getalF * bedragF;
    document.getElementById("totaalbedragF").innerHTML = "&euro; " + subtotaalF;
    sF = document.getElementById("subtotaalF").innerHTML = "&euro; " + Math.round((subtotaalF + Number.EPSILON) * 100) / 100;

  } else {

  }
  totaalBerekening();
}