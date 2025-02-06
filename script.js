let xTurn = true;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = "X";
            document.getElementById(buttonId).style.color="#FF0000";
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";
            document.getElementById(buttonId).style.color="#0000FF";
        }

    xTurn = !xTurn;
    checkWin();
    }
} // End of changeMark

function resetGame() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

}// end of resetGame

function checkWin() {
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    // X win conditions

    if (a1 == b1 && b1 == c1 && a1 == "X") {
        result = "X won"
        document.getElementById('winner').innerHTML = result;
    }
    else if (a2 == b2 && b2 == c2 && a2 == "X") {
        result = "X won"
        document.getElementById('winner').innerHTML = result;
    }
    else if (a3 == b3 && b3 == c3 && a3 == "X") {
        result = "X won"
        document.getElementById('winner').innerHTML = result;
    }

    // horizontal check

    else if (a1 == b2 && b2 == c3 && a1 == "X") {
        result = "X won"
        document.getElementById('winner').innerHTML = result;
    }
    else if (a3 == b2 && b2 == c1 && a3 == "X") {
        result = "X won"
        document.getElementById('winner').innerHTML = result;
    }

    // diagonal check

    else if (a1 == a2 && a2 == a3 && a1 == "X") {
        result = "X won"
        document.getElementById('winner').innerHTML = result;
    }
    else if (b1 == b2 && b2 == b3 && b1 == "X") {
        result = "X won"
        document.getElementById('winner').innerHTML = result;
    }
    else if (c1 == c2 && c2 == c3 && c1 == "X") {
        result = "X won"
        document.getElementById('winner').innerHTML = result;
    }

    // vertical check

    // O win conditions

    if (a1 == b1 && b1 == c1 && a1 == "O") {
        result = "O won"
        document.getElementById('winner').innerHTML = result;
    }
    else if (a2 == b2 && b2 == c2 && a2 == "O") {
        result = "O won"
        document.getElementById('winner').innerHTML = result;
    }
    else if (a3 == b3 && b3 == c3 && a3 == "O") {
        result = "O won"
        document.getElementById('winner').innerHTML = result;
    }

    // horizontal check

    else if (a1 == b2 && b2 == c3 && a1 == "O") {
        result = "O won"
        document.getElementById('winner').innerHTML = result;
    }
    else if (a3 == b2 && b2 == c1 && a3 == "O") {
        result = "O won"
        document.getElementById('winner').innerHTML = result;
    }

    // diagonal check

    else if (a1 == a2 && a2 == a3 && a1 == "O") {
        result = "O won"
        document.getElementById('winner').innerHTML = result;
    }
    else if (b1 == b2 && b2 == b3 && b1 == "O") {
        result = "O won"
        document.getElementById('winner').innerHTML = result;
    }
    else if (c1 == c2 && c2 == c3 && c1 == "O") {
        result = "O won"
        document.getElementById('winner').innerHTML = result;
    }
    
    // vertical check


    
}// end of checkWin


