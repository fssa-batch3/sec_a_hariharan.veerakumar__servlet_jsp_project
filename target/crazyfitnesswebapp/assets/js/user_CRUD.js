
// for sign up
const signUp = document.getElementById("Form");
signUp.addEventListener("submit", function(event) {
	event.preventDefault();
	// Declaring variables
	//  let otp_div = document.querySelector(".card")
	let fname = document.getElementById("fname").value.trim();
	let lname = document.getElementById("lname").value.trim();
	let age = document.getElementById("age").value.trim();
	let email = document.getElementById("email").value.trim();
	let password = document.getElementById("password").value.trim();
	let conpassword = document.getElementById("conpwd").value.trim();
	let ph_num = document.getElementById("ph_num").value.trim();
	//    let otp_btn = document.getElementById("otp_button");


	// generating otp for user
	/*  let otp = "";
	  for (let i = 0; i < 4; i++) {
		  otp += Math.floor(Math.random() * 10);
	  }
	  console.log(otp);
  */

	// creating template for email
	/* let ebody = `
  <h2>Welcome to CRAZY FITNESS!</h2>
  <br>
  <b>Dear, </b>${user_name} &nbsp;${lname}
  <br>
  <b>you have registered with this email </b>${email}
  <br>
  <b>Here is your OTP: </b><strong> ${otp}</strong>
  
  <br>
  <b>All the best for the future of you! Have a great experience.</b>
  <br>
  <br>
  <br>
  <b>NOTE: Don't share your OTP **** to someone. keep it private</b>
  <br>
  <br>
  <center><b>Thank you!</b></center>
  `; */


	if (ph_num.length != 10) {
		window.alert("Please! number must be 10 digits");
	}
	if (isNaN(age) || age < 14 || age > 64) {
		Notify.error("The age must be a number between 12 and 64");
		
	}
	if (password != conpassword) {
		Notify.error("Confirm password looks not similar to Password")
	}

	signUp.submit();
	
});
/*  let sign_user_data = {
	  "id": id,
	  "user_name": user_name,
	  "user_lastname": lname,
	  "user_age": age,
	  "user_email": email.toLowerCase(),
	  "user_pass": password,
	  "user_conpwd": conpassword,
	  "user_ph_num": ph_num,
  };



  else {
	  createUser(email, ebody, otp_div, sign_user_data);
	  otp_btn.addEventListener("click", function (event) {
		  event.preventDefault();
		  let otp_number = document.getElementById("otp_num").value.trim();
		  console.log(otp_number);

		  otpVerify(otp, otp_number);

	  })
  }

);

function otpVerify(otp, otp_number) {

  if (otp == otp_number) {
	  alert("Congratulations! Successfully logged In");
	  window.location.href = "/pages/Home_workout.jsp";
  }
  else {
	  alert("Wrong OTP");
	  alert("Please try again");
	  window.location.href = "../pages/sign_in.html";

  }
}

function createUser(email, ebody, otp_div, sign_user_data) {

  try {
	  let match = false;

	  let array = [];
	  if (localStorage.getItem("usersdetails") != null) {
		  array = JSON.parse(localStorage.getItem("usersdetails"));
	  }


	  // check email is already registered or not
	  for (let i = 0; i < array.length; i++) {
		  if (array[i]["user_email"] === email) {
			  match = true;

			  break;
		  }
	  }
	  // if the email already exists throw an alert
	  if (match == true) {
		  Notify.error("The Email is already exists")
		  throw new Error("The Email is already exists")
	  }
	  // If it a new user store the data in DB 
	  else {
		  Email.send({
			  SecureToken: "9f3d28ed-743e-4102-b476-989a876d7882",
			  To: email,
			  From: "crazyfitnessweb@gmail.com",
			  Subject: "OTP Verification",
			  Body: ebody,
		  })
		  alert("Your OTP sent to your email");
		  otp_div.classList.add("active");
		  array.push(sign_user_data);
		  localStorage.setItem("usersdetails", JSON.stringify(array));
		  localStorage.setItem("details", JSON.stringify(email));

	  }

	  return true;
  }
  catch (error) {
	  console.error(error);
	  return false
  }
}*/ 

