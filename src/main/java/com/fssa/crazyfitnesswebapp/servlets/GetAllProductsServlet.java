package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fssa.crazyfitness.model.Product;
import com.fssa.crazyfitness.services.ProductService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class GetAllProductsServlet
 */
@WebServlet("/GetAllProductsServlet")
public class GetAllProductsServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession(false);
		List<Product> products = null;
		ProductService productService = new ProductService();
		if (session != null) {
			String loggedInEmail = (String) session.getAttribute("loggedInEmail");
			PrintWriter out = response.getWriter();
			if (loggedInEmail == null) {
				response.sendRedirect("login.html");
			} else {
				out.println("<p>Logged In user: " + loggedInEmail + "</p>");
				out.println("<a href='LogoutServlet'>logout</a>");
				try {
					products = productService.getAllProductsList();
				} catch (ServiceException e) {
					e.printStackTrace();
				}
			}
		}
		request.setAttribute("products", products);
		RequestDispatcher dispatcher = request.getRequestDispatcher("productlist.jsp");
		dispatcher.forward(request, response);
		

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		super.doGet(req, resp);
	}

}
