let product_card = JSON.parse(localStorage.getItem("card"))
        function urlParams(ar,ph,na,desc,pr) {
            let url = window.location.search;
            let urlParams = new URLSearchParams(url);
            let get_id = urlParams.get("id")

            let product_details = ar.find(function (details) {
                let check_id = details["id"];
                if (get_id == check_id) {
                    return true;
                }
            })
            
        ph.setAttribute("src", product_details["image"])
        na.innerText = product_details["name"]
        desc.innerText = product_details["about"]
        pr.innerText = product_details["price"]
        }

        
        let photo = document.getElementById("avatar");
        let name = document.getElementById("username");
        let description = document.getElementById("description");
        let price = document.getElementById("price");
        // calling the function
        urlParams(product_card,photo,name,description,price)

