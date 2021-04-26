import { http } from './http.js';
import { ui } from './ui.js';
// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	// const http = new customHTTPMethods();
	http.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
		.then((data) => ui.showProducts(data));
}

