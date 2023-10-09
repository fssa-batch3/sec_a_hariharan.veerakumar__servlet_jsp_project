package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;


import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
		String password = request.getParameter("pwsd");
		String mobile_number = request.getParameter("ph_number");

		UserService userService = new UserService();
		User user = new User(fname, lname, age, email, password, mobile_number);


		try {
			if (userService.registerUser(user)) {
				HttpSession session = request.getSession();
				session.setAttribute("loggedInEmail", email);
				response.sendRedirect(request.getContextPath() + "/jsp/home_workout.jsp");
			} else {
				response.sendRedirect(request.getContextPath() + "/jsp/sign_in.jsp");
			}
		} catch (ServiceException e) {
			e.printStackTrace();
            String[] errorMessage = e.getMessage().split(":");
            request.setAttribute("RegisterUser", user);
            request.setAttribute("errormessage", errorMessage[1]);
            RequestDispatcher dispatcher = request.getRequestDispatcher("/jsp/sign_in.jsp");
            dispatcher.forward(request, response);


		}

	}
}
