document.addEventListener('DOMContentLoaded', addbooks);
function addbooks() {
	fetch('http://localhost:3000/products')
		.then((res) => {
			return res.json();
		})
		.then((products) => {
			let output = '';
			products.map((product) => {
                output +=
	        	`<div class="shelf">
				<div class="card">
                <img src="${product.picture}">
                <h4> ${product.author}</h4>
                <h5>${product.title}</h5>
                <p>${product.price}</p> 
                <button class="det">Details</button>								
				</div>
				</div>
                `;
			});
			document.getElementById('output').innerHTML += output;
		});
}



// class customHTTPMethods {
//     async get('http://localhost:3000/products'){
//         const response = await fetch('http://localhost:3000/products');
//         const data = await response.json();
//         return data;
//     }
// }