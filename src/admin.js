import { http } from './http.js';
import { ui } from './ui.js';
// Load products 
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	http
		.get('http://localhost:3000/products')
		.then((data) => ui.showProductsAdmin(data));
}

// Add new product 
document.getElementById('submit').addEventListener('click', addNewProduct);

function addNewProduct() {

	const picture = document.getElementById('picture').value;
	const author = document.getElementById('author').value;
	const title = document.getElementById('title').value;
	const price = document.getElementById('price').value;
	const pages = document.getElementById('pages').value;
	const descriptionValue = document.getElementById('description').value;

	let product = {	
		picture: picture,
		author: author,
		price: price,
		title: title,
		pages: pages,
		description: descriptionValue,
	};

	http
		.post('http://localhost:3000/products', product)
		.then((data) => getProducts());	
		alert("Produsul a fost adaugat")		
}

// Delete product
document.getElementById('output').addEventListener('click', deleteProduct);

function deleteProduct(e) {
	if (e.target.classList.contains('delete')) {
		const id = e.target.id;
		http
			.delete(`http://localhost:3000/products/${id}`)
			.then((data) => getProducts())
			.catch('Error on delete!');
			alert("Produsul a fost sters")		
	}
	
}