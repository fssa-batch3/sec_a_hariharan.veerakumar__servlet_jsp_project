// Get an array from LS
const music_array =  JSON.parse(localStorage.getItem("musicCard"));

// getting the id in the url
const url = window.location.search;
const url_params = new URLSearchParams(url);
const get_id = url_params.get("id");
// console.log(get_id);

// Get the object by using id
let music_obj = music_array.find(function (music) {
    let check_id = music["id"]
    if (get_id == check_id) {
        return true;
    }

})
// console.log(music_obj);


// show the object in input field
let image = document.getElementById("image");
let alt = document.getElementById("alter")
let name = document.getElementById("name")
let song_url = document.getElementById("song")

image.value = music_obj["image"]
alt.value = music_obj["alt"]
name.value = music_obj["name"]
song_url.value = music_obj["url"]

// for edit
const edit = document.getElementById("form")
edit.addEventListener("submit",function (event){
    event.preventDefault()

    let music_image = document.getElementById("image").value
    let music_alt = document.getElementById("alter").value
    let music_name = document.getElementById("name").value
    let music_url = document.getElementById("song").value



    let music_object = {
        image:music_image,
        alt:music_alt,
        name:music_name,
        url:music_url
    }

let check_music_obj = Object.assign(music_obj,music_object)
console.log(check_music_obj);

let index = music_array.indexOf(music_obj)
    console.log(index)

    music_array[index] = check_music_obj;

    
    localStorage.setItem("musicCard", JSON.stringify(music_array))
    console.log(music_array);

    alert("Successfully changed")

    window.location.href = "../pages/music.html";

})
let check = true;
let present_music_obj = music_array.find(function (music) {
    let check_id = music["id"]
    if (get_id == check_id) {

        let image1 = document.getElementById("image");
        let alt1 = document.getElementById("alter")
        let name1 = document.getElementById("name")
        let song_url1 = document.getElementById("song")
        
        image1.value = music_obj["image"]
        alt1.value = music_obj["alt"]
        name1.value = music_obj["name"]
        song_url1.value = music_obj["url"]
    }
})

// For delete
const music_delete = document.getElementById("delete")
music_delete.addEventListener("click",function(event){
    event.preventDefault();

    let Index = music_array.indexOf(music_obj);

    let del_msg = confirm("Are you really want to delete this song")
    if(del_msg !== true){
        return
    }
    else{
        music_array.splice(Index, 1)
        console.log(music_array);
        localStorage.setItem("musicCard", JSON.stringify(music_array))
        window.location.href = "../pages/music.html";
    }
})