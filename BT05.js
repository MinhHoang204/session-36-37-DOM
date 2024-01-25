function changeBackgroundColor(input) {
    if (input.value.trim() !== '') {
      input.style.backgroundColor = 'white';
    } else {
      input.style.backgroundColor = 'yellow';
    }
  }

function addItem() {
    const input = document.getElementById('textInput');
    const inputValue = input.value.trim();

if (inputValue !== '') {
      const list = document.getElementById('list');
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.textContent = inputValue;
      list.appendChild(newItem);
      input.value = '';
      input.style.backgroundColor = 'yellow';
    }
}