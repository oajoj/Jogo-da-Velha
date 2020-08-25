terminou = false;
var cont = 0
function interaction(x) {

    if (terminou == true) { // CONDIÇÃO PARA VERIFICAR SE O JOGO JÁ FINALIZOU, CASO SIM, O MESMO SERÁ TRAVADO
        return;
    } else {
        if (x.innerHTML == "X" || x.innerHTML == "O") { // CONDIÇÃO PARA NÃO ALTERAR OS VALORES JÁ INSERIDOS
            return;
        }
        /*if (cont % 2 == 0) { // CONDIÇÃO PARA INSERIR "X" OU "O" COM BASE NA ORDEM DE JOGADA
            x.innerHTML = "X";
            x.style.color = "white";

        } else {
            x.innerHTML = "O";
            x.style.color = "white";
        }*/

        x.innerHTML = "X";
        x.style.color = "white";

        cont += 1;
        if(!terminou){
            verify(); // FUNÇÃO PARA VERIFICAR SE O JOGO FOI VENCIDO
            setTimeout(function(){
                bot_play();
            }, 500);
        }
        

    }
}

function verify() {
    // VERIFICAÇÃO DO "X" E DO "O" NA HORIZONTAL 1 
    if ((
        document.getElementById("cell1").innerHTML == "X" &&
        document.getElementById("cell2").innerHTML == "X" &&
        document.getElementById("cell3").innerHTML == "X") ||
        (
            document.getElementById("cell1").innerHTML == "O" &&
            document.getElementById("cell2").innerHTML == "O" &&
            document.getElementById("cell3").innerHTML == "O"
        )) {
        for (var i = 1; i <= 3; i++) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
    }

    // VERIFICAÇÃO DO "X" E DO "O" NA HORIZONTAL 2
    if ((
        document.getElementById("cell4").innerHTML == "X" &&
        document.getElementById("cell5").innerHTML == "X" &&
        document.getElementById("cell6").innerHTML == "X") ||
        (
            document.getElementById("cell4").innerHTML == "O" &&
            document.getElementById("cell5").innerHTML == "O" &&
            document.getElementById("cell6").innerHTML == "O"
        )) {
        for (var i = 4; i <= 6; i++) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
    }

    // VERIFICAÇÃO DO "X" E DO "O" NA HORIZONTAL 3
    if ((
        document.getElementById("cell7").innerHTML == "X" &&
        document.getElementById("cell8").innerHTML == "X" &&
        document.getElementById("cell9").innerHTML == "X") ||
        (
            document.getElementById("cell7").innerHTML == "O" &&
            document.getElementById("cell8").innerHTML == "O" &&
            document.getElementById("cell9").innerHTML == "O"
        )) {
        for (var i = 7; i <= 9; i++) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
    }

    // VERIFICAÇÃO DO "X" E DO "O" NA VERTICAL 1
    if ((
        document.getElementById("cell1").innerHTML == "X" &&
        document.getElementById("cell4").innerHTML == "X" &&
        document.getElementById("cell7").innerHTML == "X") ||
        (
            document.getElementById("cell1").innerHTML == "O" &&
            document.getElementById("cell4").innerHTML == "O" &&
            document.getElementById("cell7").innerHTML == "O"
        )) {
        for (var i = 1; i <= 7; i+=3) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
    }

    // VERIFICAÇÃO DO "X" E DO "O" NA VERTICAL 2
    if ((
        document.getElementById("cell2").innerHTML == "X" &&
        document.getElementById("cell5").innerHTML == "X" &&
        document.getElementById("cell8").innerHTML == "X") ||
        (
            document.getElementById("cell2").innerHTML == "O" &&
            document.getElementById("cell5").innerHTML == "O" &&
            document.getElementById("cell8").innerHTML == "O"
        )) {
        for (var i = 2; i <= 8; i+=3) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
    }

    // VERIFICAÇÃO DO "X" E DO "O" NA VERTICAL 3
    if ((
        document.getElementById("cell3").innerHTML == "X" &&
        document.getElementById("cell6").innerHTML == "X" &&
        document.getElementById("cell9").innerHTML == "X") ||
        (
            document.getElementById("cell3").innerHTML == "O" &&
            document.getElementById("cell6").innerHTML == "O" &&
            document.getElementById("cell9").innerHTML == "O"
        )) {
        for (var i = 3; i <= 9; i+=3) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
    }

    // VERIFICAÇÃO DO "X" E DO "O" NA DIAGONAL PRINCIPAL
    if ((
        document.getElementById("cell1").innerHTML == "X" &&
        document.getElementById("cell5").innerHTML == "X" &&
        document.getElementById("cell9").innerHTML == "X") ||
        (
            document.getElementById("cell1").innerHTML == "O" &&
            document.getElementById("cell5").innerHTML == "O" &&
            document.getElementById("cell9").innerHTML == "O"
        )) {
        for (var i = 1; i <= 9; i+=4) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
    }
    // VERIFICAÇÃO DO "X" E DO "O" NA DIAGONAL SECUNDÁRIA
    if ((
        document.getElementById("cell3").innerHTML == "X" &&
        document.getElementById("cell5").innerHTML == "X" &&
        document.getElementById("cell7").innerHTML == "X") ||
        (
            document.getElementById("cell3").innerHTML == "O" &&
            document.getElementById("cell5").innerHTML == "O" &&
            document.getElementById("cell7").innerHTML == "O"
        )) {
        for (var i = 3; i <= 7; i+=2) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
    }

    if (terminou == false && cont == 9){
        terminou = true;
        document.getElementById("reiniciar").style.display = "inline";
    }

    if(terminou){
        document.getElementById("reiniciar").style.display = "inline";
    }

}

function refresh() {
    location.reload();

}

function bot_play(){
    var aux
    if(cont==1){
        for(var i=1; i<=9; i+=1){
            if(document.getElementById("cell"+i).innerHTML == "X"){
            aux = i;
            }
        } 
        
        do{
            var aux2 = Math.floor(Math.random() * (10-1))  + 1
        }while(aux2 == aux);
    
        document.getElementById("cell"+aux2).innerHTML = "O";
    }
    

}
