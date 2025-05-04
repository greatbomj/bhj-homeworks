document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product__quantity-control').forEach(control => {
        control.addEventListener('click', function() {
            const quantityControls = this.closest('.product__quantity-controls');
            const valueElement = quantityControls.querySelector('.product__quantity-value');
            let value = parseInt(valueElement.textContent);
            
            if (this.classList.contains('product__quantity-control_dec')) {
                value = Math.max(1, value - 1);
            } else if (this.classList.contains('product__quantity-control_inc')) {
                value += 1;
            }
            
            valueElement.textContent = value;
        });
    });
    
    document.querySelectorAll('.product__add').forEach(addButton => {
        addButton.addEventListener('click', function() {
            const product = this.closest('.product');
            const productId = product.getAttribute('data-id');
            const productImage = product.querySelector('.product__image').src;
            const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
            
            addToCart(productId, productImage, quantity);
        });
    });
    
    function addToCart(productId, productImage, quantity) {
        const cartProducts = document.querySelector('.cart__products');
        const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        
        if (existingProduct) {
            const countElement = existingProduct.querySelector('.cart__product-count');
            const currentCount = parseInt(countElement.textContent);
            countElement.textContent = currentCount + quantity;
        } else {
            const cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.setAttribute('data-id', productId);
            
            const cartProductImage = document.createElement('img');
            cartProductImage.className = 'cart__product-image';
            cartProductImage.src = productImage;
            
            const cartProductCount = document.createElement('div');
            cartProductCount.className = 'cart__product-count';
            cartProductCount.textContent = quantity;
            
            cartProduct.appendChild(cartProductImage);
            cartProduct.appendChild(cartProductCount);
            
            cartProducts.appendChild(cartProduct);
        }
    }
});