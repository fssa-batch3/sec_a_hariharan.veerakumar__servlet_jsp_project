<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register Page</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f3f3f3;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login-container {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
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

  .btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: #0056b3;
  }
  .container {
	display: flex;
	flex-direction: column;
		text-align: center;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
</head>
<body>
<div class="container">
	<%
		String errorMessage = request.getParameter("errorMessage");
		if (errorMessage != null) {
			out.println("<p>" + errorMessage + "</p>");
		}
		%>
		<br>
<div class="login-container">
    <h2>Register </h2>
    <form action="register" method="post">
      <input type="text" class="input-field" name="fname" placeholder="First Name" autofocus required>
       <input type="text" class="input-field" name="lname" placeholder="Last Name" required>
       <input type="number" class="input-field" name="age" placeholder="Age" required> 
      <input type="text" class="input-field" name="email" placeholder="Email" required>
      <input type="password" class="input-field" name="password" placeholder="Password" required>
       <input type="text" class="input-field" name="phone" placeholder="Mobile Number" required>
        <input type="text" class="input-field" name="address" placeholder="Address" required>
        
      <button type="submit" class="btn">Register</button>
    </form>
  </div>
  </div>
</body>
</html>