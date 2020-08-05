function verifyOder()
{
var opts = document.getElementById("myselection"); 
opts.style="display:block;";

var pizza = document.getElementById("pizza").value;  
var size = document.getElementById("size").value; 
var crust = document.getElementById("crust").value; 
var toppings = document.getElementById("toppings").value; 
var deliveryYes = document.getElementById("yes").value; 
var deliveryNo = document.getElementById("no").value; 
if(pizza!="" || size!=""| crust!="" | toppings !="") 
{
  

if(deliveryYes!="" | deliveryNo !="")
{


//results
var myPizza = document.getElementById("myPizza"); 
var myPizzaSize = document.getElementById("myPizzaSize"); 
var myToppings = document.getElementById("myToppings"); 
var myCrust = document.getElementById("myCrust"); 
var myDeliveryOption = document.getElementById("myDeliveryOption"); 
myPizza.innerHTML="";
myPizzaSize.innerHTML="";
myToppings.innerHTML="";
myCrust.innerHTML="";

myPizza.innerHTML=pizza;
myPizzaSize.innerHTML=size;
myToppings.innerHTML=toppings;
myCrust.innerHTML=crust;
if(deliveryNo !="")
{
    myDeliveryOption.innerHTML="Pick it from Pizza Shop";
}
if(deliveryYes)
{
    myDeliveryOption.innerHTML="Deliver it to me Ksh 150";   
}

}
else
{
    alert("You must select a delivery option");
}
}
else
{
 alert("Please fill all fields!");
}
}

function placeOrder() {
    
}