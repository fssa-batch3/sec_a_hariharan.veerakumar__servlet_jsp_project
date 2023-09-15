<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ page import="java.util.*"%>
<%@ page import="com.fssa.crazyfitness.model.*"%>
<!DOCTYPE html>
<html>
<head>
<title>All Users</title>
<style>
table {
	border-collapse: collapse;
	width: 100%;
}

th, td {
	border: 1px solid black;
	padding: 8px;
	text-align: left;
}

th {
	background-color: #f2f2f2;
}
</style>
</head>
<body>
	<h1>All Registered Users</h1>
	<%
	@SuppressWarnings("unchecked")
	List<User> users = (List<User>) request.getAttribute("users");
	%>
	<table>
		<tr>
			<th>ID</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Age</th>
			<th>Email</th>
			<th>Phone</th>
			<th>Address</th>
		</tr>

		<%
		for (User user : users) {
		%>
		<tr>
			<td><%=user.getUserId()%></td>
			<td><%=user.getFname()%></td>
			<td><%=user.getLname()%></td>
			<td><%=user.getAge()%></td>
			<td><%=user.getEmail()%></td>
			<td><%=user.getPhone()%></td>
			<td><%=user.getAddress()%></td>
		</tr>

		<%
		}
		%>





	</table>
</body>
</html>
