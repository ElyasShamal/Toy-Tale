let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    toyFormContainer.style.display = addToy ? "block" : "none";
    // add hide and show for the paragraph and Add a new toy button
    let hideBtn = document.getElementById("hideBtn");
    hideBtn.style.display = "none";
    addBtn.style.display = "none";
  });
});
