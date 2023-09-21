<%@page import="com.fssa.crazyfitness.model.Exercise"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Exercise</title>
<!-- Bootstrap  -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
	crossorigin="anonymous">
<style>
h1 {
	margin-left: 35%;
}

#btn {
	width: 10%;
	margin-left: 90%;
	margin-top: 6%;
}
</style>
</head>
<body>
	<%
	Exercise exercise = (Exercise) request.getAttribute("ExerciseDetails");
	String errormessage = (String) request.getAttribute("errormessage");

	String name;
	String image;
	int time;
	String steps;
	String type;

	if (exercise != null) {
		name = exercise.getExerciseName();
		image = exercise.getExerciseImage();
		time = exercise.getExerciseTiming();
		steps = exercise.getExerciseSteps();
		type = exercise.getExerciseCategory();
	} else {
		name = "";
		image = "";
		steps = "";
		type = "";
	}

	if (errormessage != null && !errormessage.isEmpty()) {
		%>
		<script>
	        window.alert("<%=errormessage%>");
		</script>
	<%
	}
	%>

	<br>
	<br>
	<div class=" mb-3 form-control container">
		<form id="form"
			action="<%=request.getContextPath()%>/CreateExerciseServlet"
			method="post">

			<h1>Create Exercise</h1>

			<!-- div 1 -->
			<div>
				<label for="text" class="form-label">Name</label> <input
					id="ex_name" type="text" name="ex_name" class="form-control"
					required value="<%=name %>" />
			</div>
			<br>
			<!-- div 2 -->
			<div>
				<label for="text" class="form-label">Image</label> <input
					id="ex_img" type="text" class="form-control" name="ex_image"
					required value="<%=image %>" />
			</div>
			<br>
			<!-- div 3 -->
			<div>
				<label for="number" class="form-label">Times</label> <input
					id="ex_times" type="number" name="ex_time" min="5" max="30"
					class="form-control" required />
			</div>
			<br>
			<!-- div 4 -->
			<div>
				<label for="text" class="form-label"> Steps</label>
				<textarea class="form-control" rows="5" id="ex_steps"
					name="ex_steps" required><%=steps %></textarea>
			</div>
			<br>
			<!-- div 5 -->
			<div>
				<label for="section" class="form-label">Type </label> <select
					id="type" class="form-control" name="ex_category" required>
					<option value="<%=type %>"><%=type %></option>
					<option value="FULLBODY">FULLBODY</option>
					<option value="LOWERBODY">LOWERBODY</option>
					<option value="ABS">ABS</option>
					<option value="CHEST">CHEST</option>
					<option value="ARMS">ARMS</option>
					<option value="SHOULDER">SHOULDER</option>
					<option value="LEG">LEG</option>
				</select>
			</div>
			<br>
			<!-- Button -->
			<div class="d-grid container">
				<button class="btn btn-success" type="submit">Create</button>
			</div>
		</form>
		<!-- Back button -->
		<div class="row">
			<div class="col">
				<a href="<%=request.getContextPath()%>/jsp/home_workout.jsp"
					class="btn btn-light" id="btn"> < Back</a>
			</div>
		</div>

	</div>
</body>
</html>