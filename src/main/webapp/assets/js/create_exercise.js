const form = document.getElementById("form")
form.addEventListener("submit", function(event){
    event.preventDefault();

    let id = Date.now();
    let name = document.getElementById("ex_name").value;
    let image = document.getElementById("ex_img").value;
    let alt  = document.getElementById("ex_alt").value;
    let time = document.getElementById("ex_times").value;
    let steps = document.getElementById("ex_steps").value;
    let diet_image = document.getElementById("Diet_image").value;
    let diet_alt = document.getElementById("Diet_alt").value;
    let diet_desc = document.getElementById("Diet_desc").value;
    let type = document.getElementById("type").value;

    const exercise_object = {
        "id": id,
        "name": name,
        "image": image,
        "alt" : alt,
        "time" : time,
        "steps": steps,
        "diet_image": diet_image,
        "diet_alt" : diet_alt,
        "diet_desc": diet_desc,
        "type":type
    }
    let ex_array = JSON.parse(localStorage.getItem("exercise_card"));

    // checking the array is null or not
    if(localStorage.getItem("exercise_card") != null){
        ex_array = JSON.parse(localStorage.getItem("exercise_card"));
        ex_array.push(exercise_object);
    }

    localStorage.setItem("exercise_card", JSON.stringify(ex_array));
    alert("Successfully added");
    window.location.href = "./../pages/Home_workout.html";
})