terminou = false;
var hor1 = false;
var hor2 = false;
var hor3 = false;
var ver1 = false;
var ver2 = false;
var ver3 = false;
var dp1 = false;
var ds1 = false;
var cont = 0
function interaction(x) {

    if (terminou == true) { // CONDIÇÃO PARA VERIFICAR SE O JOGO JÁ FINALIZOU, CASO SIM, O MESMO SERÁ TRAVADO
        verify();
        return;
    } else {
        if (x.innerHTML == "X" || x.innerHTML == "O") { // CONDIÇÃO PARA NÃO ALTERAR OS VALORES JÁ INSERIDOS
            verify();
            return;
        }
        x.innerHTML = "X";
        x.style.color = "white";

        cont += 1;
        if (!terminou) {
            verify(); // FUNÇÃO PARA VERIFICAR SE O JOGO FOI VENCIDO
            setTimeout(function () {
                bot_play_win();
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
        document.getElementById("reiniciar").style.display = "inline";
        return;
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
        document.getElementById("reiniciar").style.display = "inline";
        return;
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
        document.getElementById("reiniciar").style.display = "inline";
        return;
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
        for (var i = 1; i <= 7; i += 3) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
        document.getElementById("reiniciar").style.display = "inline";
        return;
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
        for (var i = 2; i <= 8; i += 3) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
        document.getElementById("reiniciar").style.display = "inline";
        return;
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
        for (var i = 3; i <= 9; i += 3) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
        document.getElementById("reiniciar").style.display = "inline";
        return;
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
        for (var i = 1; i <= 9; i += 4) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
        document.getElementById("reiniciar").style.display = "inline";
        return;
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
        for (var i = 3; i <= 7; i += 2) {
            document.getElementById("cell" + i).style.color = "#200F8C";
            terminou = true;
        }
        document.getElementById("reiniciar").style.display = "inline";
        return;

    }

    if (terminou == false) {
        var aux = 0;
        for (var i = 1; i <= 9; i += 1) {
            if (document.getElementById("cell" + i).innerText != "") {
                aux = 1;
            }
        }
        if (aux == 0) {
            alert('empate')
        }
    }
}

function refresh() {
    location.reload();

}

function bot_play_win() {
    alert('atacando')
    if (terminou != true) {
        // VERIFICAÇÃO DO "O" NA HORZINTAL 1
        if (
            document.getElementById("cell1").innerHTML == "O" &&
            document.getElementById("cell2").innerHTML == "O") {
            if (document.getElementById("cell3").innerText == "") {
                document.getElementById("cell3").innerHTML = "O";
                verify();
                return;
            } else {
                bot_play();
                return;
            }
        } else {
            if (
                document.getElementById("cell1").innerHTML == "O" &&
                document.getElementById("cell3").innerHTML == "O") {
                if (document.getElementById("cell2").innerText == "") {
                    document.getElementById("cell2").innerHTML = "O";
                    verify();
                    return;
                } else {
                    bot_play();
                    return;
                }

            } else {
                if (
                    document.getElementById("cell2").innerHTML == "O" &&
                    document.getElementById("cell3").innerHTML == "O") {
                    if (document.getElementById("cell1").innerText == "") {
                        document.getElementById("cell1").innerHTML = "O";
                        verify();
                        return;
                    } else {
                        bot_play();
                        return;
                    }

                }
            }
        }
        // VERIFICAÇÃO DO "O" NA HORIZONTAL 2
        if (
            document.getElementById("cell4").innerHTML == "O" &&
            document.getElementById("cell5").innerHTML == "O") {
            if (document.getElementById("cell6").innerText == "") {
                document.getElementById("cell6").innerHTML = "O";
                verify();
                return;
            } else {
                bot_play();
                return;
            }

        } else {
            if (document.getElementById("cell4").innerHTML == "O" &&
                document.getElementById("cell6").innerHTML == "O") {
                if (document.getElementById("cell5").innerText == "") {
                    document.getElementById("cell5").innerHTML = "O";
                    verify();
                    return;
                } else {
                    bot_play();
                    return;
                }

            } else {
                if (document.getElementById("cell5").innerHTML == "O" &&
                    document.getElementById("cell6").innerHTML == "O") {
                    if (document.getElementById("cell4").innerText == "") {
                        document.getElementById("cell4").innerHTML = "O";
                        verify();
                        return;
                    } else {
                        bot_play();
                        return;
                    }

                }
            }
        }
        // VERIFICAÇÃO DO "O" NA HORIZONTAL 3
        if ((
            document.getElementById("cell7").innerHTML == "O" &&
            document.getElementById("cell8").innerHTML == "O")) {
            if (document.getElementById("cell9").innerText == "") {
                document.getElementById("cell9").innerHTML = "O";
                verify();
                return;
            } else {
                bot_play();
                return;
            }

        } else {
            if (
                document.getElementById("cell7").innerHTML == "O" &&
                document.getElementById("cell9").innerHTML == "O") {
                if (document.getElementById("cell8").innerText == "") {
                    document.getElementById("cell8").innerHTML = "O";
                    verify();
                    return;
                } else {
                    bot_play();
                    return;
                }

            } else {
                if (
                    document.getElementById("cell8").innerHTML == "O" &&
                    document.getElementById("cell9").innerHTML == "O") {
                    if (document.getElementById("cell7").innerText == "") {
                        document.getElementById("cell7").innerHTML = "O";
                        verify();
                        return;
                    } else {
                        bot_play();
                        return;
                    }

                }
            }
        }

        // VERIFICAÇÃO DO "O" NA VERTICAL 1
        if ((
            document.getElementById("cell1").innerHTML == "O" &&
            document.getElementById("cell4").innerHTML == "O")) {
            if (document.getElementById("cell7").innerText == "") {
                document.getElementById("cell7").innerHTML = "O";
                verify();
                return;
            } else {
                bot_play();
                return;
            }

        } else {
            if (
                document.getElementById("cell1").innerHTML == "O" &&
                document.getElementById("cell7").innerHTML == "O") {
                if (document.getElementById("cell4").innerText == "") {
                    document.getElementById("cell4").innerHTML = "O";
                    verify();
                    return;
                } else {
                    bot_play();
                    return;
                }

            } else {
                if (
                    document.getElementById("cell4").innerHTML == "O" &&
                    document.getElementById("cell7").innerHTML == "O") {
                    if (document.getElementById("cell1").innerText == "") {
                        document.getElementById("cell1").innerHTML = "O";
                        verify();
                        return;
                    } else {
                        bot_play();
                        return;
                    }
                }
            }
        }

        // VERIFICAÇÃO DO "O" NA VERTICAL 2
        if ((
            document.getElementById("cell2").innerHTML == "O" &&
            document.getElementById("cell5").innerHTML == "O")) {
            if (document.getElementById("cell8").innerText == "") {
                document.getElementById("cell8").innerHTML = "O";
                verify();
                return;
            } else {
                bot_play();
                return;
            }

        } else {
            if (
                document.getElementById("cell2").innerHTML == "O" &&
                document.getElementById("cell8").innerHTML == "O") {
                if (document.getElementById("cell5").innerText == "") {
                    document.getElementById("cell5").innerHTML = "O";
                    verify();
                    return;
                } else {
                    bot_play();
                    return;
                }

            } else {
                if (
                    document.getElementById("cell5").innerHTML == "O" &&
                    document.getElementById("cell8").innerHTML == "O") {
                    if (document.getElementById("cell2").innerText == "") {
                        document.getElementById("cell2").innerHTML = "O";
                        verify();
                        return;
                    } else {
                        bot_play();
                        return;
                    }

                }
            }
        }

        // VERIFICAÇÃO DO "O" NA VERTICAL 3
        if ((
            document.getElementById("cell3").innerHTML == "O" &&
            document.getElementById("cell6").innerHTML == "O")) {
            if (document.getElementById("cell9").innerText == "") {
                document.getElementById("cell9").innerHTML = "O";
                verify();
                return;
            } else {
                bot_play();
                return;
            }

        } else {
            if (
                document.getElementById("cell3").innerHTML == "O" &&
                document.getElementById("cell9").innerHTML == "O") {
                if (document.getElementById("cell6").innerText == "") {
                    document.getElementById("cell6").innerHTML = "O";
                    verify();
                    return;
                } else {
                    bot_play();
                    return;
                }

            } else {
                if (
                    document.getElementById("cell9").innerHTML == "O" &&
                    document.getElementById("cell6").innerHTML == "O") {
                    if (document.getElementById("cell3").innerText == "") {
                        document.getElementById("cell3").innerHTML = "O";
                        verify();
                        return;
                    } else {
                        bot_play();
                        return;
                    }

                }
            }
        }

        // VERIFICAÇÃO DO "O" NA DIAGONAL PRINCIPAL
        if ((
            document.getElementById("cell1").innerHTML == "O" &&
            document.getElementById("cell5").innerHTML == "O")) {
            if (document.getElementById("cell9").innerText == "") {
                document.getElementById("cell9").innerHTML = "O";
                verify();
                return;
            } else {
                bot_play();
                return;
            }

        } else {
            if (
                document.getElementById("cell5").innerHTML == "O" &&
                document.getElementById("cell9").innerHTML == "O") {
                if (document.getElementById("cell1").innerText == "") {
                    document.getElementById("cell1").innerHTML = "O";
                    verify();
                    return;
                } else {
                    bot_play();
                    return;
                }

            } else {
                if (
                    document.getElementById("cell1").innerHTML == "O" &&
                    document.getElementById("cell9").innerHTML == "O") {
                    if (document.getElementById("cell5").innerText == "") {
                        document.getElementById("cell5").innerHTML = "O";
                        verify();
                        return;
                    } else {
                        bot_play();
                        return;
                    }
                }
            }
        }

        // VERIFICAÇÃO DO "O" NA DIAGONAL SECUNDÁRIA
        if ((
            document.getElementById("cell3").innerHTML == "O" &&
            document.getElementById("cell5").innerHTML == "O")) {
            if (document.getElementById("cell7").innerText == "") {
                document.getElementById("cell7").innerHTML = "O";
                verify();
                return;
            } else {
                bot_play();
                return;
            }

        } else {
            if (
                document.getElementById("cell5").innerHTML == "O" &&
                document.getElementById("cell7").innerHTML == "O") {
                if (document.getElementById("cell3").innerText == "") {
                    document.getElementById("cell3").innerHTML = "O";
                    verify();
                    return;
                } else {
                    bot_play();
                    return;
                }

            } else {
                if (
                    document.getElementById("cell3").innerHTML == "O" &&
                    document.getElementById("cell7").innerHTML == "O") {
                    if (document.getElementById("cell5").innerText == "") {
                        document.getElementById("cell5").innerHTML = "O";
                        verify();
                        return;
                    } else {
                        bot_play();
                        return;
                    }

                }
            }
        }
        bot_play();
    }
}

function bot_play() {
    alert('defendendo')
    if (terminou != true) {
        var aux;
        if (cont == 1) {
            for (var i = 1; i <= 9; i += 1) {
                if (document.getElementById("cell" + i).innerHTML == "X") {
                    aux = i;
                }
            }

            do {
                var aux2 = Math.floor(Math.random() * (10 - 1)) + 1
            } while (aux2 == aux);

            document.getElementById("cell" + aux2).innerHTML = "O";
        } else {
            // VERIFICAÇÃO DO "X" NA HORZINTAL 1
            if (hor1 != true) {
                alert('hor1')
                if (
                    document.getElementById("cell1").innerHTML == "X" &&
                    document.getElementById("cell2").innerHTML == "X") {
                    if (document.getElementById("cell3").innerHTML == "O") {
                        alert('neutro')
                        bot_play_neutral();
                        return;
                    } else {
                        document.getElementById("cell3").innerHTML = "O";
                        hor1 = true;
                        verify();
                        return;
                    }
                } else {
                    if (
                        document.getElementById("cell1").innerHTML == "X" &&
                        document.getElementById("cell3").innerHTML == "X") {
                        if (document.getElementById("cell2").innerHTML == "O") {
                            bot_play_neutral();
                            return;
                        } else {
                            document.getElementById("cell2").innerHTML = "O";
                            hor1 = true;
                            verify();
                            return;
                        }
                    } else {
                        if (
                            document.getElementById("cell2").innerHTML == "X" &&
                            document.getElementById("cell3").innerHTML == "X") {
                            if (document.getElementById("cell1").innerHTML == "O") {
                                bot_play_neutral();
                                return;
                            } else {
                                document.getElementById("cell1").innerHTML = "O";
                                hor1 = true;
                                verify();
                                return;
                            }
                        }
                    }
                }
            }
            // VERIFICAÇÃO DO "X" NA HORIZONTAL 2
            if (hor2 != true) {
                alert('hor2')
                if (
                    document.getElementById("cell4").innerHTML == "X" &&
                    document.getElementById("cell5").innerHTML == "X") {
                    if (document.getElementById("cell6").innerHTML == "O") {
                        bot_play_neutral();
                        return;
                    } else {
                        document.getElementById("cell6").innerHTML = "O";
                        hor2 = true;
                        verify();
                        return;
                    }

                } else {
                    if (document.getElementById("cell4").innerHTML == "X" &&
                        document.getElementById("cell6").innerHTML == "X") {
                        if (document.getElementById("cell5").innerHTML == "O") {
                            bot_play_neutral();
                            return;
                        } else {
                            document.getElementById("cell5").innerHTML = "O";
                            hor2 = true;
                            verify();
                            return;
                        }

                    } else {
                        if (document.getElementById("cell5").innerHTML == "X" &&
                            document.getElementById("cell6").innerHTML == "X") {
                            if (document.getElementById("cell4").innerHTML == "O") {
                                bot_play_neutral();
                                return;
                            } else {
                                document.getElementById("cell4").innerHTML = "O";
                                hor2 = true;
                                verify();
                                return;
                            }

                        }
                    }
                }
            }
            // VERIFICAÇÃO DO "X" NA HORIZONTAL 3
            if (hor3 != true) {
                alert('hor3')
                if ((
                    document.getElementById("cell7").innerHTML == "X" &&
                    document.getElementById("cell8").innerHTML == "X")) {
                    if (document.getElementById("cell9").innerHTML == "O") {
                        bot_play_neutral();
                        return;
                    } else {
                        document.getElementById("cell9").innerHTML = "O";
                        hor3 = true;
                        verify();
                        return;
                    }

                } else {
                    if (
                        document.getElementById("cell7").innerHTML == "X" &&
                        document.getElementById("cell9").innerHTML == "X") {
                        if (document.getElementById("cell8").innerHTML == "O") {
                            bot_play_neutral();
                            return;
                        } else {
                            document.getElementById("cell8").innerHTML = "O";
                            hor3 = true;
                            verify();
                            return;
                        }

                    } else {
                        if (
                            document.getElementById("cell8").innerHTML == "X" &&
                            document.getElementById("cell9").innerHTML == "X") {
                            if (document.getElementById("cell7").innerHTML == "O") {
                                bot_play_neutral();
                                return;
                            } else {
                                document.getElementById("cell7").innerHTML = "O";
                                hor3 = true;
                                verify();
                                return;
                            }

                        }
                    }
                }
            }
            // VERIFICAÇÃO DO "X" NA VERTICAL 1
            if (ver1 != true) {
                alert('ver1')
                if ((
                    document.getElementById("cell1").innerHTML == "X" &&
                    document.getElementById("cell4").innerHTML == "X")) {
                    if (document.getElementById("cell7").innerHTML == "O") {
                        bot_play_neutral();
                        return;
                    } else {
                        document.getElementById("cell7").innerHTML = "O";
                        ver1 = true;
                        verify();
                        return;
                    }

                } else {
                    if (
                        document.getElementById("cell1").innerHTML == "X" &&
                        document.getElementById("cell7").innerHTML == "X") {
                        if (document.getElementById("cell4").innerHTML == "O") {
                            bot_play_neutral();
                            return;
                        } else {
                            document.getElementById("cell4").innerHTML = "O";
                            ver1 = true;
                            verify();
                            return;
                        }

                    } else {
                        if (
                            document.getElementById("cell4").innerHTML == "X" &&
                            document.getElementById("cell7").innerHTML == "X") {
                            if (document.getElementById("cell1").innerHTML == "O") {
                                bot_play_neutral();
                                return;
                            } else {
                                document.getElementById("cell1").innerHTML = "O";
                                ver1 = true;
                                verify();
                                return;
                            }

                        }
                    }
                }
            }
            // VERIFICAÇÃO DO "X" NA VERTICAL 2
            if (ver2 != true) {
                alert('ver2')
                if ((
                    document.getElementById("cell2").innerHTML == "X" &&
                    document.getElementById("cell5").innerHTML == "X")) {
                    if (document.getElementById("cell8").innerHTML == "O") {
                        bot_play_neutral();
                        return;
                    } else {
                        document.getElementById("cell8").innerHTML = "O";
                        ver2 = true;
                        verify();
                        return;
                    }

                } else {
                    if (
                        document.getElementById("cell2").innerHTML == "X" &&
                        document.getElementById("cell8").innerHTML == "X") {
                        if (document.getElementById("cell5").innerHTML == "O") {
                            bot_play_neutral();
                            return;
                        } else {
                            document.getElementById("cell5").innerHTML = "O";
                            ver2 = true;
                            verify();
                            return;
                        }

                    } else {
                        if (
                            document.getElementById("cell5").innerHTML == "X" &&
                            document.getElementById("cell8").innerHTML == "X") {
                            if (document.getElementById("cell2").innerHTML == "O") {
                                bot_play_neutral();
                                return;
                            } else {
                                document.getElementById("cell2").innerHTML = "O";
                                ver2 = true;
                                verify();
                                return;
                            }
                        }
                    }
                }
            }
            // VERIFICAÇÃO DO "X" NA VERTICAL 3
            if (ver3 != true) {
                alert('ver3')
                if ((
                    document.getElementById("cell3").innerHTML == "X" &&
                    document.getElementById("cell6").innerHTML == "X")) {
                    if (document.getElementById("cell9").innerHTML == "O") {
                        bot_play_neutral();
                        return;
                    } else {
                        document.getElementById("cell9").innerHTML = "O";
                        ver3 = true;
                        verify();
                        return;
                    }

                } else {
                    if (
                        document.getElementById("cell3").innerHTML == "X" &&
                        document.getElementById("cell9").innerHTML == "X") {
                        if (document.getElementById("cell6").innerHTML == "O") {
                            bot_play_neutral();
                            return;
                        } else {
                            document.getElementById("cell6").innerHTML = "O";
                            ver3 = true;
                            verify();
                            return;
                        }

                    } else {
                        if (
                            document.getElementById("cell9").innerHTML == "X" &&
                            document.getElementById("cell6").innerHTML == "X") {
                            if (document.getElementById("cell3").innerHTML == "O") {
                                bot_play_neutral();
                                return;
                            } else {
                                document.getElementById("cell3").innerHTML = "O";
                                ver3 = true;
                                verify();
                                return;
                            }

                        }
                    }
                }
            }
            // VERIFICAÇÃO DO "X" NA DIAGONAL PRINCIPAL
            if (dp1 != true) {
                alert('dp1')
                if ((
                    document.getElementById("cell1").innerHTML == "X" &&
                    document.getElementById("cell5").innerHTML == "X")) {
                    if (document.getElementById("cell9").innerHTML == "O") {
                        bot_play_neutral();
                        return;
                    } else {
                        document.getElementById("cell9").innerHTML = "O";
                        dp1 = true;
                        verify();
                        return;
                    }

                } else {
                    if (
                        document.getElementById("cell5").innerHTML == "X" &&
                        document.getElementById("cell9").innerHTML == "X") {
                        if (document.getElementById("cell1").innerHTML == "O") {
                            bot_play_neutral();
                            return;
                        } else {
                            document.getElementById("cell1").innerHTML = "O";
                            dp1 = true;
                            verify();
                            return;
                        }

                    } else {
                        if (
                            document.getElementById("cell1").innerHTML == "X" &&
                            document.getElementById("cell9").innerHTML == "X") {
                            if (document.getElementById("cell5").innerHTML == "O") {
                                bot_play_neutral();
                                return;
                            } else {
                                document.getElementById("cell5").innerHTML = "O";
                                dp1 = true;
                                verify();
                                return;
                            }

                        }
                    }
                }
            }
            // VERIFICAÇÃO DO "X" NA DIAGONAL SECUNDÁRIA
            if (ds1 != true) {
                alert('ds1')
                if ((
                    document.getElementById("cell3").innerHTML == "X" &&
                    document.getElementById("cell5").innerHTML == "X")) {
                    if (document.getElementById("cell7").innerHTML == "O") {
                        bot_play_neutral();
                        return;
                    } else {
                        document.getElementById("cell7").innerHTML = "O";
                        ds1 = true;
                        verify();
                        return;
                    }

                } else {
                    if (
                        document.getElementById("cell5").innerHTML == "X" &&
                        document.getElementById("cell7").innerHTML == "X") {
                        if (document.getElementById("cell3").innerHTML == "O") {
                            bot_play_neutral();
                            return;
                        } else {
                            document.getElementById("cell3").innerHTML = "O";
                            ds1 = true;
                            verify();
                            return;
                        }

                    } else {
                        if (
                            document.getElementById("cell3").innerHTML == "X" &&
                            document.getElementById("cell7").innerHTML == "X") {
                            if (document.getElementById("cell5").innerHTML == "O") {
                                bot_play_neutral();
                                return;
                            } else {
                                document.getElementById("cell5").innerHTML = "O";
                                ds1 = true;
                                verify();
                                return;
                            }

                        }
                    }
                    bot_play_neutral();
                }
            }

        }
    }
}

function bot_play_neutral() {
    alert('neutro')
    if (terminou != true) {
        var aaux = 0;
        var numRand
        while (aaux < 100) {
            numRand = Math.floor(Math.random() * (10 - 1)) + 1
            if (document.getElementById("cell" + numRand).innerText == "") {
                document.getElementById("cell" + numRand).innerHTML = "O";
                break;
            }
            aaux += 1
        }
        verify();
    }
}
