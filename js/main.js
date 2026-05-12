function convertData(){
    var dollar = document.getElementById("dollar").value.trim();
    var result = document.getElementById("result");

    if(dollar==""){
        result.innerHTML = "Enter Value";
        // return false
    }else if (isNaN(dollar)){
        result.innerHTML = "Enter Number Not Text";
        // return false
    }else if (dollar<0){
        result.innerHTML = "Enter Postive Number";
        // return false
    }else if (dpllar==0){
        result.innerHTML = "Enter Number Rather Than Zero";
        // return false
    }else{
        result.innerHTML = doolar * 50 + "Egyption Pound";
        // return false
    }
    return false
}