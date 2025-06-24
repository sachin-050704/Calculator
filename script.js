let result = document.getElementById("output");
function solve(value){
    result.innerHTML += value;
}

function calculate(){
    result.innerHTML = eval(result.innerHTML);
}

function empty(){
    result.innerHTML = "";
}

function one(){
    let r = result.innerHTML.split("");
    let r1 = r.pop();
    let r2 = r.join("");
    result.innerHTML = r2;
}