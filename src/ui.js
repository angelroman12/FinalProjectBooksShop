class UI {
	constructor() {		
		this.productsDiv = document.getElementById('output');		
		this.picture = document.getElementById('picture');
		this.author = document.getElementById('author');
		this.title = document.getElementById('title');
		this.id = document.getElementById('id');
		this.price = document.getElementById('price');		
		this.description = document.getElementById('description');
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
        	<a href="details.html?id=${product.id}"> <button class="det"> Details</button> </a>					
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

	showProductDetails(products){
		let output = '';
		products.forEach((product) => {
			output += 
			`<div class="details">	
				<div class="picAndDetails">
					<div class="bookPic">
						<img src=${product.picture}>
						<div><p>${product.stoc}</p>	</div>
					</div>	

					<div class="bookDescription">
						<h4>Descriere:</h4><p>  ${product.details} </p>
						<button class="" > Add To Cart  <i class="fas fa-shopping-cart"></i></button>					
					</div>
				</div>

				<div class="bookDetails">					
					<h3> <span>Autor:</span> ${product.author}</h3>
					<h3> <span>Titlu:</span> ${product.title}</h3>
					<h3> <span>Pagini:</span> ${product.pages}</h3>
					<h3> <span>Coperta:</span> ${product.coperta}</h3>
					<h3> <span>Pret:</span> ${product.price}</h3>			
				</div>
				
			</div>
			`;	
			this.productsDiv.innerHTML = output;
		});
	}
		
}

export const ui = new UI();
