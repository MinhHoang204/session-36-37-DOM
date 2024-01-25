function validateForm(event) {
    event.preventDefault;

    const answerInput = document.getElementById('answer');
    const message = document.getElementById('message');

    if(answerInput.ariaValueMax.length > 10) {
        message.textContent = 'Câu trả lời không hợp lệ (nhiều hơn 10 ký tự).';
    } else {
        message.textContent = 'Câu trả lời hợp lệ.';
    }
}