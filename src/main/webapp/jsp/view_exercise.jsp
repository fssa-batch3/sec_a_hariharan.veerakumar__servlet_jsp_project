<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercise Card</title>
    <style>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: black; /* Background color of the page (black) */
    font-family:sans-serif;
}

.exercise-card {
    background-color: #000; /* Background color of the card (black) */
    color: aqua; /* Text color (aqua) */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
    max-width: 400px;
}

h1 {
margin-bottom:20%;
font-size:40px;
    color: aqua; /* Heading color (aqua) */
}

/* Rest of the CSS remains the same */


img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}

h3 {
    color: aqua; /* Subheading color */
}

p {
    color: aqua; /* Text color */
    margin: 10px 0;
}
 
     /* back btn */
    .ba_btn {
      position: relative;
      font-family: 'Heebo', sans-serif;
      padding: 12px 40px;
      border: 0;
      background: aqua;
      color: #000;
      font-weight: 500;
      font-size: 1em;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      transition: 0.3s ease-in-out;
    }
    
    .ba_btn:hover {
      text-shadow: 0px 5px 10px #00FFFF;
      transform: scale(1.01);
      box-shadow: inset 0px 0px 10px #00FFFF;
    }
    
    .ba_btn::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100px;
      width: 50%;
      height: 100%;
      transform: rotate(80deg);
      background: #FFFFFF;
      filter: blur(10px);
      transition: 0.6s ease-in-out;
    }
    
    .ba_btn:hover::after {
      left: 100%;
    }

    .update{
      margin-left: 100%;
    }
    .add{
      margin-left: 70%;
    }   
    </style>
</head>
<body>
<div class="exercise-card">
    <h1>View Exercise</h1>
    <h2>${viewExercise.exerciseName}</h2>
    <img src="${viewExercise.exerciseImage}" alt="Exercise Image">
    <p>x ${viewExercise.exerciseTiming}</p>
    <p> ${viewExercise.exerciseSteps}</p>
<br />
	<a href="<%=request.getContextPath()%>/GetAllUserExerciseServlet"><button
				class="ba_btn">< Back</button></a>
</div>
</body>
</html>