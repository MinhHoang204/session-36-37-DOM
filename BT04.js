// Cách 1: Sử dụng sự kiện input
function calculateSum1() {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const result1 = document.getElementById('result1');
    result1.value = input1 + input2;
}

// Gắn sự kiện input cho cả hai ô input
document.getElementById('input1').addEventListener('input', calculateSum1);
document.getElementById('input2').addEventListener('input', calculateSum1);

// Cách 2: Sử dụng hàm xử lí
function calculateSum2() {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const result2 = document.getElementById('result2');
    result2.value = input1 + input2;
}

// Gắn sự kiện click cjo một nút tính toán
document.getElementById('calculateButton').addEventListener('click', calculateSum2);