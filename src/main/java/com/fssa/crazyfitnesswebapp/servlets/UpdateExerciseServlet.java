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

import com.fssa.crazyfitness.model.Exercise;
import com.fssa.crazyfitness.services.ExerciseService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class UpdateExerciseServlet
 */
@WebServlet("/UpdateExerciseServlet")
public class UpdateExerciseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String idParam = request.getParameter("id");
		int id = 0;
		if (idParam != null) {
		     id = Integer.parseInt(idParam);
		} 
		ExerciseService exerciseService = new ExerciseService();
		Exercise exercise = new Exercise();
		
		try {
			exercise = exerciseService.getExerciseById(id);
		} catch (ServiceException e) {
			e.printStackTrace();
		}
		request.setAttribute("editExercise", exercise);
		RequestDispatcher dispatcher =  request.getRequestDispatcher("/jsp/updateexerciseform.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		int id = Integer.parseInt(request.getParameter("id"));
		String name = request.getParameter("ex_name");
		String image = request.getParameter("ex_image");
		int time = Integer.parseInt(request.getParameter("ex_time"));
		String steps = request.getParameter("ex_steps");
		String category = request.getParameter("ex_category");
		ExerciseService exerciseService = new ExerciseService();
		List<Exercise> exercises = null;
		List<Exercise> categoryExercise = new ArrayList<>();
		Exercise exercise = new Exercise(id,name,image,time,steps,category);
		try {
			if(exerciseService.updateExercise(exercise)) {
				exercises = exerciseService.getAllExerciseList();
				 for (Exercise ex : exercises) {
				        if (exercise.getExerciseCategory().equalsIgnoreCase(category)) {
				            // Check if the exercise's category matches the desired category
				            categoryExercise.add(ex); // Add the matching exercise to the categoryExercise list
				        
				        }
				    }
				    
		    	    request.setAttribute("category", category);
				    request.setAttribute("categorylist", categoryExercise);
					
					RequestDispatcher dispatcher = request.getRequestDispatcher("/jsp/exercises.jsp?category="+category);
					dispatcher.forward(request, response);
			}

		} catch (ServiceException e) {
			e.printStackTrace();
			out.println(e.getMessage());
		}
	}

}
