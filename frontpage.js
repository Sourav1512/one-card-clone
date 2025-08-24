// ===== AMAZON CLONE JS ===== //

// Search Functionality
document.querySelector(".search-icon").addEventListener("click", () => {
    const query = document.querySelector(".search-input").value.trim();
    if (query) {
        alert(`🔍 You searched for: ${query}`);
    } else {
        alert("⚠️ Please type something to search!");
    }
});

// Back to Top Function
document.querySelector(".foot-panel1").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show alert when clicking cart
document.querySelector(".nav-cart").addEventListener("click", () => {
    alert("🛒 Your cart is empty right now!");
});

// Sign In alert
document.querySelector(".nav-signin").addEventListener("click", () => {
    alert("👤 Sign In functionality coming soon!");
});

// Return & Orders alert
document.querySelector(".nav-return").addEventListener("click", () => {
    alert("📦 Return & Orders page coming soon!");
});

// See More (for each product box)
const seeMore = document.querySelectorAll(".box-content p");
seeMore.forEach(item => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
        let product = item.parentElement.querySelector("h2").innerText;
        alert(`ℹ️ More details about: ${product}`);
    });
});

// Menu button (hamburger)
document.querySelector(".panel-all").addEventListener("click", () => {
    alert("📂 Side menu will be available soon!");
});
