let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    toyFormContainer.style.display = addToy ? "block" : "none";
    // hide and show for the paragraph and Add a new toy button
    let hideBtn = document.getElementById("hideBtn");
    hideBtn.style.display = "none";
    addBtn.style.display = "none";
  });

  getData();
});

const getData = async () => {
  const response = await fetch("http://localhost:3000/toys");
  const getToys = await response.json();
  getToys.forEach((toy) => createElement(toy));
};

const createElement = (toy) => {
  let card = document.createElement("div");
  card.classList.add("card");

  let h2 = document.createElement("h2");
  h2.textContent = toy.name;

  let img = document.createElement("img");
  img.src = toy.image;
  img.classList.add("toy-avatar");

  let p = document.createElement("p");
  p.textContent = `${toy.likes} Likes`;

  let button = document.createElement("button");
  button.textContent = "Like ❤️";
  button.classList.add("like-btn");

  card.append(img, h2, p, button);

  document.getElementById("main-container").appendChild(card);
};
