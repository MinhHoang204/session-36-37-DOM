// Cách 1: Sử dụng sự kiện input
function updateDisplay(value) {
    const displayArea = document.getElementById('displayArea');
    displayArea.textContent = value;
}

// Cách 2: Sử dụng hàm xử lý
const textInput = document.getElementById('textInput');
textInput.addEventListener('input', function() {
    const displayArea = document.getElementById('displayArea');
    displayArea.textContent = this.value;
});