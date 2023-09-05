package com.fssa.crazyfitnesswebapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.crazyfitness.services.ProductService;
import com.fssa.crazyfitness.services.exceptions.ServiceException;

/**
 * Servlet implementation class DeleteProductServlet
 */
@WebServlet("/DeleteProductServlet")
public class DeleteProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;


	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
         response.setContentType("text/html");
         PrintWriter out = response.getWriter();
         ProductService productService = new ProductService();
         
         try {
			productService.productDelete(id);
			   out.println("<script type=\"text/javascript\">");
		       //  out.println("confirm('Are you want to delete this product?');");
		         out.println("alert('Your Product Deleted Successfully');");
		         out.println("</script>");
				response.sendRedirect("home.jsp");
		} catch (ServiceException e) {
			e.printStackTrace();
			out.println(e.getMessage());
		}
         
      
	}



}
