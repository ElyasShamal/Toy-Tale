let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    toyFormContainer.style.display = addToy ? "block" : "none";
  });

  const form = document.querySelector("form.add-toy-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    sentItOut(formData);
  });

  getData();
});

const getData = async () => {
  const response = await fetch("https://toy-tale-backend.onrender.com/toys");
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

  button.addEventListener("click", () => {
    p.textContent = `${(toy.likes += 1)} Likes`;

    updateLikes(toy.id, toy.likes);
  });

  // add new button to delete spasific div from dom

  // const deleteButton = document.createElement("button");
  // deleteButton.textContent = "Delete 🗑️";
  // deleteButton.classList.add("delete-btn");

  // deleteButton.addEventListener("click", () => {
  //   card.remove();
  //   deleteToy(toy.id);
  // });

  // add elements to the dom
  card.append(img, h2, p, button /*deleteButton */);

  document.getElementById("main-container").appendChild(card);
};

// function for update likes
function updateLikes(id, numberOfNewLikes) {
  fetch(`https://toy-tale-backend.onrender.com/toys/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({
      likes: numberOfNewLikes,
    }),
  });
}

function sentItOut(newToy) {
  fetch("https://toy-tale-backend.onrender.com/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({
      ...newToy,
      likes: 0,
    }),
  })
    .then((response) => response.json())
    .then((responseToy) => createElement(responseToy));
}

// add delete function to delete spacific div from database

// function deleteToy(id) {
//   fetch(`https://toy-tale-backend.onrender.com/toys/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
// }
