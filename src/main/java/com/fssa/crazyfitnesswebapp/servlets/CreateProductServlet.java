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


import com.fssa.crazyfitness.model.Product;
import com.fssa.crazyfitness.services.ProductService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

@WebServlet("/CreateProductsServlet")
public class CreateProductServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		String producturl = req.getParameter("image_url");
		String productname = req.getParameter("product_name");
		String productprice = req.getParameter("product_price");
		int price = Integer.parseInt(productprice);
		String productdesc = req.getParameter("product_description");
		List<Product> products = null;
		ProductService productService = new ProductService();
		Product product = new Product(producturl, productname, price, productdesc);
		try {
			if (productService.productCreate(product)) {
				out.println("The Product is added successfully");
				products = productService.getAllProductsList();
				req.setAttribute("products", products);
				RequestDispatcher dispatcher = req.getRequestDispatcher("productlist.jsp");
				dispatcher.forward(req, resp);
			} else {
				out.println("The Product is not added");
				resp.sendRedirect("productform.html");
			}
		} catch (ServiceException e) {
			e.printStackTrace();
			out.println("Invalid Product");

		}

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doGet(req, resp);
	}
	

}
