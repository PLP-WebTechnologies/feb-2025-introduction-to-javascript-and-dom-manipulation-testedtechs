function changeTitle() {
  const title = document.getElementById("main-title");
  title.textContent = "You Clicked the Button!";
}

function toggleParagraph() {
  const container = document.getElementById("dynamic-content");
  const existing = document.getElementById("dynamic-paragraph");

  if (existing) {
    existing.remove();
  } else {
    const p = document.createElement("p");
    p.id = "dynamic-paragraph";
    p.textContent = "This paragraph was added dynamically.";
    container.appendChild(p);
  }
}

function changeStyle() {
  const body = document.body;
  body.style.backgroundColor =
    body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
}
