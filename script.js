
const fruitInput = document.getElementById("fruitInput");
const addFruitBtn = document.getElementById("addFruitBtn");
const countFruitBtn = document.getElementById("countFruitBtn");
const toggleListBtn = document.getElementById("toggleListBtn");
const fruitList = document.getElementById("fruitList");
const numbersContainer = document.getElementById("numbersContainer");


addFruitBtn.addEventListener("click", function() {
  const fruit = fruitInput.value;
  const li = document.createElement("li");
  li.textContent = fruit;
  fruitList.appendChild(li);
  fruitInput.value = "";
});


countFruitBtn.addEventListener("click", function() {
  const count = fruitList.children.length;
  alert("There are " + count + " fruits in the list.");
});


toggleListBtn.addEventListener("click", function() {
  if (fruitList.style.display === "none") {
    fruitList.style.display = "block";
  } else {
    fruitList.style.display = "none";
  }
});


function addNumbers(num) {
  const numbersDiv = document.createElement("div");
  for (let i = 1; i <= num; i++) {
    const span = document.createElement("span");
    span.textContent = i;
    if (i % 2 === 0) {
      span.classList.add("even");
    } else {
      span.classList.add("odd");
    }
    numbersDiv.appendChild(span);
  }
  numbersContainer.appendChild(numbersDiv);
}

addNumbers(50);