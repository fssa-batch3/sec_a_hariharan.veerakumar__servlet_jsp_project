package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.fssa.crazyfitness.services.UserService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;


/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	


	private static final long serialVersionUID = 1L;
	
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		super.doPost(req, resp);
	}
   
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		UserService userService = new UserService();

		
		PrintWriter out = response.getWriter();
		
		try {
			if(userService.login(email, password)) {
				HttpSession session = request.getSession();
				session.setAttribute("loggedInEmail", email);
				RequestDispatcher dispatcher = request.getRequestDispatcher("home.jsp");
				dispatcher.forward(request, response);
			}	
		} catch (ServiceException e) {
			e.printStackTrace();
			out.println(e.getMessage());
			String[] errorMessage = e.getMessage().split(":");
			response.sendRedirect("login.jsp?errorMessage=" + errorMessage[1]);
			
		}

		
	}

}