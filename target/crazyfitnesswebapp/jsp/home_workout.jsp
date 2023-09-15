<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Crazy fitness</title>
  <!-- Bootstrap  -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
  <!-- Hamberger -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="./../assets/css/header.css" />
  <link rel="stylesheet" href="./../assets/css/Home_workout.css" />
  <link rel="stylesheet" href="./../assets/css/footer.css" />
 
</head>

<body>

 	<jsp:include page="../jsp/header.jsp"></jsp:include>
  <section class="sec-1">
    <h1 id="heading">Home Workout</h1>
    <!-- Part-1-->
    <a href="./full_body.html">
      <div class="workout-div">
        <h2>FULL BODY</h2>
        <img src="../assets/images/Full_body_image.jpg" alt="Full body image" />
      </div>
    </a>
    <!-- END -->
    <a href="./lower_body.html">
      <div class="workout-div">
        <h2>LOWER BODY</h2>
        <img src="../assets/images/Lower_body.jpg" alt="Lower body image" />
      </div>
    </a>
    <!-- END -->
    <img class="workout-gif" src="../assets/images/GIF/workout .gif" alt="workout gif" />
    <br />
    <br />
    <hr class="hr-line" />
    <!-- Part-2 -->
    <a href="./ABS.html">
      <div class="workout-div">
        <h2>ABS</h2>
        <img src="../assets/images/abs_image.jpg" alt="ABS image" />
      </div>
    </a>
    <!-- END -->
    <a href="./chest.html">
      <div class="workout-div">
        <h2>CHEST</h2>
        <img src="../assets/images/Chest_image.jpg" alt="Chest image" />
      </div>
    </a>
    <!-- END -->
    <a href="./arm.html">
      <div class="workout-div">
        <h2>ARMS</h2>
        <img src="../assets/images/Arms.jpg" alt="Arm image" />
      </div>
    </a>
    <!-- END -->
    <a href="./shoulder.html">
      <div class="workout-div">
        <h2>SHOULDER&BACK</h2>
        <img src="../assets/images/Backbody.jpg" alt="Backbody image" />
      </div>
    </a>
    <!-- END -->
    <a href="./leg.html">
      <div class="workout-div">
        <h2>LEG</h2>
        <img src="../assets/images/Leg.jpg" alt="leg image" />
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
  <script src="https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate"></script>
 
</body>

</html>