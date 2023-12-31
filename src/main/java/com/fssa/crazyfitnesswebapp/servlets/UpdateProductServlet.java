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
 * Servlet implementation class UpdateProductServlet
 */
@WebServlet("/EditProduct")
public class UpdateProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;


	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
//		int id = Integer.parseInt(request.getParameter("id"));
		String idParam = request.getParameter("id");
		int id = 0;
		if (idParam != null) {
		     id = Integer.parseInt(idParam);
		} 
		ProductService productService = new ProductService();
		Product product =new Product();
		try {
			product = productService.getProductById(id);
			out.println("success");
		} catch (ServiceException e) {
			e.printStackTrace();
		}
		request.setAttribute("editProduct", product);
		out.println(product);
		RequestDispatcher dispatcher = request.getRequestDispatcher("updateproductform.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		int id = Integer.parseInt(request.getParameter("product_id"));
		String imageurl = request.getParameter("image_url");
		String name = request.getParameter("product_name");
		int price = Integer.parseInt(request.getParameter("product_price"));
		String description = request.getParameter("product_description");
		ProductService productService = new ProductService();
		Product editProduct = new Product(id, imageurl, name, price, description);
		List<Product> products = null;
		try {
			productService.productUpdate(editProduct);
			products = productService.getAllProductsList();
			request.setAttribute("products", products);
			RequestDispatcher dispatcher = request.getRequestDispatcher("productlist.jsp");
			dispatcher.forward(request, response);
		} catch (ServiceException e) {
			e.printStackTrace();
			out.println(e.getMessage());

		}

	}

}
