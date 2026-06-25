document.addEventListener("DOMContentLoaded", () => {
    // Cart functionality
    let cart = [];

    function updateCartUI() {
        let cartCount = document.querySelector(".cart-icon");
        cartCount.innerText = `🛒 (${cart.length})`;
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            let productCard = event.target.closest(".product-card");
            let productName = productCard.querySelector("h3").innerText;
            let productPrice = productCard.querySelector("p").innerText;

            cart.push({ name: productName, price: productPrice });
            updateCartUI();
            alert(`${productName} has been added to your cart!`);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Login & Signup Modal
    let loginModal = document.getElementById("loginModal");
    let signupModal = document.getElementById("signupModal");

    document.getElementById("loginBtn").addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    document.getElementById("signupBtn").addEventListener("click", () => {
        signupModal.style.display = "block";
    });

    document.querySelectorAll(".close").forEach(closeBtn => {
        closeBtn.addEventListener("click", () => {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target === signupModal) {
            signupModal.style.display = "none";
        }
    });
});
