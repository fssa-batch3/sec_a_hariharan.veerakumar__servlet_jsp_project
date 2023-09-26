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
.button.planned {
	background-color: #ec971f;	
}
.button.completed {
background-color: #5cb85c;	
}

.button.delete {
	background-color: #f44336;
}
table{
     display:none;
}
</style>
</head>
<body>
	<jsp:include page="/jsp/header.jsp"></jsp:include>
	<br />
	<center><h1>My Exercises</h1></center>
	<hr />
<br>

	<c:if test="${not empty todayExercises}">
	<h3>Today's Exercises</h3>
    <table class="container">
        <!-- Table headers -->
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
            <c:forEach var="exercise" items="${todayExercises}" varStatus="loop">
                <!-- Table rows for today's exercises -->
                <tr >
					<td>${loop.index + 1}</td>
					<td>${exercise.exerciseDate}</td>
					<td>${exercise.exerciseName}</td>
					<td>${exercise.exerciseTimes}</td>

					<td><a href="<%=request.getContextPath() %>/ViewExerciseServlet?id=${exercise.exerciseId}" class="button">View Exercise</a> 
					<a href="<%=request.getContextPath() %>/UpdateUserExerciseServlet?status=${exercise.status}&id=${exercise.userExerciseId}"
						class="button ${exercise.status == 'COMPLETED' ? 'completed' : 'planned'}">${exercise.status}</a> 
						<a href="<%=request.getContextPath() %>/DeleteUserExerciseServlet?id=${exercise.userExerciseId}"
						class="button delete">Delete</a></td>
				</tr>
            </c:forEach>
        </tbody>
    </table>
</c:if>
	
	<br>
	<br>
	<c:if test="${not empty previousExercise}">
    <table class="container">
    	<h3>Previous Exercises</h3>
        <!-- Table headers -->
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
            <c:forEach var="exercise" items="${previousExercise}" varStatus="loop">
                <!-- Table rows for today's exercises -->
                <tr >
					<td>${loop.index + 1}</td>
					<td>${exercise.exerciseDate}</td>
					<td>${exercise.exerciseName}</td>
					<td>${exercise.exerciseTimes}</td>

					<td><a href="<%=request.getContextPath() %>/ViewExerciseServlet?id=${exercise.exerciseId}" class="button">View Exercise</a> 
					<a href="<%=request.getContextPath() %>/UpdateUserExerciseServlet?status=${exercise.status}&id=${exercise.userExerciseId}"
						class="button ${exercise.status == 'COMPLETED' ? 'completed' : 'planned'}">${exercise.status}</a> 
						<a href="<%=request.getContextPath() %>/DeleteUserExerciseServlet?id=${exercise.userExerciseId}"
						class="button delete">Delete</a></td>
				</tr>
            </c:forEach>
        </tbody>
    </table>
</c:if>
</body>
</html>