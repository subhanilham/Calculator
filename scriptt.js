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
}

let result;
let rem;

function calculate(){
    result = parseInt(op); //12
    while(op != ''){
        rem = parseInt(op);//12
        let sign = op[rem.toString().length];//+
        console.log(sign);
        op = op.substring(rem.toString().length + 1);//6+5//
        rem = parseInt(op);//6//
        if(Number.isInteger(rem)){
            if(sign == '+'){
            result = result + rem;
            }
            else if(sign == '-'){
                result = result - rem;
            }
            else if(sign == 'x'){
                result = result * rem;
            }
            else if(sign == '/'){
                result = result / rem;
            }
            else{
                //nothing
            }
        }
        
    }
    
    document.getElementById('result').value = result;
    document.getElementById('result').style.textAlign = 'right';
}
