package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

import com.fssa.crazyfitness.model.Product;
import com.fssa.crazyfitness.services.ProductService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class GetAllProductsJSONServlet
 */
@WebServlet("/GetAllProductsJSONServlet")
public class GetAllProductsJSONServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public GetAllProductsJSONServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// HttpSession session = request.getSession(false);
		ProductService productService = new ProductService();
		List<Product> products = null;
		try {
			products = productService.getAllProductsList();
		} catch (ServiceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// if (session != null) {
		// String loggedInEmail = (String) session.getAttribute("loggedInEmail");
		// PrintWriter out = response.getWriter();
		// if (loggedInEmail == null) {
		// response.sendRedirect("login.html");
		// } else {
		// out.println("<p>Logged In user: " + loggedInEmail + "</p>");
		// out.println("<a href='LogoutServlet'>logout</a>");
		// try {
		// products = productService.getAllProductsList();
		// } catch (ServiceException e) {
		// e.printStackTrace();
		// }
		// }
		// }

		// JSONArray productJson = new JSONArray(products);
		// PrintWriter out = response.getWriter();
		// out.println(productJson.toString());
		// out.flush();

		JSONObject productJson = new JSONObject(products);
		PrintWriter out = response.getWriter();
		out.println(productJson.toString());
		out.flush();

		// session.setAttribute("products", products);
		// RequestDispatcher dispatcher =
		// request.getRequestDispatcher("productlist.jsp");
		// dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
