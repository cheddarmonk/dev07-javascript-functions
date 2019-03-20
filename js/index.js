function signReset1() {
    welcome = "";
    sign = "";
    calSign = "";
    setSign();
}

function signReset2(event) {
    var signData = ["greeting", "userSign", "tiles", "subTotal", "shipping", "grandTotal"]

    for (i = 0; i < signData.length; i++) {
        setTextContentById(signData[i], "");
    
    }
    event.preventDefault();
}




// Create variables for the welcome message
var greeting = "[not initialized]";
var name = "[not initialized]";
var message = "[not initialized]";
// Concatenate the three variables above to create the welcome message
var welcome;
var sign = "[not initialized]";
var tiles, subTotal, shipping, grandTotal;

function calSign() {
    tiles = sign.length;
    subTotal = tiles * 5;
    shipping = 7;
    grandTotal = subTotal + shipping;
}

function initiateVars() {
    greeting = "Howdy";
    name = "Thomas";
    message = "please double check order!";
    sign = "BIG BOY";
    welcome = greeting + "! " + name + " " + message;
    calSign();

}

initiateVars();

function setTextContentById(getId, setMsg) {
    // Get the element that has an id of greeting
    var el = document.getElementById(getId);
    // Replace the content of that element with the personalized welcome message
    el.textContent = setMsg;
}

function setSign() {
    setTextContentById("greeting", welcome);
    setTextContentById("userSign", sign);
    setTextContentById("tiles", tiles);
    setTextContentById("subTotal", "$" + subTotal);
    setTextContentById("shipping", "$" + shipping);
    setTextContentById("grandTotal", "$" + grandTotal);
}
initiateVars();
setSign();
//signReset2();

var el = document.getElementById("resetB");

el.addEventListener('click', signReset2, false);







