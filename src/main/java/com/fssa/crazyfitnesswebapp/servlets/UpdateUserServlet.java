package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.crazyfitness.model.User;
import com.fssa.crazyfitness.services.UserService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class UpdateUserServlet
 */
@WebServlet("/UpdateUserServlet")
public class UpdateUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		int id = Integer.parseInt(request.getParameter("id"));
		UserService userService = new UserService();
		User user = new User();
		try {
			user = userService.getUserbyId(id);
		} catch (ServiceException e) {
			out.println(e.getMessage());
			e.printStackTrace();
		}
		request.setAttribute("editUser", user);
		RequestDispatcher dispatcher = request.getRequestDispatcher("updateuserform.jsp");
		dispatcher.forward(request, response);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		String userid = request.getParameter("user_id");
		int id = Integer.parseInt(userid);
		String fname = request.getParameter("fname");
		String lname = request.getParameter("lname");
		int age = Integer.parseInt(request.getParameter("age"));
		String password =request.getParameter("password");
		String email = request.getParameter("email");
		String phone = request.getParameter("phone");
		String address = request.getParameter("address");

		User user = new User();
		user.setUserId(id);
		user.setFname(fname);
		user.setLname(lname);
		user.setAge(age);
		user.setEmail(email);
		user.setPassword(password);
		user.setPhone(phone);
		user.setAddress(address);

		UserService userService = new UserService();
		try {
			userService.userUpdate(user);
			response.setContentType("text/html");
			out.println("<script type=\"text/javascript\">");
			out.println("alert('Your Credentials Successfully Updated');");
			out.println("</script>");
			RequestDispatcher dispatcher = request.getRequestDispatcher("home.jsp");
			dispatcher.forward(request, response);
		} catch (ServiceException  e) {
			e.printStackTrace();
			out.println(e.getMessage());
		}
	

	}

}
