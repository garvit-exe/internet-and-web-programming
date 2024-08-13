document.addEventListener("DOMContentLoaded", () => {
  const itemInput = document.getElementById("itemInput");
  const addButton = document.getElementById("addButton");
  const removeButton = document.getElementById("removeButton");
  const itemList = document.getElementById("itemList");

  let items = [];

  addButton.addEventListener("click", () => {
    const newItem = itemInput.value.trim();
    if (newItem) {
      items.push(newItem);
      itemInput.value = "";
      renderList();
    }
  });

  removeButton.addEventListener("click", () => {
    items.pop();
    renderList();
  });

  function renderList() {
    itemList.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      itemList.appendChild(li);
    });
  }
});
