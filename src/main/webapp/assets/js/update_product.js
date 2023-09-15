let array = JSON.parse(localStorage.getItem("card"))
// console.log(array);

// getting the id in the url
const url = window.location.search;
const url_params = new URLSearchParams(url);
const get_id = url_params.get("id");
// console.log(get_id);

// Getting the corresponding object through id
let prod_obj = array.find(function (product) {
    let check_id = product["id"]
    if (get_id == check_id) {
        return true;
    }

})
// console.log(prod_obj);

let imageurl = document.getElementById("photo");
let alt = document.getElementById("alter");
let name = document.getElementById("name");
let offer = document.getElementById("offer");
let price = document.getElementById("price");
let about = document.getElementById("about")

imageurl.value = prod_obj["image"];
alt.value = prod_obj["alt"];
name.value = prod_obj["name"];
offer.value = prod_obj["dis_price"];
price.value = prod_obj["price"];
about.value = prod_obj["about"];



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


    let product_object = {
        image: prouduct_image,
        alt: product_alt,
        name: product_name,
        dis_price: product_offer,
        price: product_price,
        about: product_about,
    };

    let checked_obj = Object.assign(prod_obj, product_object)
    console.log(checked_obj)


    let index = array.indexOf(prod_obj)
    console.log(index)

    array[index] = checked_obj;


    localStorage.setItem("card", JSON.stringify(array))
    console.log(array);

    alert("Successfully changed")

    window.location.href = "../pages/Sales.html";

})

let check = true;
let present_obj = array.find(function (product) {

    let check_id = product["id"]
    if (get_id == check_id) {

        let imageurl1 = document.getElementById("photo");
        let alt1 = document.getElementById("alter");
        let name1 = document.getElementById("name");
        let offer1 = document.getElementById("offer");
        let price1 = document.getElementById("price");
        let about1 = document.getElementById("about")

        imageurl1.value = prod_obj["image"];
        alt1.value = prod_obj["alt"];
        name1.value = prod_obj["name"];
        offer1.value = prod_obj["dis_price"];
        price1.value = prod_obj["price"];
        about1.value = prod_obj["about"];
    }
    return check;
})


// For delete
let prod_delete = document.getElementById("delete")
prod_delete.addEventListener("click", function (event) {

    let Index = array.indexOf(prod_obj)

    let msg = confirm("Are you sure want to delete this product")
    if (msg !== true) {
        return
    }
    else {
        array.splice(Index, 1)
        // console.log(array);
        localStorage.setItem("card", JSON.stringify(array))
        window.location.href = "../pages/Sales.html";
    }
})