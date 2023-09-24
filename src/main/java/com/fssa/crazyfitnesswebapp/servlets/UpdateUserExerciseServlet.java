package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fssa.crazyfitness.model.AssignExercise;
import com.fssa.crazyfitness.model.Exercise;
import com.fssa.crazyfitness.model.User;
import com.fssa.crazyfitness.model.UserExercise;
import com.fssa.crazyfitness.model.UserExerciseStatus;
import com.fssa.crazyfitness.services.ExerciseService;
import com.fssa.crazyfitness.services.UserExerciseService;
import com.fssa.crazyfitness.services.UserService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class UpdateUserExerciseServlet
 */
@WebServlet("/UpdateUserExerciseServlet")
public class UpdateUserExerciseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String status = request.getParameter("status");
		int id = Integer.parseInt(request.getParameter("id"));
		PrintWriter out = response.getWriter();
		UserExerciseService userExerciseService = new UserExerciseService();

		if (status.contains("PLANNED")) {
			try {
				UserExerciseStatus exerciseStatus = UserExerciseStatus.COMPLETED;
				UserExercise userExercise = new UserExercise(id, exerciseStatus);
				userExerciseService.updateUserExercise(userExercise);
                response.sendRedirect(request.getContextPath()+ "/GetAllUserExerciseServlet");
			} catch (ServiceException e) {
				e.printStackTrace();
				out.println("<script type=\"text/javascript\">");
				out.println("alert('" + e.getMessage() + "');");
				out.println("setTimeout(function() { window.location.href = '" + request.getContextPath()
						+ "/GetAllUserExerciseServlet'; }, 1000);"); // Delay for 1 second (1000 milliseconds)
				out.println("</script>");
			}
		} else {
				out.println("<script type=\"text/javascript\">");
				out.println("alert('You Have already Completed your assigned exercise');");
				out.println("setTimeout(function() { window.location.href = '" + request.getContextPath()
						+ "/GetAllUserExerciseServlet'; }, 500);"); // Delay for 1 second (1000 milliseconds)
				out.println("</script>");


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
