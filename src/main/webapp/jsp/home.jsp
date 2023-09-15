<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home Page</title>
</head>
<body>
<h1>Welcome to Crazyfitness Web App</h1>

<%
	String loggedInEmail = (String) session.getAttribute("loggedInEmail");
	int loggedUserId = (int) session.getAttribute("userid");
	if(loggedInEmail == null) {
		response.sendRedirect("login.jsp");
	}
	
%>

<p>Logged In user: <%=loggedInEmail%> </p>
<a href="GetAllUserServlet">Get all Users</a><br><br>
<a href="LogoutServlet">logout</a><br><br>
<a href="GetAllProductsServlet">Get all Products</a><br><br>
<a href="UpdateUserServlet?id=<%=loggedUserId %>">Update User</a>

</body>
</html>