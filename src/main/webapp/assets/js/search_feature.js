let searchbar = document.getElementById("search_input");
const cards = document.getElementsByClassName("sale-box");
const title = document.getElementsByClassName("name");
searchbar.addEventListener("input", () => {
  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    const titles = title[i]

    if (
      titles.innerText.toLowerCase().includes(searchbar.value.toLowerCase())
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
});