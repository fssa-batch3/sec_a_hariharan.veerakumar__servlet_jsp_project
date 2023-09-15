const ex_array = JSON.parse(localStorage.getItem("exercise_card"));

// getting the id in the url
const url = window.location.search;
const url_params = new URLSearchParams(url);
const get_id = url_params.get("id");

let ex_obj = ex_array.find(function(exercise){
    let check_id = exercise["id"];
    if(get_id == check_id){
        return true;
    }
})

// console.log(ex_obj);

let name = document.getElementById("ex_name");
let image = document.getElementById("ex_img");
let alt = document.getElementById("ex_alt");
let time = document.getElementById("ex_times");
let steps = document.getElementById("ex_steps");
let diet_image = document.getElementById("Diet_image");
let diet_alt = document.getElementById("Diet_alt");
let diet_desc = document.getElementById("Diet_desc");
let type = document.getElementById("type");

name.value = ex_obj["name"];
image.value = ex_obj["image"];
alt.value = ex_obj["alt"];
time.value = ex_obj["time"];
steps.value = ex_obj["steps"];
diet_image.value = ex_obj["diet_image"];
diet_alt.value = ex_obj["diet_alt"];
diet_desc.value = ex_obj["diet_desc"];
type.value = ex_obj["type"];

// For edit

const edit = document.getElementById("form");
edit.addEventListener("submit", function(event){
    event.preventDefault();

let exercise_name = document.getElementById("ex_name").value;
let exercise_image = document.getElementById("ex_img").value;
let exercise_alt = document.getElementById("ex_alt").value;
let exercise_time = document.getElementById("ex_times").value;
let exercise_steps = document.getElementById("ex_steps").value;
let exercise_diet_image = document.getElementById("Diet_image").value;
let exercise_diet_alt = document.getElementById("Diet_alt").value;
let exercise_diet_desc = document.getElementById("Diet_desc").value;
let exercise_type = document.getElementById("type").value;

  const exercise_object = {
    name: exercise_name,
    image: exercise_image,
    alt: exercise_alt,
    time: exercise_time,
    steps: exercise_steps,
    diet_image: exercise_diet_image,
    diet_alt: exercise_diet_alt,
    diet_desc: exercise_diet_desc,
    type: exercise_type
  }

  updateExercise(ex_array, ex_obj,exercise_object);

  localStorage.setItem("exercise_card", JSON.stringify(ex_array))

  alert("Successfully changed")

  window.location.href = "./../pages/Home_workout.html";



})
function updateExercise(ar, obj_1, obj_2) {
    let checked_obj = Object.assign(obj_1, obj_2);
   
    let index = ar.indexOf(obj_1);

    ar[index] = checked_obj;
}


// For delete
let exercise_delete = document.getElementById("delete");
exercise_delete.addEventListener("click", function(event){
    event.preventDefault();

    let Index = ex_array.indexOf(ex_obj);

    let msg = confirm("Are you sure want to delete this exercise")
    if(msg !== true){
    return;
    }
    else{
        ex_array.splice(Index, 1)
        localStorage.setItem("exercise_card", JSON.stringify(ex_array));
        window.location.href = "./../pages/Home_workout.html";
    }
})