var menuListArray = ["Pizza Vegetariana", "pizza de frango com catupiri","pizza de peperoni","pizza portuguesa","pizza 4 queijos"]; 

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0; i<menuListArray.length;i++){
    htmldata=htmldata+menuListArray[i]+"<br>";
}
document.getElementById("displayMenu").innerHTML=htmldata;
}

function addItem(){

var img="<img id='im1' src='images/pizzaImg.png'>";
var htmldata="";
menuListArray.sort();
for(var i=0; i<menuListArray.length;i++){
    htmldata=htmldata+img+menuListArray[i]+"<br>";
}
document.getElementById("displayMenu").innerHTML=htmldata;
//Completar o código

}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}