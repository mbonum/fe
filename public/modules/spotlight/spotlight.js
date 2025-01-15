function initializeSpotlight() {
  const spotlightSection = document.querySelector('#spotlight');
  if (!spotlightSection) {
    console.error('Ensure the spotlight section is present');
    return;
  }

  // Fake product data.
  const products = [
    { id: 1, imageUrl: '/images/jacket.webp', altText: 'Spotlight', name: 'Jacket', price: '200 €' },
    { id: 2, imageUrl: '/images/blazer.webp', altText: 'Blazer', name: 'Blazer', price: '150 €' },
    { id: 3, imageUrl: '/images/jeans.webp', altText: 'Jeans', name: 'Jeans', price: '99.99 €' }
  ];

  const productGrid = spotlightSection.querySelector('.product-grid');
  if (!productGrid) {
    console.error('Ensure the product grid div is present');
    return;
  }

  // Create a product cart for each product
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.dataset.productId = product.id;

    card.innerHTML = `
      <img class='product-img' src='${product.imageUrl}' alt='${product.altText}'>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `;

// <button class='add-cart-btn'>Add to cart</button>

    productGrid.appendChild(card);
  });
}

initializeSpotlight();