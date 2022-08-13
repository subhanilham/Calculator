let arr = [];
let op ='';
function display(operation){
    arr.push(operation);
    let l = arr.length;
    op = op + arr[l-1];
    document.getElementById('result').value = op;

    let w = "";

    for(let a = 0; a < arr.length ; a++){
        w = w + arr[a];
    }
}


function cle(){
    arr = [];
    op = '';
    rem = 0;
    result = 0;
    document.getElementById('result').value = '';
    document.getElementById('result').style.textAlign = '';

}

let result;

function calculate(){
    result = eval(op);   
    document.getElementById('result').value = result;
    document.getElementById('result').style.textAlign = 'right';
}
