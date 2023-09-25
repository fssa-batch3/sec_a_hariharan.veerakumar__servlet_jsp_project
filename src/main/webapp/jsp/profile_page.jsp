<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Profile</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
   <style>
        body {
            background-image: url(../assets/images/Profile_background.png);
            background-repeat: no-repeat;
            background-size: 100vw 100vh;
            color: aqua;
        }

        .container {
            margin-top: 5%;

        }

        h1 {
            margin-left: 43%;
        }

        #button {
            font-size: 100%;
            margin-top: 5%;
            margin-left: 40%;
            width: 20%;

        }

        #delete {
            font-size: 100%;
            margin-top: 5%;
            /* width: 20%; */
            margin-left: 39%;

        }

        .form-control {
            background-color: transparent;
            color: #ffffff;
            font-weight: bolder;
        }

        #btn {
            width: 10%;
            margin-left: 90%;
            margin-top: 6%;
        }

        a {
            text-decoration: none;
            color: black;
        }

        /* change btn */
        .custom-btn {
            width: 130px;
            height: 40px;
            color: #000000;
            border-radius: 5px;
            padding: 10px 25px;
            font-family: 'Lato', sans-serif;
            font-weight: 500;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            box-shadow: inset 2px 2px 2px 0px #00FFFF;
            outline: none;
        }

        .btn {
            background: linear-gradient(0deg, #00FFFF 0%, #00FFFF 100%);
            line-height: 42px;
            padding: 0;
            border: none;
        }

        .btn span {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
        }

        .btn:before,
        .btn:after {
            position: absolute;
            content: "";
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 1);
            box-shadow: -7px -7px 20px 0px #FFFFFF,
                -4px -4px 5px 0px #FFFFFF,
                7px 7px 20px 0px #FFFFFF,
                4px 4px 5px 0px #FFFFFF;
            transition: all 0.3s ease;
        }

        .btn:before {
            height: 0%;
            width: 2px;
        }

        .btn:after {
            width: 0%;
            height: 2px;
        }

        .btn:hover {
            color: aqua;
            background: #000000;
        }

        .btn:hover:before {
            height: 100%;
        }

        .btn:hover:after {
            width: 100%;
        }

        .btn span:before,
        .btn span:after {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            background: rgba(255, 255, 255, 1);
            box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 1),
                -4px -4px 5px 0px rgba(255, 255, 255, 1),
                7px 7px 20px 0px rgba(255, 255, 255, 1),
                4px 4px 5px 0px rgba(255, 255, 255, 1);
            transition: all 0.3s ease;
        }

        .btn span:before {
            width: 2px;
            height: 0%;
        }

        .btn span:after {
            height: 2px;
            width: 0%;
        }

        .btn span:hover:before {
            height: 100%;
        }

        .btn span:hover:after {
            width: 100%;
        }

        /* delete btn */

        .delete_btn {
            position: relative;
            width: 150px;
            height: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            border: 1px solid #cc0000;
            background-color: #e50000;
            overflow: hidden;
            border-radius: 7px;
        }

        .delete_btn,
        .a__icon,
        .a__text {
            transition: all 0.3s;
        }

        .delete_btn .a__text {
            transform: translateX(35px);
            color: #fff;
            font-weight: 600;
        }

        .delete_btn .a__icon {
            position: absolute;
            transform: translateX(109px);
            height: 100%;
            width: 39px;
            background-color: #cc0000;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .delete_btn .svg {
            width: 20px;
        }

        .delete_btn:hover {
            background: #cc0000;
        }

        .delete_btn:hover .a__text {
            color: transparent;
        }

        .delete_btn:hover .a__icon {
            width: 148px;
            transform: translateX(0);
        }

        .delete_btn:active .a__icon {
            background-color: #b20000;
        }

        .delete_btn:active {
            border: 1px solid #b20000;
        }

        /* back btn */
        .back_btn {

            margin-left: 42%;
            padding: 20px 60px;
            background-color: #000;
            border: none;
            font-size: 18px;
            position: relative;
            /* overflow: hidden; */
            transition: 500ms;
            text-decoration: none;
        }

        .back_btn span {
            color: #00FFFF;
            position: relative;
            transition: 500ms;
            transition-delay: 500ms;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
        }

        .back_btn:before {
            content: '';
            position: absolute;
            width: 0%;
            height: 0%;
            left: 50%;
            right: 50%;
            top: 50%;
            bottom: 50%;
            transition: 500ms;
            transition-delay: 500ms;
            background-color: #00FFFF;
            box-shadow: 0 0 10px #00FFFF,
                0 0 30px #00FFFF,
                0 0 50px #00FFFF;
        }

        .back_btn div {
            transition: 500ms;
            position: absolute;
            background-color: #00FFFF;
            box-shadow: 0 0 15px #00FFFF, 0 0 30px #00FFFF, 0 0 50px #00FFFF;
        }

        .back_btn .top {
            width: 15px;
            height: 2px;
            top: 0;
            left: 0;
        }

        .back_btn .bottom {
            width: 15px;
            height: 2px;
            bottom: 0;
            right: 0;
        }

        .back_btn .left {
            width: 2px;
            height: 15px;
            top: 0;
            left: 0;
        }

        .back_btn .right {
            width: 2px;
            height: 15px;
            bottom: 0;
            right: 0;
        }

        .back_btn:hover {
            color: #000;
        }

        .back_btn:hover span {
            color: #000;
        }

        .back_btn:hover:before {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .back_btn:hover .top,
        .back_btn:hover .bottom {
            width: 100%;
        }

        .back_btn:hover .left,
        .back_btn:hover .right {
            height: 100%;
        }

        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>
</head>
<body>
 <div class="container profile_div">
        <br>
        <h1>Profile</h1>
        <br>
        <form id=" form">
            <div class="row">
                <!-- first name -->
                <div class="col">
                    <label for="fname" class="form_label">First Name :</label>
                    <input type="text" id="fname" class="form-control" name="fname" required>
                </div>
                <!-- last name -->
                <div class="col">
                    <label for="lname" class="form_label">Last Name :</label>
                    <input type="text" id="lname" class="form-control" name="lname" required>
                </div>
            </div><br><br><br>
            
            <!-- email -->
            <div class="row">
                <div class="col">
                    <label for="email" class="form_label">Email :</label>
                    <input type="email" id="email" class="form-control" name="email" readonly required>
                </div>
                <!-- gender -->
                <div class="col">
                    <label for="Gender" class="form_label">Gender :</label>
                    <select id="gender" class="form-control" >
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>
            </div>
            <br><br><br>
            <!-- phone number -->
            <div class="row">
                <div class="col">
                    <label for="ph_number" class="form_label">Phone number :</label>
                    <input type="tel" id="ph_number" class="form-control" name="ph_number" >
                </div>
                <!-- age -->
                <div class="col">
                    <label for="age" class="form_label">Age :</label>
                    <input type="number" id="age" class="form-control" name="age" required>
                </div>
            </div>
<br><br>
            <!-- submit -->
            <div class="row">
                <div class="col-sm"> <button class="custom-btn btn" id="button"
                        type="submit"><span>Change</span></button>
                </div>
                <!-- delete button -->
                <div class="col">
                         <a href="<%= request.getContextPath() %>/LogoutServlet" class="delete_btn"  id="delete">
                        <span class="a__text">Log out</span>
                  
                        <span class="a__icon"><svg class="svg" height="512" viewBox="0 0 512 512" width="512"
                                xmlns="http://www.w3.org/2000/svg">
                                <title></title>
                                <path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                                    style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px">
                                </path>
                                <line style="stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
                                    x1="80" x2="432" y1="112" y2="112"></line>
                                <path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                                    style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px">
                                </path>
                                <line
                                    style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                                    x1="256" x2="256" y1="176" y2="400"></line>
                                <line
                                    style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                                    x1="184" x2="192" y1="176" y2="400"></line>
                                <line
                                    style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                                    x1="328" x2="320" y1="176" y2="400"></line>
                            </svg></span>
                     </a>
                </div>

        </form>
        <br>
        <br>
        <br>
        <br>

        <!-- Back button -->
        <div class="row">
            <div class="col">
                <a class="back_btn" href="./../jsp/home_workout.jsp">
                    <span>
                        < GO BACK </span>
                            <div class="top"></div>
                            <div class="left"></div>
                            <div class="bottom"></div>
                            <div class="right"></div>
                </a>
            </div>
        </div>
    </div>
    </div>

    <!-- Java Script -->
    <script src="https://cdn.jsdelivr.net/gh/suryaumapathy2812/notify__js/notify.js"></script>
    <script src="../assets/js/profile_page.js"></script>
</body>
</html>