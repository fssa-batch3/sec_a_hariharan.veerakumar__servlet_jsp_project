package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.crazyfitness.services.UserExerciseService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class DeleteUserExerciseServlet
 */
@WebServlet("/DeleteUserExerciseServlet")
public class DeleteUserExerciseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         int id = Integer.parseInt(request.getParameter("id"));
 		PrintWriter out = response.getWriter();
 		UserExerciseService userExerciseService = new UserExerciseService();
 		
 		try {
			userExerciseService.deleteUserExercise(id);
			out.println("<script type=\"text/javascript\">");
			out.println("alert('Your Exercise Deleted Successfully');");
			out.println("</script>");
			response.sendRedirect(request.getContextPath() + "/GetAllUserExerciseServlet");
		} catch (ServiceException e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
