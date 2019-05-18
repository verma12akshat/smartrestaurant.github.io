var label = document.getElementsByClassName("name");
var ul = document.querySelector("#dynamic-list");
var value = document.getElementsByClassName("price");
var un = document.querySelector("#dynamiclist2");
let CartItems = [];

function addToCartItem(event, whichValue) {
  event.preventDefault();

  var itemName = label[whichValue].innerText;

  var newCartObj = {
    id: Math.random(),
    data: {
      name: itemName,
      qty: 1,
      price: 0,
      addedOn: new Date().toLocaleString()
    }
  };

  var indx = CartItems.findIndex(dataObj => dataObj.data.name === itemName);

  if (indx === -1) {
    CartItems.push(newCartObj);
    var price = value[whichValue].innerText;
    RenderDOMCartItems(CartItems, price);
  } else {
    console.log(CartItems[indx]);
    var name = CartItems[indx].data.name;
    var qty = CartItems[indx].data.qty;
    var price = value[whichValue].innerText;
    var addedOn = CartItems[indx].data.addedOn;
    CartItems = [
      ...CartItems.splice(0, indx),
      {
        ...CartItems[indx],
        id: newCartObj.id,
        data: {
          name: name,
          qty: qty + 1,
          price: price * (qty + 1),
          addedOn: addedOn,
          updatedOn: newCartObj.data.addedOn
        }
      },
      ...CartItems.splice(indx + 1)
    ];
    console.log(CartItems[indx].data.qty);
    // price = price * CartItems[indx].data.qty;
    console.log(CartItems[indx].data.price);

    // var z = document.querySelectorAll("#dynamic-list > li");
    // z.forEach(li => {
    //   if (li.innerText.substring(name)) {
    //   }
    // });
  }
}

function remove(link) {
  link.parentNode.parentNode.removeChild(link.parentNode);
}

function RenderDOMCartItems(CartItems, price) {
  var li = document.createElement("li");
  var removeIcon = document.createElement("span");
  removeIcon.className += "removeclass";
  var priceTag = document.createElement("span");
  priceTag.className += "priceclass";
  li.appendChild(
    document.createTextNode(CartItems[CartItems.length - 1].data.name)
  );

  li.appendChild(removeIcon);
  li.appendChild(priceTag);
  removeIcon.setAttribute("onclick", `remove(this)`);
  removeIcon.appendChild(document.createTextNode("X"));
  CartItems[CartItems.length - 1].data.price = price;
  // for (i = 0; i > CartItems.length; i++) {
  priceTag.appendChild(
    document.createTextNode(CartItems[CartItems.length - 1].data.price)
  );
  // }
  // console.log(total);

  document.querySelector("#dynamic-list").appendChild(li);
}
