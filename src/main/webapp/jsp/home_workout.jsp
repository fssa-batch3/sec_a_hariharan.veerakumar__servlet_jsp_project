<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.*"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Crazy fitness</title>
<!-- Bootstrap  -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

  <!-- Hamberger -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/header.css" />
  <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/Home_workout.css" />
  <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/footer.css" />
 
</head>

<body>
  <!-- Nav starts -->
  <nav class="navbar navbar-expand-lg" style="display: flex; justify-content: space-between">
    <div class="container-fluid">
      <div class="head-img">
        <!-- logo of website -->
        <img src="<%=request.getContextPath()%>/assets/images/logo_100_days_website.png" alt="logo" />
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse head-profile" id="navbarTogglerDemo01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="<%=request.getContextPath()%>/index.jsp">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<%=request.getContextPath()%>/jsp/home_workout.jsp"
              style="border-bottom: solid 3px #00FFFF;">WORKOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<%=request.getContextPath()%>/pages/music.html">PLAYLIST</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<%=request.getContextPath()%>/pages/Sales.html">EQ SALE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<%=request.getContextPath()%>/pages/outfit.html">OUTFIT & SHOES</a>
          </li>

    
        </ul>
      </div>
    </div>
  </nav>
  <!-- nav ends -->
  <section class="sec-1">
    <h1 id="heading">Home Workout</h1> 
    <% 
	Boolean isAdmin = (Boolean) session.getAttribute("isAdmin");
    if(isAdmin != null && isAdmin){
    %>
     <a href="<%=request.getContextPath() %>/jsp/create_exercise.jsp" class="btn  add">+ Add Exercise </a>
     <%
    }else{
     %>
     <a href="<%=request.getContextPath() %>/GetAllUserExerciseServlet" class="btn add">My Exercises </a>
     <%
    }
     %>
    <!-- Part-1-->
    <a href="<%=request.getContextPath()%>/ExerciseCategoryServlet?category=FULLBODY" >
      <div class="workout-div">
        <h2>FULL BODY</h2>
        <img src="<%=request.getContextPath()%>/assets/images/Full_body_image.jpg" alt="Full body image" />
      </div>
    </a>
    <!-- END -->	
    <a href="<%=request.getContextPath()%>/ExerciseCategoryServlet?category=LOWERBODY">
      <div class="workout-div">
        <h2>LOWER BODY</h2>
        <img src="<%=request.getContextPath()%>/assets/images/Lower_body.jpg" alt="Lower body image" />
      </div>
    </a>
    <!-- END -->
    <img class="workout-gif" src="<%=request.getContextPath()%>/assets/images/GIF/workout .gif" alt="workout gif" />
    <br />
    <br />
    <hr class="hr-line" />
    <!-- Part-2 -->
    <a href="<%=request.getContextPath()%>/ExerciseCategoryServlet?category=ABS">
      <div class="workout-div">
        <h2>ABS</h2>
        <img src="<%=request.getContextPath()%>/assets/images/abs_image.jpg" alt="ABS image" />
      </div>
    </a>
    <!-- END -->
    <a href="<%=request.getContextPath()%>/ExerciseCategoryServlet?category=CHEST">
      <div class="workout-div">
        <h2>CHEST</h2>
        <img src="<%=request.getContextPath()%>/assets/images/Chest_image.jpg" alt="Chest image" />
      </div>
    </a>
    <!-- END -->
    <a href="<%=request.getContextPath()%>/ExerciseCategoryServlet?category=ARMS">
      <div class="workout-div">
        <h2>ARMS</h2>
        <img src="<%=request.getContextPath()%>/assets/images/Arms.jpg" alt="Arm image" />
      </div>
    </a>
    <!-- END -->
    <a href="<%=request.getContextPath()%>/ExerciseCategoryServlet?category=SHOULDER">
      <div class="workout-div">
        <h2>SHOULDER&BACK</h2>
        <img src="<%=request.getContextPath()%>/assets/images/Backbody.jpg" alt="Backbody image" />
      </div>
    </a>
    <!-- END -->
    <a href="<%=request.getContextPath()%>/ExerciseCategoryServlet?category=LEG">
      <div class="workout-div">
        <h2>LEG</h2>
        <img src="<%=request.getContextPath()%>/assets/images/Leg.jpg" alt="leg image" />
      </div>
    </a>
 

 
  </section>
  <!-- footer-->
  <footer class="foot container">
    <p>CONNECT WITH ME</p>
    <div class="foot-div">
      <button class="btns">
        <img src="../assets/images/Facebook_logo.png" alt="facebook logo" height="25" width="25" />
      </button>
      <button class="btns">
        <img src="../assets/images/Twitter_logo.png" alt="twitter logo" height="25" width="25" />
      </button>
      <button class="btns">
        <img src="../assets/images/Linked_in_logo.png" alt="linked in logo" height="25" width="25" />
      </button>
      <button class="btns">
        <img src="../assets/images/Whatsapp_logo.png" alt="whatsapp logo" height="25" width="25" />
      </button>
      <button class="btns">
        <img src="../assets/images/Instagram_logo.png" alt="Instagram logo" height="25" width="25" />
      </button>
    </div>
    <p id="foot-p">&#169; Copyrights Claimed by Hariharan</p>
  </footer>
  <!-- Java script -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
 
</body>

</html>