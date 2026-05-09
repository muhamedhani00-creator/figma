// case sensative
// document.getElementById('demo').innerHTML = "Hellow Worled From Js Code";

// document.getElementById('demo').style.color = "red";

// document.getElementById('demo').style.backgroundColor = "blue";

document.getElementById('lion').onclick = function(){
    document.getElementById('result').innerHTML = Date();
}

document.getElementById('turnon').onclick = function(){
    document.getElementById('myImage').src ='img/منورة.gif'
}
document.getElementById('turnoff').onclick = function(){
    document.getElementById('myImage').src ='img/مطفيه.gif'
}

