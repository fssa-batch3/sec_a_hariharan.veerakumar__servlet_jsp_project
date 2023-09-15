let m_array = JSON.parse(localStorage.getItem("musicCard"));
// console.log(m_array);

const Form = document.getElementById("music_form")
Form.addEventListener("submit", function(event){
    event.preventDefault()
 
    let s_id = Date.now();
    let s_image = document.getElementById("image").value;
    let s_alt = document.getElementById("alter").value;
    let s_name = document.getElementById("name").value;
    let s_url = document.getElementById("song").value;

    let song_object = {
        "id" : s_id,
        "image" : s_image,
        "alt" : s_alt,
        "name" : s_name,
        "url" : s_url,
    }
   


    // checking the array is empty or not
    if(localStorage.getItem("musicCard") != null){
        m_array =  JSON.parse(localStorage.getItem("musicCard"))
        m_array.push(song_object);
    }
    
    localStorage.setItem("musicCard", JSON.stringify(m_array))


    alert("Successfully added")
    window.location.href= "../pages/music.html";
})