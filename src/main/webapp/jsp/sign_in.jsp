<!DOCTYPE html>
<html lang="en">
<%@ page import="com.fssa.crazyfitness.model.User"%>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sign In</title>
<!-- Bootstrap  -->
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
<!-- Notify -->
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/gh/suryaumapathy2812/notify__js/notify.css">
<!-- password eye -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
<!-- icons -->
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
	rel='stylesheet'>

<style>
body {
	background-image: url(<%=request.getContextPath()%>/assets/images/Sign_up_background.jpg);
	background-size: 100%;
	color: aqua;
}

input:valid {
	border: 2px solid green;
}

select:valid {
	border: 2px solid green;
}

input:invalid {
	border: 2px solid red;
}

select:invalid {
	border: 2px solid red;
}

#fname {
	width: 50%;
}

#email {
	width: 50%;
}

#password {
	width: 50%;
}

#conpwd {
	width: 50%;
}

#ph_num {
	width: 50%;
}

#lname {
	width: 50%;
}

#age {
	width: 50%;
}

.container {
	margin-left: 5%;
	margin-top: 5%;
}

.btn {
	font-size: 20px;
	background: transparent;
	border: none;
	padding: 1em 1.5em;
	color: #00FFFF;
	text-transform: uppercase;
	position: relative;
	transition: .5s ease;
	cursor: pointer;
	margin-left: 20%;
	margin-top: 2%;
}

.btn::before {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	height: 2px;
	width: 0;
	background-color: #00FFFF;
	transition: .5s ease;
}

.btn:hover {
	color: #00FFFF;
	transition-delay: .5s;
}

.btn:hover::before {
	width: 100%;
}

.btn::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	height: 0;
	width: 100%;
	background-color: #000000;
	transition: .4s ease;
	z-index: -1;
}

.btn:hover::after {
	height: 100%;
	transition-delay: 0.4s;
	color: aliceblue;
}

#fr_pass {
	color: #FFFF00;
	text-decoration: none;
}

#fr_pass:hover {
	color: #00FFFF;
	text-decoration: none;
}

a {
	text-decoration: none;
}

/* back btn */
.back_btn {
	margin-top: 20px;
	margin-left: 17%;
	padding: 20px 60px;
	background-color: #000;
	border: none;
	font-size: 18px;
	position: relative;
	/* overflow: hidden; */
	transition: 500ms;
	text-decoration: none;
}

.back_btn span {
	color: #00FFFF;
	position: relative;
	transition: 500ms;
	transition-delay: 500ms;
	font-size: 16px;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: 600;
}

.back_btn:before {
	content: '';
	position: absolute;
	width: 0%;
	height: 0%;
	left: 50%;
	right: 50%;
	top: 50%;
	bottom: 50%;
	transition: 500ms;
	transition-delay: 500ms;
	background-color: #00FFFF;
	box-shadow: 0 0 10px #00FFFF, 0 0 30px #00FFFF, 0 0 50px #00FFFF;
}

.back_btn div {
	transition: 500ms;
	position: absolute;
	background-color: #00FFFF;
	box-shadow: 0 0 15px #00FFFF, 0 0 30px #00FFFF, 0 0 50px #00FFFF;
}

.back_btn .top {
	width: 15px;
	height: 2px;
	top: 0;
	left: 0;
}

.back_btn .bottom {
	width: 15px;
	height: 2px;
	bottom: 0;
	right: 0;
}

.back_btn .left {
	width: 2px;
	height: 15px;
	top: 0;
	left: 0;
}

.back_btn .right {
	width: 2px;
	height: 15px;
	bottom: 0;
	right: 0;
}

.back_btn:hover {
	color: #000;
}

.back_btn:hover span {
	color: #000;
}

.back_btn:hover:before {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

.back_btn:hover .top, .back_btn:hover .bottom {
	width: 100%;
}

.back_btn:hover .left, .back_btn:hover .right {
	height: 100%;
}

.icon_div {
	position: relative;
}

#togglePassword {
	position: absolute;
	right: 52%;
	bottom: 13%;
	cursor: pointer;
	z-index: 12;
	color: #000;
}

.card {
	width: 300px;
	height: 250px;
	margin-top: 3%;
	position: absolute;
	right: 100%;
	background-color: #080808;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
}

.card.active {
	left: 75%;
}

/*  #otp_num {
                width: 80px;
                font-size: 30px;
                margin-left: 38%;
                border-radius: 5px;
            }

            h3 {
                padding-top: 5%;
                padding-left: 5%;
            }

            #otp_button {
                border-radius: 5px;
                width: 150px;
                height: 40px;
                margin-left: 28%;
                font-size: 18px;
                color: #000;
                background-color: #abf4ef;
                font-family: sans-serif;
            }

            input {
                color: #000;
                font-weight: bold;
            }*/
</style>

</head>

<body>
<body>

	<%
	User user = (User) request.getAttribute("RegisterUser");
	String errormessage = (String) request.getAttribute("errormessage");

	String fname;
	String lname;
	int userage;
	String email;
	String password;
	String phone;
	if (user != null) {
		fname = user.getFname();
		lname = user.getLname();
		userage = user.getAge();
		email = user.getEmail();
		password = user.getPassword();
		phone = user.getPhone();
	} else {
		fname = "";
		lname = "";
		email = "";
		password = "";
		phone = "";
	}

	if (errormessage != null && !errormessage.isEmpty()) {
	%>
	<script>
        window.alert("<%=errormessage%>");
	</script>
	<%
	}
	%>

	<!-- OTP card 
        <div class="card">
            <h3>ENTER YOUR OTP :</h3>
            <br>
            <input type="tel" id="otp_num" maxlength="4" pattern="[0-9][0-9][0-9][0-9]">
            <br>
            <br>
            <button id="otp_button">Verify</button>
        </div>
        <!-- sign up form -->
	<div class="container">
		<h2>Sign Up</h2>
		<br>
		<form action="<%=request.getContextPath()%>/register" id="Form"
			method="post">
			<!-- first name -->
			<div class="form-label">
				<label for="fname">First Name :</label> <input name="fname"
					type="text" class="form-control" id="fname" required
					placeholder="Enter First Name" pattern="[a-zA-Z]{3,15}$"
					value="<%=fname%>" title="enter your first name correctly"
					maxlength="15">
			</div>
			<!-- last name -->
			<div class="form-label">
				<label for="lname">Last Name :</label> <input name="lname"
					type="text" class="form-control" id="lname" required
					placeholder="Enter Last Name" pattern="[a-zA-Z]{3,15}$"
					value="<%=lname%>" title="enter your last name correctly"
					maxlength="15">
			</div>
			<!-- age -->
			<div class="form-label">
				<label for="age">Age :</label> <input name="age" type="number"
					class="form-control" id="age" required placeholder="Enter your age"
					name="age" pattern="^[12-100]{1}$" title="enter your age correctly">
			</div>
			<!-- email -->
			<div class="form-label">
				<label for="email">Email :</label> <input type="email" name="email"
					class="form-control" id="email" required
					placeholder="use @gmail.com"
					pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
					value="<%=email%>" title="use @ gmail.com">
			</div>
			<!-- password -->
			<div class="form-label icon_div">
				<label for="pwd">Password :</label> <input type="password"
					class="form-control" id="password" required
					placeholder="Enter password" pattern="^[a-zA-Z0-9!@#$%^&*]{8,}$"
					value="<%=password%>"
					title=" password must be in 8 characters and choose strong password"
					name="pwsd"> <i class="fa fa-eye" id="togglePassword"></i>
			</div>
			<!--confirm password -->
			<div class="form-label">
				<label for="pwd">Confirm Password :</label> <input type="password"
					class="form-control" id="conpwd" required
					title=" password must be in 8 characters"
					placeholder="Enter confirm password" name="con-pswd">
			</div>
			<!-- Phone number -->
			<div class="form-label">
				<label for="ph_number">Phone number :</label> <input type="tel"
					class="form-control" id="ph_num" required value="<%=phone%>"
					title="Phone number should be withn in 10 numbers"
					placeholder="123-456-7890" name="ph_number"
					pattern="/^[6-9](?(\d{2})\)?[- ]?(\d{3})[- ]?(\d{4})$/"
					maxlength="10">
			</div>
			<!-- log in  -->
			<a href="<%=request.getContextPath()%>/pages/Log_in.html"
				id="fr_pass">Already log in?</a>
			<!-- submit -->
			<div class=" d-sm-block ">
				<button id="button" type="submit" class="btn">Sign up</button>
				<br> <br> <br>
				<!-- Back button -->
				<a class="back_btn" href="<%=request.getContextPath()%>/jsp/index.jsp">
					<span> GO BACK </span>
					<div class="top"></div>
					<div class="left"></div>
					<div class="bottom"></div>
					<div class="right"></div>
				</a>

			</div>
		</form>
	</div>


	<script
		src="https://cdn.jsdelivr.net/gh/suryaumapathy2812/notify__js/notify.js"></script>
	<script src="../assets/js/user_CRUD.js"></script>
	<!--     <script src=" https://smtpjs.com/v3/smtp.js"></script>  -->
	<script src="./../assets/js/password_visible.js"></script>
</body>

</html>
