function addTwoNumbers(a, b) {
	var result = a + b;
	alert(result);
}

addTwoNumbers(19,12);
addTwoNumbers(88,44);

function ftc() {
    var f = prompt("Please enter degrees in Fahrenheit");
    var c = (5/9) * ( f - 32);
    if (f != null) {
        document.getElementById("convert").innerHTML =
            f +" degrees fahrenheit = " + c + " degrees celsius";
    }
}