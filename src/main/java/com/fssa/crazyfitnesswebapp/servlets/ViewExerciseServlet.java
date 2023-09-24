package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;

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
 * Servlet implementation class ViewExerciseServlet
 */
@WebServlet("/ViewExerciseServlet")
public class ViewExerciseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    ExerciseService exerciseService = new ExerciseService();
    try {
		Exercise exercise = exerciseService.getExerciseById(id);
		request.setAttribute("viewExercise", exercise);
		RequestDispatcher dispathcer = request.getRequestDispatcher("/jsp/view_exercise.jsp");
		dispathcer.forward(request, response);
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
