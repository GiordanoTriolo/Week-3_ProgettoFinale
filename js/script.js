function display(number){
    document.getElementById('result').value += number;  
}

function risultato(){
    let res_str = document.getElementById('result').value;
    let res_arr;
    if(res_str.indexOf('+') > -1){
        res_arr = res_str.split("+");
        let totale = (parseFloat(res_arr[0]))+(parseFloat(res_arr[1]));
        document.getElementById('result').value = totale;
    }

    else if(res_str.indexOf('-') > -1){
        res_arr = res_str.split("-");
        let totale = (parseFloat(res_arr[0]))-(parseFloat(res_arr[1]));
        document.getElementById('result').value = totale;
    }
    else if(res_str.indexOf('*') > -1){
        res_arr = res_str.split("*");
        let totale = (parseFloat(res_arr[0]))*(parseFloat(res_arr[1]));
        document.getElementById('result').value = totale;
    }
    else if(res_str.indexOf('/') > -1){
        res_arr = res_str.split("/");
        let totale = (parseFloat(res_arr[0]))/(parseFloat(res_arr[1]));
        document.getElementById('result').value = totale;
    }
    else {document.getElementById('result').value = 'Non hai messo operatori'}
    console.log(res_arr);
}


function reset(){
    document.getElementById('result').value = '';
}