 const form = document.getElementById("form")
 form.addEventListener("submit", function (event) {
     event.preventDefault();

     let id = Date.now();
     let image = document.getElementById("photo").value;
     let alt = document.getElementById("alter").value;
     let p_name = document.getElementById("name").value;
     let p_offer = document.getElementById("offer").value;
     let p_price = document.getElementById("price").value;
     let p_about = document.getElementById("about").value;
     let p_section = document.getElementById("section").value;

     let product_object = {
         "id": id,
         "image": image,
         "alt": alt,
         "name": p_name,
         "dis_price": p_offer,
         "price": p_price,
         "about" : p_about,
         "section" : p_section
     };
     
     let top_array = JSON.parse(localStorage.getItem("top_card"));
     

     createProduct(product_object,top_array,"top_card")

    })
    

    function createProduct(object, arr, LS_array) {
     
          //  checking array is null or not
           if (localStorage.getItem(LS_array) != null){
               arr = JSON.parse(localStorage.getItem(LS_array))
               arr.push(object); 
          }
          localStorage.setItem(LS_array, JSON.stringify(arr));
         
   
          alert ("Successfully added")
          window.location.href = "../pages/outfit.html";
        
    }