let container = document.querySelector(".container");
let dataArray = [];
let current = 0;

// Fetch JSON data and create content
const fetchJsonFile = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      dataArray = data;
      createContent(current); // Initialize with the first item
    });
};

fetchJsonFile();

// Create content for the current person
const createContent = (index) => {
  container.innerHTML = ""; // Clear container

  if (dataArray.length > 0 && index < dataArray.length) {
    const item = dataArray[index]; // Get the current item

    const parentDiv = document.createElement("div");
    parentDiv.classList.add("content");

    // Create content HTML
    parentDiv.innerHTML = `
      <div class="text_content">
        <p>${item.text}</p>
        <h1>${item.name}<span>${item.job}</span></h1>
      </div>
      <div class="image_content">
        <img src="${item.image}" alt="">
        <div class="next_prev_btn">
          <img src="images/icon-prev.svg" alt="" class="prev-btn">
          <img src="images/icon-next.svg" alt="" class="next-btn">
        </div>
      </div>
    `;

    container.appendChild(parentDiv);

    let next_btn = document
      .querySelector(".next-btn")
      .addEventListener("click", showNext);
    let prev_btn = document
      .querySelector(".prev-btn")
      .addEventListener("click", showPrev);
  }
};

const showNext = () => {
  current = (current + 1) % dataArray.length;
  createContent(current);
};
const showPrev = () => {
  current=(current - 1 + dataArray.length) % dataArray.length;
  createContent(current);
};
