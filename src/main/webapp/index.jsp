<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>

<head>

<meta charset="ISO-8859-1">
<title>CrazyFitness</title>
<!-- Bootstrap  -->
<link rel="stylesheet" href="assets/css/style.css" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
<link rel="stylesheet" href="assets/css/header.css" />
<link rel="stylesheet" href="assets/css/footer.css" />

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<style>
body {
	background-color: #11111  !important;
}
</style>
</head>

<body>
	<jsp:include page="jsp/header.jsp"></jsp:include>

	<section id="hello" class="sec-1 container">
		<div class="sec-1-img">
			<!-- hero image -->
			<img src="assets/images/hero_image.jpg" alt="bodybuilder image" />
		</div>
		<div class="sec-1-div">
			<!-- Intro -->
			<h1>FITNESS</h1>
			<p>Physical fitness is a state of health and well-being and, more
				specifically, the ability to perform aspects of sports, occupations
				and daily activities. Physical fitness is generally achieved through
				proper nutrition, moderate-vigorous physical exercise, and
				sufficient rest along with a formal recovery plan.Before the
				Industrial Revolution, fitness was defined as the capacity to carry
				out the day's activities without undue fatigue or lethargy. However,
				with automation and changes in lifestyles, physical fitness is now
				considered a measure of the body's ability to function efficiently
				and effectively in work and leisure activities, to be healthy, to
				resist hypokinetic diseases, improve immune system and to meet
				emergency situations.Fitness is defined as the quality or state of
				being fit and healthy. Around 1950, perhaps consistent with the
				Industrial Revolution and the treatise of World War II, the term
				"fitness" increased in western vernacular by a factor of ten. The
				modern definition of fitness describes either a person or machine's
				ability to perform a specific function or a holistic definition of
				human adaptability to cope with various situations. This has led to
				an interrelation of human fitness and physical attractiveness that
				has mobilized global fitness and fitness equipment industries.
				Regarding specific function, fitness is attributed to persons who
				possess significant aerobic or anaerobic ability. A well-rounded
				fitness program improves a person in all aspects of fitness compared
				to practicing only one, such as only cardio/respiratory or only
				weight training.</p>
			<h2
				style="text-align: center; padding-top: 40px; font-size: 250%; font-family: sans-serif;">
				<!-- quote -->
				<q>Train Like a Beast,Look Like a Beauty.</q>
			</h2>
			<!-- button -->
			<a href="<%=request.getContextPath()%>/jsp/sign_in.jsp"><button class="sec-1-btn">
					Home Workout &#128170</button></a> 
				<!-- 	<a href="jsp/login.jsp"><button
					class="sec-1-btn">Home Workout &#128170</button></a> -->
			<!-- vedio -->

			<img id="sec-1-gif" src="assets/images/GIF/intro.gif"
				alt="intro-gif" />
		</div>
		<br>
		<div id="manage_user_div"></div>
	</section>

	<!-- Footer -->
	<footer class="foot container">
		<p>CONNECT WITH ME</p>
		<div class="foot-div">
			<button class="btns">
				<img src="assets/images/Facebook_logo.png" alt="facebook logo"
					height="25" width="25" />
			</button>
			<button class="btns">
				<img src="assets/images/Twitter_logo.png" alt="twitter logo"
					height="25" width="25" />
			</button>
			<button class="btns">
				<img src="assets/images/Linked_in_logo.png" alt="linked in logo"
					height="25" width="25" />
			</button>
			<button class="btns">
				<img src="assets/images/Whatsapp_logo.png" alt="whatsapp logo"
					height="25" width="25" />
			</button>
			<button class="btns">
				<img src="assets/images/Instagram_logo.png" alt="instagram logo"
					height="25" width="25" />
			</button>
		</div>
		<p id="foot-p">&#169; Copyrights Claimed by Hariharan</p>
	</footer>

<script src = "assets/js/new_index.js"></script>
</body>

</html>