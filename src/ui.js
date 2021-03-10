class UI {
	constructor() {		
		this.productsDiv = document.getElementById('output');		
		this.picture = document.getElementById('picture');
		this.author = document.getElementById('author');
		this.title = document.getElementById('title');
		this.price = document.getElementById('price');		
		this.descriptionValue = document.getElementById('description');
	}

	// Get products on index page

	showProducts(products) {
		let output = '';
		products.forEach((product) => {
            output +=
            `
            <div class="card">
            <img src="${product.picture}">
            <h4> ${product.author}</h4>
            <h5>${product.title}</h5>
            <p>${product.price}</p> 
            <button class="det" id=${product.id}>Details</button>								
            </div>
            
            `;
			this.productsDiv.innerHTML = output;
		});
	}

	// Get products on admin page 
	
	showProductsAdmin(products) {
		let output = '';
		products.forEach((product) => {
            output +=
            `<div class="adminTable"> 
				<img class="img" src="${product.picture}">
				<h3>${product.author}</h3> 
				<h4>${product.title}</h4> 
				<h5>${product.price}</h5> 
				<button class="delete" id=${product.id}> Remove </button> </td>				
			</div>
				
            `;
			this.productsDiv.innerHTML = output;
		});
	}
		
}

export const ui = new UI();
