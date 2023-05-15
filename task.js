function check() {
  var ricxvi = document.getElementById("number").value;

if(ricxvi < 0) {
    document.getElementById("dark").style.display = "flex";
    document.getElementById("message").innerHTML = "შეყვანილი რიცხვი არის უარყოფითი";
}else if(ricxvi > 0) {
    document.getElementById("dark").style.display = "flex";
    document.getElementById("message").innerHTML = "შეყვანილი რიცხვი არის დადებითი";
}
}

function gamortva() {
    document.getElementById("dark").style.display = "none";
}

function show() {
    var ricxvi = document.getElementById("number").value;

if(ricxvi < 0) {
    document.getElementById("box1").style.height = "400px";
    document.getElementById("box1").style.backgroundColor = "blueviolet";
}else if(ricxvi > 0) {
    document.getElementById("box1").style.height = "400px";
    document.getElementById("box1").style.backgroundColor = "aqua";
}else if(ricxvi == 0) {
    document.getElementById("box1").style.height = "400px";
    document.getElementById("box1").style.backgroundColor = "green";
}
}