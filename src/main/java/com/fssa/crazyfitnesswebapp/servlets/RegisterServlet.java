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

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		doPost(req, resp);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String fname = request.getParameter("fname");
		String lname = request.getParameter("lname");
		String StringAge = request.getParameter("age");
		int age = Integer.parseInt(StringAge);
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String mobile_number = request.getParameter("phone");
		String address = request.getParameter("address");
		
		
		UserService userService = new UserService();
		User user = new User(fname, lname, age, email, password, mobile_number, address);

		PrintWriter out = response.getWriter();

		try {
			if (userService.registerUser(user)) {
				RequestDispatcher dispatcher = request.getRequestDispatcher("login.jsp");
				dispatcher.forward(request, response);
			} else {
				response.sendRedirect("register.jsp");
			}
		} catch (ServiceException e) {
			e.printStackTrace();
			out.println(e.getMessage());
			String[] errorMessage = e.getMessage().split(":");
			response.sendRedirect("register.jsp?errorMessage=" + errorMessage[1]); 
		}

	}
}
