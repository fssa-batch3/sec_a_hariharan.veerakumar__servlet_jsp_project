// for email
let current_email = JSON.parse(localStorage.getItem("details"))
//  for array
let user_about = JSON.parse(localStorage.getItem("usersdetails"))

let user_obj = user_about.find(function (user) {
    let check_email = user["user_email"]
    if (current_email === check_email) {
        return true;
    }
})
// console.log(user_obj);


let firname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let age = document.getElementById("age");
let mail = document.getElementById("email");
let ph_num = document.getElementById("ph_number");


firname.value = user_obj["user_name"];
lastname.value = user_obj["user_lastname"];
age.value = user_obj["user_age"];
mail.value = current_email;
ph_num.value = user_obj["user_ph_num"];



// For edit
let pro_info = document.getElementById("form");
pro_info.addEventListener("submit", function (event) {
    event.preventDefault();

    let user_name = document.getElementById("fname").value;
    let user_lastname = document.getElementById("lname").value;
    let user_age = document.getElementById("age").value;
    let user_email = document.getElementById("email").value;
    let user_gender = document.getElementById("gender").value;
    let user_ph_num = document.getElementById("ph_number").value;


    if (user_ph_num.length != 10) {
        alert("Please! enter 10 digits number");
        return;
    }
    if (isNaN(user_age) || user_age < 1 || user_age > 100) {
        alert("The age must be a number between 1 and 100");
        return;
    }

    let user_object = {
        user_name,
        user_lastname,
        user_age,
        user_email,
        user_gender,
        user_ph_num,
        user_address,
        per_info,
    };

    let checked_obj = Object.assign(user_obj, user_object)
    console.log(checked_obj);

    let index = user_about.indexOf(user_obj);
    // console.log(index);

    user_about[index] = checked_obj;

    localStorage.setItem("usersdetails", JSON.stringify(user_about));
    // console.log(user_about);

    Notify.success("Successfully Changed")


})
let check = true;
let present_details = user_about.find(function (user) {
    let check_email = user["user_email"]
    if (current_email === check_email) {

        let firname2 = document.getElementById("fname");
        let lastname2 = document.getElementById("lname");
        let age2 = document.getElementById("age");
        let gender2 = document.getElementById("gender");
        let mail2 = document.getElementById("email");
        let ph_num2 = document.getElementById("ph_number");
        let address2 = document.getElementById("comment");
        let per_info2 = document.getElementById("per_info");

        firname2.value = user["user_name"];
        lastname2.value = user["user_lastname"];
        age2.value = user["user_age"];
        gender2.value = user["user_gender"];
        mail2.value = current_email;
        ph_num2.value = user["user_ph_num"];
        address2.value = user["user_address"];
        per_info2.value = user["per_info"];
    }
})

// For delete
let user_delete = document.getElementById("delete");
user_delete.addEventListener("click", function (event) {
    event.preventDefault()

    let Index = user_about.indexOf(user_obj)

    let msg = confirm("Are you sure want to delete your account")
    if (msg !== true) {
        return
    }
    else {
        user_about.splice(Index, 1)

        localStorage.setItem("usersdetails", JSON.stringify(user_about))
        window.location.href = "../pages/sign_in.html";
    }
})
