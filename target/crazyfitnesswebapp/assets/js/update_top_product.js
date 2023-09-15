let array = JSON.parse(localStorage.getItem("top_card"))


// getting the id in the url
const url = window.location.search;
const url_params = new URLSearchParams(url);
const get_id = url_params.get("id");


let prod_obj = array.find(function (product) {
    let check_id = product["id"]
    if (get_id == check_id) {
        return true;
    }

})
console.log(prod_obj);

let imageurl = document.getElementById("photo");
let alt = document.getElementById("alter");
let name = document.getElementById("name");
let offer = document.getElementById("offer");
let price = document.getElementById("price");
let about = document.getElementById("about");
let section = document.getElementById("section");

imageurl.value = prod_obj["image"];
alt.value = prod_obj["alt"];
name.value = prod_obj["name"];
offer.value = prod_obj["dis_price"];
price.value = prod_obj["price"];
about.value = prod_obj["about"];
section.value = prod_obj["section"];

// For edit
let edit = document.getElementById("edit_form");
edit.addEventListener("submit", function (event) {
    event.preventDefault();

    let prouduct_image = document.getElementById("photo").value;
    let product_alt = document.getElementById("alter").value;
    let product_name = document.getElementById("name").value;
    let product_offer = document.getElementById("offer").value;
    let product_price = document.getElementById("price").value;
    let product_about = document.getElementById("about").value;
    let product_section = document.getElementById("section").value;


    let product_object = {
        image: prouduct_image,
        alt: product_alt,
        name: product_name,
        dis_price: product_offer,
        price: product_price,
        about: product_about,
        section: product_section
    };
  

    updateProduct(array,prod_obj,product_object)

    localStorage.setItem("top_card", JSON.stringify(array))

    alert("Successfully changed")

    window.location.href = "../pages/outfit.html";

})

function updateProduct(ar, obj_1, obj_2) {
    let checked_obj = Object.assign(obj_1, obj_2);
   
    let index = ar.indexOf(obj_1);

    ar[index] = checked_obj;
}

// For delete
let prod_delete = document.getElementById("delete")
prod_delete.addEventListener("click" , function(event){
event.preventDefault();

let Index = array.indexOf(prod_obj)

let msg = confirm("Are you sure want to delete this product")
if (msg !== true) {
    return
}
else {
    array.splice(Index, 1)
    // console.log(array);
    localStorage.setItem("top_card", JSON.stringify(array))
    window.location.href = "../pages/outfit.html";
}
})