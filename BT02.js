function changeButtonText() {
    const button = document.getElementById('myButton');
    if (button.textContent === 'OFF') {
      button.textContent = 'ON';
    } else {
      button.textContent = 'OFF';
    }
}