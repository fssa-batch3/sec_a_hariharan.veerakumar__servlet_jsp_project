package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fssa.crazyfitness.model.User;
import com.fssa.crazyfitness.model.UserExercise;
import com.fssa.crazyfitness.model.UserExerciseStatus;
import com.fssa.crazyfitness.services.UserExerciseService;
import com.fssa.crazyfitness.services.UserService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class AssignUserExerciseServlet
 */
@WebServlet("/AssignUserExerciseServlet")
public class AssignUserExerciseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
         int exercise_id = Integer.parseInt(request.getParameter("id"));
         HttpSession session = request.getSession(false);
         String user_email =  (String) session.getAttribute("loggedInEmail");
         UserService userService = new UserService();
         UserExerciseService userExerciseService = new UserExerciseService();
         User user = new User();

 		UserExerciseStatus status = UserExerciseStatus.PLANNED;
 		LocalDate today = LocalDate.now(); 
         try {
			user = userService.getUserbyEmail(user_email);
			int user_id = user.getUserId();	
	         UserExercise userExercise =  new UserExercise(user_id,exercise_id,today,status); 
			if(userExerciseService.createUserExercise(userExercise)) {
				response.sendRedirect(request.getContextPath() + "/GetAllUserExerciseServlet");
			}
		} catch (ServiceException e) {
            e.printStackTrace();
           String[] errorMessage = e.getMessage().split(":");
         // Send JavaScript code to display an alert
         out.println("<script type=\"text/javascript\">");
         if(e.getMessage().contains("Duplicate")) {
        	 out.println("alert('You have already assigned this exercise for today ');");
         }else {
             out.println("alert('" +errorMessage[1]  + "');");
         }
         out.println("setTimeout(function() { window.location.href = '" + request.getContextPath() + "/jsp/home_workout.jsp'; }, 500);"); // Delay for 1 second (1000 milliseconds)
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
