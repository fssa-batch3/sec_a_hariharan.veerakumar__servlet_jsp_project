<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
	crossorigin="anonymous">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
	crossorigin="anonymous"></script>
<meta charset="ISO-8859-1">
<title>Login</title>
<style>
body {
	font-family: Arial, sans-serif;
	background-color: #f3f3f3;
}

.login-container {
	background-color: #ffffff;
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	width: 400px;

	
}

.login-container h2 {
	margin-bottom: 20px;
	color: #333;
}

.input-field {
	width: 90%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	transition: border-color 0.3s;
}

.input-field:focus {
	border-color: #007bff;
}



.container {
	display: flex;
	flex-direction: column;
		text-align: center;
	margin-top: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
}
#btn {
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	padding: 10px 20px;
	cursor: pointer;
	transition: background-color 0.3s;
}

#btn:hover {
	background-color: #0056b3;
}
</style>
</head>
<body>
	
		<jsp:include page="header.jsp"></jsp:include>



		
		<div class="container">
		<%
		String errorMessage = request.getParameter("errorMessage");
		if (errorMessage != null) {
			out.println("<p>" + errorMessage + "</p>");
		}
		%>
		<div class="login-container">
			<h2>Login Page</h2>
			<form action="login" method="post">

				<label>Email: </label> <input type="email" name="email"
					placeholder="Enter email" class="input-field" autofocus> <br />

				<label>Password:</label> <input type="password" class="input-field"
					name="password" placeholder="Enter password"> <br /><br/>
				<button id="btn" type="submit" >Login</button>
			</form>
		</div>
	</div>
</body>
</html>