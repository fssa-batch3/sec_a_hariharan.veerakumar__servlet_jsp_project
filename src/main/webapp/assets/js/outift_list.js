const top_outfit = JSON.parse(localStorage.getItem("top_card"));
const admin_email = JSON.parse(localStorage.getItem("details"));


// For admin
  function productList(ar, selector) {
    let top_card_div;
    let image;
    let top_name;
    let rupees;
    let buy_a;
    let cart_a;
    let crud_div;
    let update_a;


    // old array
    for (let i = 0; i < ar.length; i++) {
      top_card_div = document.createElement("div")
      top_card_div.setAttribute("class", "sale-box")

      image = document.createElement("img")
      image.setAttribute("src", ar[i]["image"])
      image.setAttribute("alt", ar[i]["alt"])
      image.setAttribute("class", "product-image")
      top_card_div.append(image)

      top_name = document.createElement("p")
      top_name.setAttribute("class", "name")
      top_name.innerText = ar[i]["name"]
      top_card_div.append(top_name)

      rupees = document.createElement("pre")
      rupees.setAttribute("class", "price")
      rupees.innerText = ar[i]["price"];
      top_card_div.append(rupees)


      buy_a = document.createElement("a")
      buy_a.setAttribute("href",  "../pages/details_outfit.html?id=" + ar[i]["id"])
      buy_a.setAttribute("class", "btn-1")
      buy_a.innerText = "Buy now"
      top_card_div.append(buy_a)

      cart_a = document.createElement("a")
      cart_a.setAttribute("class", "btn-2 add-cart")
      cart_a.setAttribute("id", "cart")
      cart_a.innerText = "Add to cart"
      top_card_div.append(cart_a)

      crud_div = document.createElement("div")
      crud_div.setAttribute("class" , "crud_features")
      top_card_div.append(crud_div)
    
      update_a = document.createElement("a")
      update_a.setAttribute("href","../pages/outfit_top_upload.html?id=" + ar[i]["id"])
      update_a.setAttribute("id" , "update")
      update_a.innerText = "Edit"
      crud_div.append(update_a)
    
      document.querySelector(selector).append(top_card_div);
    }

  }

  // For user
  function productUserList(ar, selector) {
    let top_card_div;
    let image;
    let top_name;
    let rupees;
    let buy_a;
    let cart_a;
    let crud_div;


    // old array
    for (let i = 0; i < ar.length; i++) {
      top_card_div = document.createElement("div")
      top_card_div.setAttribute("class", "sale-box")

      image = document.createElement("img")
      image.setAttribute("src", ar[i]["image"])
      image.setAttribute("alt", ar[i]["alt"])
      image.setAttribute("class", "product-image")
      top_card_div.append(image)

      top_name = document.createElement("p")
      top_name.setAttribute("class", "name")
      top_name.innerText = ar[i]["name"]
      top_card_div.append(top_name)

      rupees = document.createElement("pre")
      rupees.setAttribute("class", "price")
      rupees.innerText = ar[i]["price"];
      top_card_div.append(rupees)

      buy_a = document.createElement("a")
      buy_a.setAttribute("href",  "../pages/details_outfit.html?id=" + ar[i]["id"])
      buy_a.setAttribute("class", "btn-1")
      buy_a.innerText = "Buy now"
      top_card_div.append(buy_a)

      cart_a = document.createElement("a")
      cart_a.setAttribute("class", "btn-2 add-cart")
      cart_a.setAttribute("id", "cart")
      cart_a.innerText = "Add to cart"
      top_card_div.append(cart_a)

      crud_div = document.createElement("div")
      crud_div.setAttribute("class" , "crud_features")
      top_card_div.append(crud_div)
        
      document.querySelector(selector).append(top_card_div);
    }
  }


  const create_top_card = [];
  // filter function
  function productAppend(type) {
    const productsection = top_outfit.filter((h) => h.section == type);
    return productsection;
  }
// filtering top product
  for (let i = 0; i < productAppend("top").length; i++) {
    create_top_card.push(productAppend("top")[i]);

  }
  if(admin_email == "hari@gmail.com"){
    productList(create_top_card, ".whole-div-1");
  }
  else{
    productUserList(create_top_card, ".whole-div-1");
  }

  //filtering  bottom card
  let bottom_card_div;
  let bottom_name;

const create_bottom_card = [];
for(let i = 0; i < productAppend("bottom").length;i++){
 create_bottom_card.push(productAppend("bottom")[i]);
}
  if(admin_email == "hari@gmail.com"){
    productList(create_bottom_card,".whole-div-2");

  }
  else{
    productUserList(create_bottom_card, ".whole-div-2");
  }

  //filtering shoes card
  let shoe_card_div;
  let shoe_name;

    const create_shoe_card = [];

  for(let i = 0; i < productAppend("shoe").length;i++){
  create_shoe_card.push(productAppend("shoe")[i]);
  }
  

  if(admin_email == "hari@gmail.com"){
    productList(create_shoe_card,".whole-div-3");
    let create_a = document.createElement("a");
    create_a.setAttribute("href", "../pages/outfit_top.html");
  
    let create_btn = document.createElement("button");
    create_btn.setAttribute("class", "cr_btn btn btn-success");
    create_btn.innerText= "+ Add product";
    create_a.append(create_btn);
  
    document.querySelector(".row").append(create_a);
  }
  else{
    productUserList(create_shoe_card, ".whole-div-3");
  }

  
