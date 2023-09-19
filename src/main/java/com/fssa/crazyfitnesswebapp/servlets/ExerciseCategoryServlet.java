package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
 * Servlet implementation class ExerciseCategoryServlet
 */
@WebServlet("/ExerciseCategoryServlet")
public class ExerciseCategoryServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	

		String Category = request.getParameter("category");

		ExerciseService exerciseService = new ExerciseService();
		List<Exercise> exercises = null;
		List<Exercise> categoryExercise = new ArrayList<>(); // Initialize an empty list

		try {
		    exercises = exerciseService.getAllExerciseList();
		    
		    for (Exercise exercise : exercises) {
		        if (exercise.getExerciseCategory().equalsIgnoreCase(Category)) {
		            // Check if the exercise's category matches the desired category
		            categoryExercise.add(exercise); // Add the matching exercise to the categoryExercise list
		        
		        }
		    }
		    
    	    request.setAttribute("category", Category);
		    request.setAttribute("categorylist", categoryExercise);
		    RequestDispatcher dispatcher = request.getRequestDispatcher("/jsp/exercises.jsp");
		    dispatcher.forward(request, response);
		} catch (ServiceException e) {
		    e.printStackTrace();
		}
	}

}
