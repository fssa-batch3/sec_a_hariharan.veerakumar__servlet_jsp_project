let cartIcon  = document.querySelector('#cart-icon');
let cart  = document.querySelector('.cart');
let closeCart  = document.querySelector('#close-cart');


// open cart
cartIcon.onclick = () => {
    cart.classList.add("active")
}
// close cart
closeCart.onclick = () => {
    cart.classList.remove("active")
}

// cart working js
if (document. readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}

// creating function
function ready(){
// remove items form cart
let removeCartButtons = document.getElementsByClassName('cart-remove');
console.log(removeCartButtons);

for(let i = 0;i < removeCartButtons.length; i++){
  let button = removeCartButtons[i];
  button.addEventListener("click", removeCartItem);
}
// quantity changes
let quantityInputs = document.getElementsByClassName('cart-quantity');
for(let i = 0;i < quantityInputs.length; i++){
     let input = quantityInputs[i];
     input.addEventListener("change", quantityChanged)
}
// add to cart
let addCart  = document.getElementsByClassName('add-cart');
for(let i = 0;i < addCart.length; i++){
    let button = addCart[i]
    button.addEventListener("click", addCartClicked)
}
// buy button work  
document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked)
}
// buy button 
function buyButtonClicked(){
    alert("Your order is placed");
    let cartContent = document.getElementsByClassName('cart-content')[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}
    
// Remove Items from cart
function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

// quantity changes
function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}
// add to cart
function addCartClicked(event){
    let button = event.target
    let shopProducts = button.parentElement
    let title = shopProducts.getElementsByClassName("name")[0].innerText.toLowerCase();
    let money = shopProducts.getElementsByClassName("price")[0].innerText;
    let productImg = shopProducts.getElementsByClassName("product-image")[0].src;

    addProductToCart(title, money, productImg);
    updatetotal();
}
function addProductToCart(title, money, productImg){
    let cartShopBox = document.createElement("div")
    cartShopBox.classList.add("cart-box");
    let cartItems = document.getElementsByClassName("cart-content")[0];
    let cartItemsNames  = cartItems.getElementsByClassName("cart-product-title");
    for(let i = 0;i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText.toLowerCase() === title){
            window.alert("You have already added this item in cart");
        return;
        }
    }
let cartBoxContent = `
             <img src="${productImg}" alt="equipment_image" class="cart-img">
             <div class="detail-box">
             <div class="cart-product-title">${title}</div>
             <div class="cart-price">${money}</div>
             <input type="number" value="1" class="cart-quantity">
             </div>
             <!-- remove cart -->
             <i class='bx bxs-trash-alt cart-remove'></i>`;
 cartShopBox.innerHTML = cartBoxContent
 cartItems.append(cartShopBox)
 cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener("click", removeCartItem);
 cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener("change", quantityChanged);
} 


// update total 
function updatetotal(){
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;
    for(let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName("cart-price")[0];
        let quantityElement  = cartBox.getElementsByClassName("cart-quantity")[0];
        let price = parseFloat(priceElement.innerText.replace("₹", ""))
        let quantity = quantityElement.value;
        total = total + price * quantity;
    }
        // if price contains some decimal value
        total = Math.round(total *100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = "₹" + total;
    
}