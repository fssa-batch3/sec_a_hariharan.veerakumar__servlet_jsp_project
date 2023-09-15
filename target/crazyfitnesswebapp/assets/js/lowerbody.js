// get the array
const exercise_card = JSON.parse(localStorage.getItem("exercise_card"));
const admin_email = JSON.parse(localStorage.getItem("details"));

const lowerbody_card = [];
// filter function
function productAppend(type) {
    const exercisesection = exercise_card.filter((h) => h.type == type);
    return exercisesection;
  }
// filtering top product
  for (let i = 0; i < productAppend("lowerbody").length; i++) {
    lowerbody_card.push(productAppend("lowerbody")[i]);
  }

  //   creating a function
// for user
function createCard(ar,selector) {
    for (let i = 0; i < ar.length; i++) {
        let exercise_div = document.createElement("div");
        exercise_div.setAttribute("class", "div-1");
        
        let left_div = document.createElement("div");
        left_div.setAttribute("class","left");
        exercise_div.append(left_div);
        
        let left_heading = document.createElement("h2");
        left_heading.innerText= ar[i]["name"];
        left_div.append(left_heading);
        
        let left_image = document.createElement("img");
        left_image.setAttribute("src", ar[i]["image"]);
        left_image.setAttribute("alt", ar[i]["alt"]);
        left_div.append(left_image);
        
        let left_times = document.createElement("p");
        left_times.setAttribute("class","left-p");
        left_times.innerText= ar[i]["time"];
        left_div.append(left_times);
        
        let steps = document.createElement("p");
        steps.innerText = ar[i]["steps"];
        left_div.append(steps);
        
        let right_div = document.createElement("div");
        right_div.setAttribute("class", "right");
        exercise_div.append(right_div);
        
        let right_h2 = document.createElement("h2");
        right_h2.innerText="Overall Diet Management";
        right_div.append(right_h2);
        
        let right_image = document.createElement("img");
        right_image.setAttribute("src", ar[i]["diet_image"]);
        right_image.setAttribute("alt", ar[i]["diet_alt"]);
        right_div.append(right_image);
        
        let right_p = document.createElement("p");
        right_p.innerText = ar[i]["diet_desc"];
        right_div.append(right_p);
        
        let br = document.createElement("br");
        exercise_div.append(br)
        
        document.querySelector(selector).append(exercise_div);    
    }
  }
  
  //   for admin
  function createAdminCard(ar,selector) {
    for (let i = 0; i < ar.length; i++) {
        let exercise_div = document.createElement("div");
        exercise_div.setAttribute("class", "div-1");
        
        let left_div = document.createElement("div");
        left_div.setAttribute("class","left");
        exercise_div.append(left_div);
        
        let left_heading = document.createElement("h2");
        left_heading.innerText= ar[i]["name"];
        left_div.append(left_heading);
        
        let left_image = document.createElement("img");
        left_image.setAttribute("src", ar[i]["image"]);
        left_image.setAttribute("alt", ar[i]["alt"]);
        left_div.append(left_image);
        
        let left_times = document.createElement("p");
        left_times.setAttribute("class","left-p");
        left_times.innerText= ar[i]["time"];
        left_div.append(left_times);
        
        let steps = document.createElement("p");
        steps.innerText = ar[i]["steps"];
        left_div.append(steps);
        
        let right_div = document.createElement("div");
        right_div.setAttribute("class", "right");
        exercise_div.append(right_div);
        
        let right_h2 = document.createElement("h2");
        right_h2.innerText="Overall Diet Management";
        right_div.append(right_h2);
        
        let right_image = document.createElement("img");
        right_image.setAttribute("src", ar[i]["diet_image"]);
        right_image.setAttribute("alt", ar[i]["diet_alt"]);
        right_div.append(right_image);
        
        let right_p = document.createElement("p");
        right_p.innerText = ar[i]["diet_desc"];
        right_div.append(right_p);
  
        let edit_a = document.createElement("a");
        edit_a.setAttribute("href","../pages/update_exercise.html?id=" + ar[i]["id"]);
        edit_a.setAttribute("class", "update btn btn-warning");
        edit_a.innerText = "Edit"
        right_div.append(edit_a)
        
        let br = document.createElement("br");
        exercise_div.append(br)
        
        document.querySelector(selector).append(exercise_div);    
    }
    let create_a = document.createElement("a");
    create_a.setAttribute("href", "./../pages/create_exercise.html");
    create_a.setAttribute("class","add btn btn-success");
    create_a.innerText = "+ Add Exercise"
  
    document.querySelector(".end_div").append(create_a)
  }
  
  // calling the function
    if(admin_email == "hari@gmail.com"){
      createAdminCard(lowerbody_card, ".sec-1")
    }
  else{
      createCard(lowerbody_card, ".sec-1")
  }
  
  