const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Example list items
let currentIndex = 0;

function displayNextItem() {
  const listContainer = document.getElementById('listContainer');
  const list = document.getElementById('list');

  if (currentIndex < listItems.length) {
    const item = listItems[currentIndex];
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
    currentIndex++;
  } else {
    alert('All list items are displayed!');
  }

  listContainer.style.display = 'block'; // Display the list container
}