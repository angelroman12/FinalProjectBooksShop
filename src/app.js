import { http } from './http.js';
import { ui } from './ui.js';
// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	// const http = new customHTTPMethods();
	http
		.get('https://60827d705dbd2c0017579a8a.mockapi.io/api/v1/products')
		.then((data) => ui.showProducts(data));
}

