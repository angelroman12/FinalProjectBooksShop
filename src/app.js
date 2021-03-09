import { http } from './http.js';
import { ui } from './ui.js';
// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	// const http = new customHTTPMethods();
	http
		.get('http://localhost:3000/products')
		.then((data) => ui.showProducts(data));
}

// Add product to db
// document.getElementById('submit').addEventListener('click', addNewProduct);

// function addNewProduct() {
// 	const idNumber = document.getElementById('idNumber').value;
// 	const img = document.getElementById('img').value;
// 	const author = document.getElementById('author').value;
// 	const title = document.getElementById('title').value;
// 	const price = document.getElementById('price').value;
// 	const pages = document.getElementById('pages').value;
// 	const descriptionValue = document.getElementById('description').value;

// 	let product = {
// 		title: idNumber,
// 		img: img,
// 		author: author,
// 		price: price,
// 		title: title,
// 		pages: pages,
// 		description: descriptionValue,
// 	};

// 	http
// 		.post('http://localhost:3000/products', product)
// 		.then((data) => getProducts());
// }

// document.getElementById('products').addEventListener('click', deleteProduct);

// function deleteProduct(e) {
// 	if (e.target.classList.contains('delete')) {
// 		const id = e.target.id;
// 		http
// 			.delete(`http://localhost:3000/products/${id}`)
// 			.then((data) => getProducts())
// 			.catch('Error on delete!');
// 	}
// }


