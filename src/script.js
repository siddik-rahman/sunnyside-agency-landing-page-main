const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
console.log(menuBtn);
console.log(mobileMenu);

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
