function toggleQR() {
    document.querySelector('.QR').classList.toggle('active');
}

document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let amount = document.getElementById("amount").value;

    if (amount === "" || amount <= 0) {
        alert("Please enter a valid donation amount.");
    } else {
        alert("Payment Successful! Thank you for your donation.");
        document.getElementById("amount").value = ""; // Clear input after successful payment
    }
});
