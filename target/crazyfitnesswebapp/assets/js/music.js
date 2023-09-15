//   getting data from LS
let musiccard = JSON.parse(localStorage.getItem("musicCard"));
const admin_email = JSON.parse(localStorage.getItem("details"));

if (admin_email == "hari@gmail.com") {
  // card
  let music_card;
  let left_div;
  let image;
  let song_name;
  let right_div;
  let audio_tag;
  let audio_source;
  let edit_btn;

  // Including for loop
  for (let i = 0; i < musiccard.length; i++) {

    music_card = document.createElement("div");
    music_card.setAttribute("class", "div-1");


    left_div = document.createElement("div");
    left_div.setAttribute("class", "left");
    music_card.append(left_div);

    image = document.createElement("img");
    image.setAttribute("class", "music-img");
    image.setAttribute("src", musiccard[i]["image"]);
    image.setAttribute("alt", musiccard[i]["alt"]);
    left_div.append(image);

    song_name = document.createElement("h2");
    song_name.innerText = musiccard[i]["name"];
    left_div.append(song_name);

    right_div = document.createElement("div");
    right_div.setAttribute("class", "right");
    music_card.append(right_div)

    audio_tag = document.createElement("audio");
    audio_tag.setAttribute("class", "music");
    audio_tag.setAttribute("controls", "")
    right_div.append(audio_tag);

    audio_source = document.createElement("source");
    audio_source.setAttribute("src", musiccard[i]["url"])
    audio_source.setAttribute("type", "audio/mpeg")
    audio_tag.append(audio_source)

    edit_btn = document.createElement("a");
    edit_btn.setAttribute("href", "../pages/update_music.html?id=" + musiccard[i]["id"])
    edit_btn.setAttribute("class", "btn-1")
    edit_btn.innerText = "Edit"
    right_div.append(edit_btn)

    document.querySelector(".sec-1.container").append(music_card);
  }

  //  create button
  let create_a = document.createElement("a");
  create_a.setAttribute("href", "../pages/createmusic.html");
  create_a.setAttribute("id", "delete_music");

  let create_btn = document.createElement("button");
  create_btn.setAttribute("class", "btn btn-success");
  create_btn.innerText = "+ Add music";
  create_a.append(create_btn)

  document.querySelector(".row").append(create_a)
}
// for user
else {
  // card
  let music_card;
  let left_div;
  let image;
  let song_name;
  let right_div;
  let audio_tag;
  let audio_source;
  // Including for loop
  for (let i = 0; i < musiccard.length; i++) {

    music_card = document.createElement("div");
    music_card.setAttribute("class", "div-1");


    left_div = document.createElement("div");
    left_div.setAttribute("class", "left");
    music_card.append(left_div);

    image = document.createElement("img");
    image.setAttribute("class", "music-img");
    image.setAttribute("src", musiccard[i]["image"]);
    image.setAttribute("alt", musiccard[i]["alt"]);
    left_div.append(image);

    song_name = document.createElement("h2");
    song_name.innerText = musiccard[i]["name"];
    left_div.append(song_name);

    right_div = document.createElement("div");
    right_div.setAttribute("class", "right");
    music_card.append(right_div)

    audio_tag = document.createElement("audio");
    audio_tag.setAttribute("class", "music");
    audio_tag.setAttribute("controls", "")
    right_div.append(audio_tag);

    audio_source = document.createElement("source");
    audio_source.setAttribute("src", musiccard[i]["url"])
    audio_source.setAttribute("type", "audio/mpeg")
    audio_tag.append(audio_source)

    document.querySelector(".sec-1.container").append(music_card);
  }


}

// set the array into LS
localStorage.setItem("musicCard", JSON.stringify(musiccard));

// search feature
let searchbar = document.getElementById("search_input");
const cards = document.getElementsByClassName("div-1");
searchbar.addEventListener("input", () => {
  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    if (
      element.innerHTML.toLowerCase().includes(searchbar.value.toLowerCase())
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
});




