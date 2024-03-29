import { http } from './http.js';
import { ui } from './ui.js';
import { uiFilter} from './uiFilter.js'
// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	// const http = new customHTTPMethods();
	http.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
		.then((data) => ui.showProducts(data));
}

// let searchInput =document.getElementById('search').addEventListener('change', () => {
// 	output.innerHTML = ''
// 	http
// 	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
// 	.then((data) => uiFilter.find(data))
// })
let searchInput =document.getElementById('search').addEventListener('change', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.findFilter(data))
})

let inStoc = document.getElementById('inStoc').addEventListener('click', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.stock(data))
})

let btn = document.querySelector('#fil')

btn.addEventListener('click', ()=> {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.cheap(data))
})

let filter2130 = document.getElementById('21-30').addEventListener('click', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.cheap2130(data))
})

let filter3140 = document.getElementById('31-40').addEventListener('click', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.cheap3140(data))
})

let filter4150 = document.getElementById('41-50').addEventListener('click', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.cheap4150(data))
})

let filter51 = document.getElementById('51').addEventListener('click', () => {
	output.innerHTML = ''
	http
	.get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
	.then((data) => uiFilter.cheap51(data))
})
