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
import com.fssa.crazyfitness.services.ExerciseService;
import com.fssa.crazyfitness.services.UserExerciseService;
import com.fssa.crazyfitness.services.UserService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class GetAllUserExerciseServlet
 */
@WebServlet("/GetAllUserExerciseServlet")
public class GetAllUserExerciseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		List<UserExercise> userExercises = null;
		List<AssignExercise> assignExercises = new ArrayList<>();
		UserExerciseService userExerciseService = new UserExerciseService();
		UserService userService = new UserService();
		HttpSession session = request.getSession(false);
		String userEmail = (String) session.getAttribute("loggedInEmail");
		ExerciseService exerciseService = new ExerciseService();
        
		try {
			User user = userService.getUserbyEmail(userEmail);
			userExercises = userExerciseService.getUserExerciseByUserId(user.getUserId());
			for (UserExercise userExercise : userExercises) {
			    // Create a new AssignExercise object
			    AssignExercise assignExercise = new AssignExercise();

			    // Set common properties from UserExercise
			    assignExercise.setUserExerciseId(userExercise.getUserExerciseId());
			    assignExercise.setUserId(userExercise.getUserId());
			    assignExercise.setExerciseId(userExercise.getExerciseId());
			    assignExercise.setExerciseDate(userExercise.getExerciseDate());
			    assignExercise.setStatus(userExercise.getStatus());

			    // Retrieve exercise details (exercise name and reps) by calling getExerciseById
			    Exercise exercise = exerciseService.getExerciseById(userExercise.getExerciseId());

			    // Set exercise-specific properties
			    if (exercise != null) {
			        assignExercise.setExerciseName(exercise.getExerciseName());
			        assignExercise.setExerciseTimes(exercise.getExerciseTiming());
			    }

			    // Add the AssignExercise object to the new list
			    assignExercises.add(assignExercise);
			}
			
			request.setAttribute("assignedExercises", assignExercises);
			RequestDispatcher dispatcher = request.getRequestDispatcher("/jsp/myexercises.jsp");
			dispatcher.forward(request, response);
		} catch (ServiceException e) {
			e.printStackTrace();
			out.println("<script type=\"text/javascript\">");
			out.println("alert("+e.getMessage()+");");
			out.println("setTimeout(function() { window.location.href = '" + request.getContextPath() + "/jsp/login.jsp'; }, 1000);"); // Delay for 1 second (1000 milliseconds)
			out.println("</script>");
		}

	}

}
