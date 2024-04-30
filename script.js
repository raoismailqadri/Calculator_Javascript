function pick(val){
    document.getElementById("inputBox").value +=val;
}

// THIS FUNCTION IS FOR ALL CLEAR MEANS BUTTON "AC"
function clr(){
    document.getElementById("inputBox").value = " ";
}

// THIS FUNCTION IS FOR EVALUATION MEANS BUTTON "="
function solve(){
    let x = document.getElementById("inputBox").value;
    let y = eval(x);
    document.getElementById("inputBox").value=y;
}

// THIS FUNCTION IS FOR PERCENTAGE MEANS BUTTON "%"
function percentge(){
    let percntg =(y);
    document.getElementById("inputBox").value=percntg;
}
