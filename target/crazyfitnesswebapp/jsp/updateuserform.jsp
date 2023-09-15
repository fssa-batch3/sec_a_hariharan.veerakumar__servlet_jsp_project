<!DOCTYPE html>
<%@ page import="com.fssa.crazyfitness.model.*"%>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Update User</title>
<style>
body {
	font-family: Arial, sans-serif;
	background-color: #f4f4f4;
	text-align: center;
}

.container {
	margin: 50px auto;
	width: 300px;
	padding: 20px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

input[type="text"], input[type="url"], input[type="number"], input[type="password"], textarea {
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-sizing: border-box;
}

button {
	background-color: #007bff;
	color: #fff;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
}

button:hover {
	background-color: #0056b3;
}

.delete-button {
	background-color: #FF0000;
	color: #FFFFFF;
}

.delete-button:hover {
	background-color: #FFFFFF;
	color: #FF0000;
}


</style>
</head>
<body>
	<div class="container">
		<h2>Edit User</h2>
		<form action="UpdateUserServlet" method="post">

			<%
			User user = (User) request.getAttribute("editUser");
			%>
			<label for="firstname">First name:</label>
			 <input type="text" name="fname" value="<%=user.getFname()%>" required>
			 
			<label for="lastname">Last Name:</label>
			 <input type="text" name="lname" value="<%=user.getLname()%>" required>
			 
			<label for="age">Age:</label> 
			<input type="text" name="age" value="<%=user.getAge()%>" required>
			
			<label for="email">Email:</label>
			 <input type="text" name="email" value="<%=user.getEmail()%>" required readonly>
			 
			 <label for="password">Password:</label>
			 <input type="password" name="password" value="<%=user.getPassword()%>" required readonly>
			 			 		 			
			<label for="phone">Phone:</label>
			 <input type="text" name="phone" value="<%=user.getPhone()%>" required >
			
			 <label	for="address">Address:</label>
			<textarea name="address" rows="4" required><%=user.getAddress()%></textarea>
			
          <!-- Add a hidden field to send the product id -->
			<input type="hidden" name="user_id"
				value="<%=user.getUserId()%>">

			<button type="submit">Update</button>

		</form>
	</div>


</body>
</html>
