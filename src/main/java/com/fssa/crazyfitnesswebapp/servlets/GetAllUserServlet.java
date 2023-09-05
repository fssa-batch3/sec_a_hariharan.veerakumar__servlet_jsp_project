package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.util.List;


//import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.fssa.crazyfitness.model.User;
import com.fssa.crazyfitness.services.UserService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class GetAllUserServlet
 */
@WebServlet("/GetAllUserServlet")
public class GetAllUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		List<User> users = null;
		UserService userService = new UserService();
		try {
			users = userService.getAllUserList();
		} catch (ServiceException e) {
			e.printStackTrace();
		} 
		
//		users.add(new User("Hari","Haran",19 ,"hariharan@gmail.com", "Haripassword$10","9842356365","Tharamani, chennai"));
//		users.add(new User("Durga","lakshmi",18 ,"durgalaks@gmail.com", "Durgapassword@10","9551096952","Kovailambakam, chennai"));
//		users.add(new User("Hari","Haran",19 ,"hari@gmail.com", "Haripassword$10","9842356365","Velachery, chennai"));
//		users.add(new User("Hari","Haran",19 ,"hari@gmail.com", "Haripassword$10","9842356365","Velachery, chennai"));
//		users.add(new User("Hari","Haran",19 ,"hari@gmail.com", "Haripassword$10","9842356365","Velachery, chennai"));
//		users.add(new User("Hari","Haran",19 ,"hari@gmail.com", "Haripassword$10","9842356365","Velachery, chennai"));
//		
//		HttpSession session = request.getSession();
//		session.setAttribute("users", users);
//		RequestDispatcher dispatcher = request.getRequestDispatcher("display_all_users.jsp");
//		dispatcher.forward(request, response);
		request.setAttribute("users", users);
        request.getRequestDispatcher("display_all_users.jsp").forward(request, response);
	}

}