package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.crazyfitness.model.Exercise;
import com.fssa.crazyfitness.services.ExerciseService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class CreateExerciseServlet
 */
@WebServlet("/CreateExerciseServlet")
public class CreateExerciseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {


		String name = request.getParameter("ex_name");
		String image = request.getParameter("ex_image");
		int time = Integer.parseInt(request.getParameter("ex_time"));
		String steps = request.getParameter("ex_steps");
		String category = request.getParameter("ex_category");

		ExerciseService exerciseService = new ExerciseService();
		Exercise exercise = new Exercise(name, image, time, steps, category);

		try {
			if (exerciseService.createExercise(exercise)) {
				RequestDispatcher dispatcher = request.getRequestDispatcher("/ExerciseCategoryServlet?category="+category);
				dispatcher.forward(request, response);
			} 

		} catch (ServiceException e) {
			e.printStackTrace();
			String[] errorMessage = e.getMessage().split(":");
            request.setAttribute("ExerciseDetails", exercise);
            if(e.getMessage().contains("Duplicate")) {
            	request.setAttribute("errormessage", "This exercise has already exists in this category");
            }else {
            	request.setAttribute("errormessage", errorMessage[1]);
            }
            RequestDispatcher dispatcher = request.getRequestDispatcher("/jsp/create_exercise.jsp");
            dispatcher.forward(request, response);
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
