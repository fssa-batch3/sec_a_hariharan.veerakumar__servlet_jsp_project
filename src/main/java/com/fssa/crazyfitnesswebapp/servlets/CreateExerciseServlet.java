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

		PrintWriter out = response.getWriter();
		String name = request.getParameter("ex_name");
		String image = request.getParameter("ex_image");
		int time = Integer.parseInt(request.getParameter("ex_time"));
		String steps = request.getParameter("ex_steps");
		String category = request.getParameter("ex_category");

		ExerciseService exerciseService = new ExerciseService();
		Exercise exercise = new Exercise(name, image, time, steps, category);

		try {
			if (exerciseService.createExercise(exercise)) {
				RequestDispatcher dispatcher = request.getRequestDispatcher("/jsp/home_workout.jsp");
				dispatcher.forward(request, response);
			} else {
				out.println("Exercise is not added");
				response.sendRedirect("jsp/create_exercise.jsp");
			}

		} catch (ServiceException e) {
			e.printStackTrace();
			out.println(e.getMessage());

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
