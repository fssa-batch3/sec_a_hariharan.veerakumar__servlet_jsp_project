<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.*"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Exercise</title>
<!-- Bootstrap  -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
	crossorigin="anonymous">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/assets/css/footer.css" />
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/assets/css/header.css" />
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/assets/css/mvp_content.css" />
</head>
<body>
	<jsp:include page="../jsp/header.jsp"></jsp:include>
	<br />
	<!-- searchbar -->
	<div class="search">
		<input type="text" class="input" placeholder="Search..."
			id="search_input">

	</div>
	<!-- section -->
	<section class="sec-1 container">
		<%
		String category = (String) request.getAttribute("category");
		%>
		<h1><%=category%></h1>

		<!-- back to top button -->
		<div class="div_t-btn">

			<button class="t-btn" onclick="topFunction()" id="myBtn">
				<div class="text">
					<span>Back</span> <span>to</span> <span>top</span>
				</div>
				<div class="clone">
					<span>Back</span> <span>to</span> <span>top</span>
				</div>
				<svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
					fill="none" viewBox="0 0 24 24" stroke="currentColor"
					stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
						d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
			</button>

		</div>

		<div class="flex-container">
			<!--  Card creation -->
			<c:forEach var="exercise" items="${categorylist}">
				<div class="div-1">
					<div class="left">
						<h2>
							<c:out value='${exercise.exerciseName}' />
						</h2>
						<img src="<c:out value='${exercise.exerciseImage}' />"
							alt="Exercise image" />
						<p class="left-p">
							x
							<c:out value='${exercise.exerciseTiming}' />
						</p>
						<p>
							<c:out value='${exercise.exerciseSteps}' />
						</p>
						<%
						Boolean isAdmin = (Boolean) session.getAttribute("isAdmin");
						if (isAdmin != null && isAdmin) {
						%>
						<a
							href="<%=request.getContextPath() %>/UpdateExerciseServlet?id=<c:out value='${exercise.exerciseId}' />"
							class="btn btn-warning">Edit</a>
						<%
						} else {
						%>
						<a
							href="<%=request.getContextPath() %>/AssignUserExerciseServlet?id=<c:out value='${exercise.exerciseId}' />"
							class="btn btn-primary">Assign</a>
						<%
						}
						%>
						<br />
						<br>
					</div>
				</div>
			</c:forEach>
		</div>
	</section>
	<br>
	<br>
	<!-- back button -->
	<div class=" end_div container">
		<a href="<%=request.getContextPath()%>/jsp/home_workout.jsp"><button
				class="ba_btn">< Back</button></a>

	</div>
	<!-- footer-->
	<footer class="foot container">
		<p>CONNECT WITH ME</p>
		<div class="foot-div">
			<button class="btns">
				<img
					src="<%=request.getContextPath()%>/assets/images/Facebook_logo.png"
					alt="facebook logo" height="25" width="25" />
			</button>
			<button class="btns">
				<img
					src="<%=request.getContextPath()%>/assets/images/Twitter_logo.png"
					alt="twitter logo" height="25" width="25" />
			</button>
			<button class="btns">
				<img
					src="<%=request.getContextPath()%>/assets/images/Linked_in_logo.png"
					alt="linked in logo" height="25" width="25" />
			</button>
			<button class="btns">
				<img
					src="<%=request.getContextPath()%>/assets/images/Whatsapp_logo.png"
					alt="whatsapp logo" height="25" width="25" />
			</button>
			<button class="btns">
				<img
					src="<%=request.getContextPath()%>/assets/images/Instagram_logo.png"
					alt="Instagram logo" height="25" width="25" />
			</button>
		</div>
		<p id="foot-p">&#169; Copyrights Claimed by Hariharan</p>
	</footer>
	<!-- Java script -->
	<script
		src="<%=request.getContextPath()%>/assets/js/exercise_search.js"></script>
	<script src="<%=request.getContextPath()%>/assets/js/scroll_feature.js"></script>
</body>
</html>