function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// cart section
const removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
            const item = button.closest('.cart-item');
            item.remove();
            // Update the cart total here
    });
});




