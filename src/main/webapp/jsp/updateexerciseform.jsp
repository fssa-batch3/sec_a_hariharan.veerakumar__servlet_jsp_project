<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="com.fssa.crazyfitness.model.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Update Exercise</title>
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
        .delete{
        display:flex;
        margin-top:2%;
        font-family; sans-serif;	

        }
        a{
        margin-left:20%;
        }
    </style>
</head>
<body>

	<%
	Exercise exercise = (Exercise) request.getAttribute("exercise_details");
	String errormessage = (String) request.getAttribute("errormessage");
	Exercise exercises = (Exercise) request.getAttribute("editExercise");

	String name;
	String image;
	int time;
	String steps;
	String type;
	int id;

	if (exercise != null) {
		name = exercise.getExerciseName();
		image = exercise.getExerciseImage();
		time = exercise.getExerciseTiming();
		steps = exercise.getExerciseSteps();
		type = exercise.getExerciseCategory();
		id = exercise.getExerciseId();
	} else {
		name = exercises.getExerciseName();
		image = exercises.getExerciseImage();
		time = exercises.getExerciseTiming();
		steps = exercises.getExerciseSteps();
		type = exercises.getExerciseCategory();
		id = exercises.getExerciseId();
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
    <div class=" mb-3 form-control container">
        <form id="form" action="<%=request.getContextPath() %>/UpdateExerciseServlet" method="post">

            <h1>Update Exercise</h1>

            <!-- div 1 -->
            <div>
                <label for="text" class="form-label">Name</label>
                <input id="ex_name" type="text" name="ex_name" value="<%=name %>" class="form-control" required />
            </div>
            <br>
            <!-- div 2 -->
            <div>
                <label for="text" class="form-label">Image</label>
                <input id="ex_img" type="text" class="form-control"
                    name="ex_image" value="<%=image %>" required />
            </div>
            <br>
            <!-- div 3 -->
            <div>
                <label for="number" class="form-label">Times</label>
                <input id="ex_times" type="number" name="ex_time" min = "5" max= "30"
                class="form-control" value="<%=time %>"  required />
            </div>
            <br>
            <!-- div 4 -->
            <div>
                <label for="text" class="form-label"> Steps</label>
                <textarea class="form-control" rows="5" id="ex_steps"  name="ex_steps" required><%=steps %></textarea>
            </div>
            <br>
            <!-- div 5 -->
            <div>
                <label for="section" class="form-label">Type </label>
                <select id="type" class="form-control" name="ex_category"  required>
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
            <input type="hidden" name="id" value="<%=id%>"> 
            <br>
            <!-- Button -->
            <div class="d-grid container">
                <button class="btn btn-info" type="submit">Edit</button>
            </div>
        </form>
        <br>
        <div class="container delete">
        <h3> Do you want to delete this exercise ? </h3>
        <br>
        <a href="<%=request.getContextPath() %>/DeleteExerciseServlet?id=<%=id %>"><button class="btn btn-danger"> Delete </button></a>
         </div>
        <!-- Back button -->
        <div class="row">
            <div class="col">
                <a href="<%=request.getContextPath() %>/jsp/home_workout.jsp" class="btn btn-dark" id="btn">
                    < Back</a>
            </div>
        </div>

    </div>
</body>
</html>