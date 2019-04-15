
// var input=document.getElementsByClassName('addToCart')

// console.log(label);

// for (var i = 0 ; i < input.length; i++){
// //console.log(i);
// var label_value = label[i].innerText;
// input[i].addEventListener("click", function(i) {
	
//     
//     // y= label.childNode[i];
//     // z=y.nodeValue;
    
//     console.log(i);

//     
//     
//     
    
//   });
//  }

var label=document.getElementsByClassName("name");
var ul = document.querySelector('#dynamic-list');
function addToCartItem(event,whichValue)
{   
	event.preventDefault();
	console.log(label[whichValue].innerText);
	
	// var label=document.getElementsByClassName("");
	var li =document.createElement("li");
	var h=document.createTextNode(label[whichValue].innerText);
	li.appendChild(h);
	document.querySelector('#dynamic-list').appendChild(li);
	console.log(h);


}

// price algorithm

var value=document.getElementsByClassName("price");
var un=document.querySelector('#dynamiclist2');
function addvalue(event,whichValue)
{
	event.preventDefault();
	console.log(value[whichValue].innerText);
	var l2i=document.createElement("li");
	var x=document.createTextNode(value[whichValue].innerText);
	l2i.appendChild(x);
	document.querySelector('#dynamiclist2').appendChild(l2i);
	console.log(x);
}