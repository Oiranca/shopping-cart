let products = [];
let cart = [];

const productsGrid = document.getElementById('products-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartToggle = document.getElementById('cart-toggle');
const cartClose = document.getElementById('cart-close');
const clearCartBtn = document.getElementById('clear-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.getElementById('modal-close');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');

let modalCallback = null;

async function loadProducts() {
  try {
    const response = await fetch('src/data/products.json');
    products = await response.json();
    renderProducts();
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

function renderProducts() {
  productsGrid.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${product.price.toFixed(2)} €</span>
          <button class="button button-primary add-to-cart" data-id="${product.id}">
            Agregar al carrito
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      addToCart(productId);
    });
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    showModal(
      'Producto ya en el carrito',
      `${product.name} ya está en tu carrito. ¿Deseas agregar otra unidad?`,
      () => {
        existingItem.quantity += 1;
        updateCart();
        closeModal();
      }
    );
  } else {
    cart.push({ ...product, quantity: 1 });
    updateCart();
    showModal(
      'Producto agregado',
      `${product.name} se ha agregado al carrito correctamente.`,
      () => {
        closeModal();
      },
      true
    );
  }
}

function removeFromCart(productId) {
  showModal(
    'Eliminar producto',
    '¿Estás seguro de que deseas eliminar este producto del carrito?',
    () => {
      cart = cart.filter(item => item.id !== productId);
      updateCart();
      closeModal();
    }
  );
}

function clearCart() {
  if (cart.length === 0) return;
  
  showModal(
    'Vaciar carrito',
    '¿Estás seguro de que deseas vaciar todo el carrito?',
    () => {
      cart = [];
      updateCart();
      closeModal();
    }
  );
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  const newQuantity = item.quantity + change;
  
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  item.quantity = newQuantity;
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
    cartCount.textContent = '0';
    cartTotal.textContent = '0.00';
    return;
  }

  let total = 0;
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        <p class="cart-item-price">${item.price.toFixed(2)} €</p>
      </div>
      <div class="cart-item-controls">
        <button class="quantity-btn" data-id="${item.id}" data-change="-1">−</button>
        <span class="quantity">${item.quantity}</span>
        <button class="quantity-btn" data-id="${item.id}" data-change="1">+</button>
        <button class="remove-btn" data-id="${item.id}" aria-label="Eliminar">🗑️</button>
      </div>
      <div class="cart-item-total">${itemTotal.toFixed(2)} €</div>
    `;
    cartItems.appendChild(cartItem);
  });

  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartTotal.textContent = total.toFixed(2);

  document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      const change = parseInt(e.target.dataset.change);
      updateQuantity(productId, change);
    });
  });

  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      removeFromCart(productId);
    });
  });
}

function showModal(title, message, callback, autoClose = false) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modalCallback = callback;
  modalOverlay.classList.add('active');
  
  if (autoClose) {
    setTimeout(() => {
      closeModal();
    }, 2000);
  }
}

function closeModal() {
  modalOverlay.classList.remove('active');
  modalCallback = null;
}

cartToggle.addEventListener('click', () => {
  cartSidebar.classList.add('active');
});

cartClose.addEventListener('click', () => {
  cartSidebar.classList.remove('active');
});

clearCartBtn.addEventListener('click', clearCart);

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    showModal('Carrito vacío', 'Agrega productos al carrito antes de comprar.', null, true);
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  showModal(
    '¡Compra realizada!', 
    `Tu compra de ${total.toFixed(2)} € ha sido procesada con éxito. ¡Gracias por tu compra!`,
    () => {
      cart = [];
      updateCart();
      cartSidebar.classList.remove('active');
      closeModal();
    },
    false
  );
});

modalClose.addEventListener('click', closeModal);
modalCancel.addEventListener('click', closeModal);

modalConfirm.addEventListener('click', () => {
  if (modalCallback) {
    modalCallback();
  }
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

loadProducts();

