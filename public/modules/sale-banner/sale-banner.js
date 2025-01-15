// Content differentiation
let discount = 40;

function updateSaleBanner() {
  const discountText = document.getElementById('discountText');

  // Change the discount text
  discountText.textContent = `${discount}%`;
}

updateSaleBanner();