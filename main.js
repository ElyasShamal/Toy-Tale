document.addEventListener("DOMContentLoaded", () => {
  let addToy = false;

  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    toyFormContainer.style.display = addToy ? "block" : "none";
  });
});
