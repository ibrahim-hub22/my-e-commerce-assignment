const mainImage =
document.getElementById("mainImage") as HTMLImageElement;
const Card =
document.querySelectorAll<HTMLImageElement>(".card"); 
Card.forEach((Img)=>{
  Img.addEventListener("click", () => {
    mainImage.src =Img.src;
    Card.forEach(img => img.classList.remove("active"));
    Img.classList.add("active")
 });
});

    // ✅ Quantity controls
let quantity = 1;
const quantitySpan = document.getElementById("quantity") as HTMLElement;
const increaseBtn = document.getElementById("increase") as HTMLButtonElement;
const decreaseBtn = document.getElementById("decrease") as HTMLButtonElement;

increaseBtn.addEventListener("click", () => {
  quantity++;
  quantitySpan.textContent = quantity.toString();
});

decreaseBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity.toString();
  }
});

// ✅ Cart logic
const CartBtn = document.getElementById("addToCart") as HTMLButtonElement;
const cartItemsContainer = document.getElementById("cartItems") as HTMLElement;
const cartCount = document.getElementById("cartCount") as HTMLElement;
const cartDropdown = document.getElementById("cartDropdown") as HTMLElement;
const cartIcon = document.getElementById("cartIcon") as HTMLElement;

let cartCountNumber = 0;

CartBtn.addEventListener("click", () => {
  cartCountNumber += quantity;
  cartCount.textContent = cartCountNumber.toString();

  const price = 125;
  const total = price * cartCountNumber;

  cartItemsContainer.innerHTML = `
    <div class="cart-item">
      <span>Fall Limited Edition Sneakers x ${cartCountNumber}</span>
      <span>$${total}.00</span>
      <button id="removeItem">🗑</button>
    </div>
  `;

  // ✅ Remove button
  const removeBtn = document.getElementById("removeItem") as HTMLButtonElement;
  removeBtn.addEventListener("click", () => {
    cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
    cartCountNumber = 0;
    cartCount.textContent = "0";
  });
});

cartIcon.addEventListener("click", () => {
  cartDropdown.style.display = 
    cartDropdown.style.display === "block" ? "none" : "block";
});

// ✅ Sidebar (mobile menu)
const sidebar = document.getElementById("sidebar") as HTMLElement;
const hamburger = document.getElementById("hamburger") as HTMLElement;
const closeSidebar = document.getElementById("closeSidebar") as HTMLElement;

hamburger.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

closeSidebar.addEventListener("click", () => {
  sidebar.style.display = "none";
});
  



