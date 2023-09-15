<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>

<meta charset="ISO-8859-1">
<title>Crazy Fitness</title>
  <!-- Bootstrap  -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
 <!-- Notify -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/suryaumapathy2812/notify__js/notify.css">
  <!-- password eye -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
<style>
 body {
      background-image: url(../assets/images/sign_up_backimage.jpg);
      background-repeat: no-repeat;
      background-size: 100vw 100vh;
      color: rgb(224, 172, 105);
    }

    input:valid {
      border: 1px solid green;

    }

    select:valid {
      border: 1px solid green;

    }

    input:invalid {
      border: 1px solid red;

    }

    select:invalid {
      border: 1px solid red;

    }

    .div-1 {
      /* background-color: white; */
      border-radius: 20px;
      width: 35%;
      margin-left: 12%;
      margin-top: 5%;
    }

    .div-1 h2 {
      font-family: monospace;
      font-size: 170%;
      padding-left: 35%;
      padding-top: 7%;
      color: black;
    }

    .form-label {
      margin-top: 17%;
      margin-left: 5%;
      font-size: 120%;
      font-family: sans-serif;
    }

    .form-control {
      border: 3px solid rgb(224, 172, 105);

    }

    .form-control:hover {
      background-color: rgb(224, 172, 105);
      border: 3px solid black;
    }

    .mid {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding-top: 15%;
      justify-content: space-between;
    }

    .mid a {
      font-size: 120%;
    }

    .mid a:hover {
      color: #fff;
    }

    .btn {
      width: 50%;
      height: 40px;
      margin-left: 25%;
      margin-top: 15%;
      font-size: 90%;
      color: rgb(224, 172, 105);
      cursor: pointer;
      background-color: black;
      border: 2px solid rgb(224, 172, 105);
      border-radius: 5px;
      transition: transform 0.1s;
    }

    .btn a {
      text-decoration: none;
      color: rgb(224, 172, 105);
    }

    a {
      text-decoration: none;
      color: black;
    }

    .btn:hover {
      transform: scale(1.1);
      font-weight: bold;
      background-color: white;
      color: rgb(224, 172, 105);
    }

    .icon_div {
      position: relative;
    }

    #togglePassword {
      position: absolute;
      right: 5%;
      bottom: 6.5%;
      cursor: pointer;
      z-index: 12;

    }
</style>
</head>

<body>

<%
    String errorMessage = request.getParameter("errorMessage");
    if (errorMessage != null && !errorMessage.isEmpty()) {
%>
    <script>
        // Display an alert with the error message
        alert("<%= errorMessage %>");
    </script>
<%
    }
%>
<form id="form" action="<%=request.getContextPath()%>/login" method="post">
    <div class="mb-3 div-1 container form-control">
      <h2>Log In</h2>
      <!-- Email -->
      <div>
        <label for="email" class="form-label">Email address:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your E-mail" required
          title="Enter your email properly" name="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" value="hariharan.veerakumar@fssa.freshworks.com"  />
      </div>
      <!-- password -->
      <div class="icon_div">
        <label for="password" class="form-label">Password:</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your Password" required
           value="HariPassword@10" name="password" title="password must be in 8 characters" />
        <i class="fa fa-eye" id="togglePassword"></i>
      </div>
      <!-- middle -->
      <div class=" mid">
        <a href="#">Forgot Password?</a>

      </div>
      <!-- button -->
      <div class="d-grid d-md-block">
        <button class="btn" type="submit">Log in</button>
      </div>
      <!-- back button -->
      <a href="<%=request.getContextPath()%>/jsp/sign_in.jsp" class="btn">Back</a>
    </div>


  </form>


		 <script src="https://cdn.jsdelivr.net/gh/suryaumapathy2812/notify__js/notify.js"></script>
		   <script src="./../assets/js/password_visible.js"></script>
</body>
</html>