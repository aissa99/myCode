"use strict";

//Seleziona digit
function seleziona(dato) {
  var digit = (document.getElementById("schermo").value += dato);
}

//Cancellazione
function cancella() {
  var oper = document.getElementById("c").value;
  var schermo = (document.getElementById("schermo").value = "");
}

//Calcolare
function calc() {
  if (document.getElementById("schermo").value !== "") {
    //recupero quello che c'è nell'input readOnly
    var schermo = document.getElementById("schermo").value;

    //Condizione per il plus
    //?A voir la periodicita dei numeri decimali
    if (schermo.includes("+")) {
      var indexOp1Plus = schermo.indexOf("+");
      var op1Plus = parseFloat(schermo.substring(0, indexOp1Plus));

      var lastIndexPlus = schermo.indexOf("+");
      let op2Plus = parseFloat(schermo.substring(lastIndexPlus + 1));

      var visualizza = parseFloat(
        (document.getElementById("schermo").value = op1Plus + op2Plus)
      );
      //Meno
    } else if (schermo.includes("-")) {
      var indexOp1Meno = schermo.indexOf("-");
      var op1Meno = schermo.substring(0, indexOp1Meno);
      var lastIndexMinus = schermo.indexOf("-");
      let op2Minus = parseFloat(schermo.substring(lastIndexMinus + 1));
      var res1 = op1Meno - op2Minus;

      var vis1 = parseFloat((document.getElementById("schermo").value = res1));
      //Mult
    } else if (schermo.includes("*")) {
      var indexOp1Mult = schermo.indexOf("*");
      var op1Mult = schermo.substring(0, indexOp1Mult);
      var lastIndexMult = schermo.indexOf("*");
      let op2Mult = parseFloat(schermo.substring(lastIndexMult + 1));
      var res2 = op1Mult * op2Mult;
      var vis2 = parseFloat((document.getElementById("schermo").value = res2));
      //Div
    } else if (schermo.includes("/")) {
      var indexOp1Div = schermo.indexOf("/");
      var op1Div = schermo.substring(0, indexOp1Div);
      var lastIndexDiv = schermo.indexOf("/");
      let op2Div = parseFloat(schermo.substring(lastIndexDiv + 1));
      var res3 = op1Div / op2Div;
      var vis3 = parseFloat((document.getElementById("schermo").value = res3));
    }
  }
}
