
 const form = document.getElementById("form")
 form.addEventListener("submit", function (event) {
     event.preventDefault();

     let id = Date.now();
     let image = document.getElementById("photo").value.trim();
     let alt = document.getElementById("alter").value;
     let p_name = document.getElementById("name").value;
     let p_offer = document.getElementById("offer").value;
     let p_price = document.getElementById("price").value;
     let p_about = document.getElementById("about").value;
     

     let product_object = {
         "id": id,
         "image": image,
         "alt": alt,
         "name": p_name,
         "dis_price": p_offer,
         "price": p_price,
         "about" : p_about,
     }

   
     let array = JSON.parse(localStorage.getItem("card"));
    //  console.log(array);

       //  checking array is null or not
        if (localStorage.getItem("card") != null){
         array = JSON.parse(localStorage.getItem("card"))
         array.push(product_object);
       }
   
       localStorage.setItem("card", JSON.stringify(array));

       alert ("Successfully added")
       window.location.href = "../pages/Sales.html";
    })