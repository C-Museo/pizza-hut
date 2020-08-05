function verifyOder()
{

var pizza = document.getElementById("pizza").value;  
var size = document.getElementById("size").value; 
var crust = document.getElementById("crust").value; 
var toppings = document.getElementById("toppings").value; 
var delivery = document.getElementById("delivery").value; 

if(pizza!="" || size!=""| crust!="" | toppings !="") 
{
  

if(delivery!="")
{
    var opts = document.getElementById("myselection"); 
    opts.style="display:block;";

//results
var myPizza = document.getElementById("myPizza"); 
var myPizzaSize = document.getElementById("myPizzaSize"); 
var myToppings = document.getElementById("myToppings"); 
var myCrust = document.getElementById("myCrust"); 
var myDeliveryOption = document.getElementById("myDeliveryOption"); 
var amount = document.getElementById("amount"); 
myPizza.innerHTML="";
myPizzaSize.innerHTML="";
myToppings.innerHTML="";
myCrust.innerHTML="";
myDeliveryOption.innerHTML="";
amount.innerHTML="";

myPizza.innerHTML=pizza;

myToppings.innerHTML=toppings;
if(size=="1200")
{
    myPizzaSize.innerHTML="Large";
}
else if(size=="850")
{
    myPizzaSize.innerHTML="Medium";    
}
else if(size=="600")
{
    myPizzaSize.innerHTML="Small";    
}

if(crust=="200")
{
    myCrust.innerHTML="Crispy @ sh. 200";
}
else if(crust=="150")
{
    myCrust.innerHTML="Stuffed @ sh. 150";    
}
else if(crust=="180")
{
    myCrust.innerHTML="Gluten-free @ sh. 180";    
}

if(delivery =="no")
{
    myDeliveryOption.innerHTML="";
    amount.innerHTML="";
    var valueSize1 = document.getElementById("crust").value; 
    var valueCrust1 = document.getElementById("size").value; 

    myDeliveryOption.innerHTML="Pick it from Pizza Shop";
    var tot= +valueSize1 + +valueCrust1;
    amount.innerHTML=tot;

    

}
else if(delivery=="yes")
{
    myDeliveryOption.innerHTML="";
    amount.innerHTML="";
    var valueSize2 = document.getElementById("crust").value; 
    var valueCrust2 = document.getElementById("size").value; 
    myDeliveryOption.innerHTML="Deliver it to me Ksh 150";  
    var tot=+valueSize2 + +valueCrust2+150;
    amount.innerHTML=tot;
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
 
    alert("Your order has been placed successfully!");   
}