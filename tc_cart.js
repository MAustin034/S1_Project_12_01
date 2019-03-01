"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: mickal austin
   Date:  2.27.19 
   
   Filename: tc_cart.js
	
*/
//variable for total order
var orderTotal = 0;
//variable of html for cart
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
//loop that loops through entries
for (var i = 0; i < 4; i++) {
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='item' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal += itemCost;
}

cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";
document.getElementById("cart").innerHTML = cartHTML;