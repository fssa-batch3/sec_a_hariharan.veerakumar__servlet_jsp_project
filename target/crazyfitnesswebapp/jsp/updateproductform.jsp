<!DOCTYPE html>
<%@ page import="com.fssa.crazyfitness.model.*"%>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Update Product</title>
<style>
body {
	font-family: Arial, sans-serif;
	background-color: #f4f4f4;
	text-align: center;
}

.container {
	margin: 50px auto;
	width: 300px;
	padding: 20px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

input[type="text"], input[type="url"], input[type="number"], textarea {
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-sizing: border-box;
}

button {
	background-color: #007bff;
	color: #fff;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
}

button:hover {
	background-color: #0056b3;
}

.delete-button {
	background-color: #FF0000;
	color: #FFFFFF;
}

.delete-button:hover {
	background-color: #FFFFFF;
	color: #FF0000;
}

.container2 {
	margin-top: 50px;
}
</style>
</head>
<body>
	<div class="container">
		<h2>Edit Product</h2>
		<form action="EditProduct" method="post">

			<%
			Product product = (Product) request.getAttribute("editProduct");
			%>
			<label for="productImage">Product Image URL:</label> <input
				type="url" name="image_url" value="<%=product.getProductImage()%>"
				required> <label for="productName">Product Name:</label> <input
				type="text" name="product_name"
				value="<%=product.getProductName()%>" required> <label
				for="product_price">Product Price:</label> <input type="number"
				name="product_price" value="<%=product.getProductPrice()%>" required>

			<label for="product_description">Product Description:</label>
			<textarea name="product_description" rows="4" required><%=product.getProductDescrption()%></textarea>

			<!-- Add a hidden field to send the product id -->
			<input type="hidden" name="product_id"
				value="<%=product.getProductId()%>">

			<button type="submit">Update</button>

		</form>
	</div>
	<div class="container2">
		<p>Do you want to delete this product?</p>
		<a href="DeleteProductServlet?id=<%=product.getProductId() %>"><button class="delete-button">Delete</button></a>
	</div>

</body>
</html>
