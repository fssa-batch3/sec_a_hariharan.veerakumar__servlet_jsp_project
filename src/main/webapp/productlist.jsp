<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.*"%>
<%@ page import="com.fssa.crazyfitness.model.*"%>
<!DOCTYPE html>
<html>
<head>
    <title>Product List</title>
    <style>
        .whole-div {
  margin-top: 10%;
  display: grid;
  grid-template-columns: 33% 33% 33%  ;
  gap: 15px;
}
.sale-box {
  border: 1px solid aqua;
  height: 100%;
  width: 97%;
  border-radius: 10px;
  margin-bottom: 30px;
}

.sale-box img {
  width: 88%;
  height: 350px;
  border-radius: 5px 30px;
  margin-left: 20px;
  margin-top: 10px;
  border: 1px solid white;
}
.price {
  display: flex;
  justify-content: flex-end;
  font-family: sans-serif;
  width: 75%;
  font-size: 20px;
  margin-top: -5px;
  margin-left: 25px;
}
.name {
  font-family: monospace;
  font-size: 160%;
  width: fit-content;
  margin-left: 50px;
  margin-top: 5px;
}
.btn-1 {
  text-decoration: none;
  color: aqua;
  background-color: black;
  padding: 2.5%;
  border: 2px solid aqua;
  height: 30px;
  border-radius: 5px 20px;
  cursor: pointer;
  font-size: 100%;
  width: 120px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-left: 10%;
  transition: 0.2s;
}
.btn-1:hover {
  background-color: aqua;
  color: black;
  transform: scale(1.1);
}
.btn-2 {
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 2.5%;
  margin-left: 20%;
  cursor: pointer;
  height: 30px;
  font-size: 100%;
  width: 100%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-radius: 5px;
  transition: 0.2s;
}
.btn-2:hover {
  transform: scale(1.1);
  color: black;
}
.cr_btn{
 padding: 0.8%;
 font-size: 100%;
 margin-left: 80%;
}
a{
  text-decoration: none;
}
.crud_features{
  margin-left: 55%;
  margin-top: 7%;
  display: flex;
  width: 40%;
  justify-content: space-around;
}
#update{
  color: #ffffff;
  background-color:#1E90FF;
  font-size: 100%;
  padding: 7%;
  padding-left: 16%;
  border-radius: 8px;
  width: 50%;
}
#update:hover{
  color: #ffffff;
  background-color:#1E90FF;
  opacity: 0.9;
}
#delete{
  color: #ffffff;
  background-color: 	#ed2e2edc;
  padding: 7%;
  border-radius: 8px;
}
#delete:hover{
  color: #ffffff;
  background-color: 	#ed2e2edc;
  opacity: 0.8;
}
    </style>
</head>
<body>
    <h1>Product Cards</h1>
    <a href="productform.html"><button>Create Product</button></a>
    <div class ="whole-div">
   <c:forEach var="product" items="${products}">
    <div class="sale-box">
        <img src="<c:out value='${product.productImage}' />" alt="product image" />
        <p class="name"><c:out value='${product.productName}' /></p>
        <pre class="price">&#8377;<c:out value='${product.productPrice}' /> Only</pre>
        <a href="../pages/buy_now.html" class="btn-1">Buy Now</a>
        <a href="../pages/my_cart.html" class="btn-2">Add to cart</a>
        <div class="crud_features">
            <a href="EditProduct?id=<c:out value='${product.productId}' />" class="update btn btn-info">Edit</a>   
        </div>
    </div>
</c:forEach>
</div>
   


    
</body>
</html>
