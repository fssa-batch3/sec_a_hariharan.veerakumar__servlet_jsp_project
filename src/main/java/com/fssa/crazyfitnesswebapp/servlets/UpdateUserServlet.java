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
		HttpSession session = request.getSession(false);
		if (session != null) {
			PrintWriter out = response.getWriter();
			String email = (String) session.getAttribute("loggedInEmail");

			UserService userService = new UserService();

			User user = new User();
			try {
				User userobj = userService.getUserbyEmail(email);
				user = userService.getUserbyId(userobj.getUserId());
			} catch (ServiceException e) {
				out.println(e.getMessage());
				e.printStackTrace();
			}
			request.setAttribute("editUser", user);
			RequestDispatcher dispatcher = request.getRequestDispatcher("/jsp/profile_page.jsp");
			dispatcher.forward(request, response);
		} else {
			response.sendRedirect(request.getContextPath() + "/page-not-found.jsp");
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		String userid = request.getParameter("user_id");
		int id = Integer.parseInt(userid);
		String fname = request.getParameter("fname");
		String lname = request.getParameter("lname");
		int age = Integer.parseInt(request.getParameter("age"));
		String email = request.getParameter("email");
		String phone = request.getParameter("phone");
		String gender = request.getParameter("gender");

		User user = new User();
		user.setUserId(id);
		user.setFname(fname);
		user.setLname(lname);
		user.setAge(age);
		user.setGender(gender);
		user.setEmail(email);
		user.setPhone(phone);

		UserService userService = new UserService();

		try {
			userService.userUpdate(user);
			response.setContentType("text/html");
			out.println("<script type=\"text/javascript\">");
			out.println("alert('Your Credentials Successfully Updated');");
			out.println("setTimeout(function() { window.location.href = '" + request.getContextPath()
					+ "/index.jsp'; }, 200);");
			out.println("</script>");

		} catch (ServiceException e) {
			e.printStackTrace();
			String[] errorMessage = e.getMessage().split(":");
			out.println("<script type=\"text/javascript\">");
			out.println("alert('" + errorMessage[1] + "');");
			out.println("setTimeout(function() { window.location.href = '" + request.getContextPath()
					+ "/UpdateUserServlet'; }, 200);");
			out.println("</script>");

		}

	}

}
