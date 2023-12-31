<html>
<head>

<!-- Bootstrap  -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/style.css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/header.css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/footer.css" />

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>
<body>
	<nav class="navbar navbar-expand-lg "
		style="display: flex; justify-content: space-between">
	<%
	String loggedInEmail = (String) session.getAttribute("loggedInEmail");
	if (loggedInEmail == null) {
	%>
	<!-- Nav starts -->

		<div class="container">
			<div class="head-img">
				<!-- logo of website -->
				<a href="<%=request.getContextPath()%>/index.jsp"> <img
					src="<%=request.getContextPath()%>/assets/images/logo_100_days_website.png" alt="logo" style="width:350px;"/></a>
			</div>
			<br>
			<div class="collapse navbar-collapse head-profile navlinks"
				id="navbarTogglerDemo01 ">
					
					
					<a class="nav-link ba_btn" href="<%=request.getContextPath()%>/jsp/login.jsp">Login</a>
					
					
					<a class="nav-link ba_btn" href="<%=request.getContextPath()%>/jsp/sign_in.jsp">Sign Up</a>
				
				
				</div>

		</div>

	<!-- nav ends -->

	<%
	} else {
	%>
	<!-- Nav starts -->

		<div class="container-fluid">
			<div class="head-img">
				<!-- logo of website -->
				<a href="index.jsp"> <img
					src="<%=request.getContextPath()%>/assets/images/logo_100_days_website.png" alt="logo" /></a>
			</div>
			<button class="navbar-toggler" type="button"
				data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse head-profile"
				id="navbarTogglerDemo01">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item"><a class="nav-link" aria-current="page"
						href="<%=request.getContextPath()%>/pages/home.html"
						style="border-bottom: solid 3px #00FFFF;">HOME</a></li>
					<li class="nav-item"><a class="nav-link"
						href="<%=request.getContextPath()%>/pages/Home_workout.html">WORKOUT</a></li>
					<li class="nav-item"><a class="nav-link"
						href="<%=request.getContextPath()%>/pages/music.html">PLAYLIST</a></li>
					<li class="nav-item"><a class="nav-link"
						href="<%=request.getContextPath()%>/pages/Sales.html">EQ SALE</a></li>
					<li class="nav-item"><a class="nav-link"
						href="<%=request.getContextPath()%>/pages/outfit.html">OUTFIT & SHOES</a></li>
					<li class="nav-item"><a class="nav-link"
						href="<%=request.getContextPath()%>/pages/profile.html">PROFILE</a></li>

				</ul>
			</div>
		</div>
	


	<%
	}
	%>
	</nav>
	<!-- nav ends -->

</body>
</html>