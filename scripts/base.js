window.addEventListener("load", () => {
	updateCartCounter();
});

function addToCart(itemID) {
	let userCart = sessionStorage.getItem("cart");
	if (userCart == null) {
		sessionStorage.setItem("cart", 1);
	} else {
		sessionStorage.setItem("cart", ++userCart);
	}
	updateCartCounter();
}

function updateCartCounter() {
	cartQty = document.getElementById("cartQty");
	let userCart = sessionStorage.getItem("cart");
	if (userCart != null) {
		cartQty.innerText = userCart;
	} else {
		cartQty.innerText = 0;
	}
}
