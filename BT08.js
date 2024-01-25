function copyToRecipient() {
    const fullName = document.getElementById('fullName').value.toUpperCase();
    const email = document.getElementById('email').value;
    const orderDate = document.getElementById('orderDate').value;

    document.getElementById('recipientFullName').value = fullName;
    document.getElementById('recipientEmail').value = email;
    document.getElementById('recipientOrderDate').value = orderDate;
}

function sendMailAndOrder() {
    if (confirm('Đặt hàng thành công, email đã gửi tới cho quý khách')) {
      // Gửi mail cho tôi
    } else {
      alert('Đặt hàng thành công');
    }
  }

function orderSuccess() {
    alert('Đặt hàng thành công');
}