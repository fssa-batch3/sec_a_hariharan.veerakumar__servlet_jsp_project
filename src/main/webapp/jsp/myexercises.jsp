<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>My exercises</title>
<!-- BootStrap -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
	crossorigin="anonymous">
<style>
body {
	font-family: Arial, sans-serif;
}

table {
	width: 100%;
	border-collapse: collapse;
	border: 2px solid #00FFFF;
}

th, td {
	border: 2px solid #00FFFF;
	padding: 8px;
	text-align: left;
}

th {
	background-color: black;
	color: white;
	border: 2px solid #00FFFF;
}

tr {
	border: 2px solid #00FFFF;
	background-color: black; /* Set aqua background for all rows */
}

.button {
	background-color: #008CBA;
	border: none;
	color: white;
	padding: 6px 12px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 14px;
	margin: 2px 2px;
	cursor: pointer;
	border-radius: 5px;
}

.button.completed {
	background-color: #ec971f;
}

.button.delete {
	background-color: #f44336;
}
</style>
</head>
<body>
	<jsp:include page="/jsp/header.jsp"></jsp:include>
	<br />
	<center><h1>My Exercises</h1></center>
	<hr />
	<br />
	<table class="container">
		<thead>
			<tr style="border: 2px solid #00FFFF;">
				<th>S.No</th>
				<th>Date</th>
				<th>Exercise Name</th>
				<th>Reps</th>
				<th>Actions</th>
			</tr>

		</thead>

		<tbody>
			<c:forEach var="exercise" items="${assignedExercises}"
				varStatus="loop">
				<tr>
					<td>${loop.index + 1}</td>
					<td>${exercise.exerciseDate}</td>
					<td>${exercise.exerciseName}</td>
					<td>${exercise.exerciseTimes}</td>

					<td><a href="#" class="button">View Exercise</a> 
					<a href="#"
						class="button completed">${exercise.status}</a> 
						<a href="#"
						class="button delete">Delete</a></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>