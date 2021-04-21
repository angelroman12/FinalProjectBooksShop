import { addProductsInLocalStorage, updateQuantityInLocalStorage, getElementFromLocalStorage, removeElementFromLocalStorage } from './localStorage.js';
class UI {
	constructor() {		
		this.productsDiv = document.getElementById('output');		
		this.picture = document.getElementById('picture');
		this.author = document.getElementById('author');
		this.title = document.getElementById('title');
		this.id = document.getElementById('id');
		this.price = document.getElementById('price');		
		this.description = document.getElementById('description');
		this.tableBody = document.getElementById('table-body');
        this.cartBody = document.getElementById('cart-body');
		this.quantity = document.getElementById('quantity');
        this.total = document.getElementById('total');
        this.subtotal = document.getElementById('subtotal');
	}
	// Get products on index page
	showProducts(products) {
		let output = '';
		products.forEach((product) => {
            output =
			`
            <div class="card">
            <a href="details.html?id=${product.id}" ><img src="${product.picture}"> </a>
            <h4> ${product.author}</h4>
            <h5>${product.title}</h5>
            <p>${product.price} ${product.curency} </p> 
        	<a href="details.html?id=${product.id}"> <button class="det add-cart"> Details</button> </a>					
            </div>            
            `;
			this.productsDiv.innerHTML += output;
		});
	}
	// Get products on admin page	
	showProductsAdmin(products) {
		let output = '';
		products.forEach((product) => {
            output =
            `<div class="adminTable"> 
				<img class="img" src="${product.picture}">
				<h3>${product.author}</h3> 
				<h4>${product.title}</h4> 
				<h5>${product.price}</h5> 
				<button class="delete" id=${product.id} > Remove </button> </td>				
			</div>		
            `;
			this.productsDiv.innerHTML += output;
		});
	}
	showProductDetails(products){	
		
		let output = '';
		products.forEach((product) => {
			output += 
			`<div class="details">		
					<div class="bookPic">
						<img src=${product.picture}>
						<div><p>${product.stoc}</p>	</div>
					</div>
					<div class="bookDescription">
						<h5>Descriere:</h5><p>  ${product.details} </p>					
						<h4> <span>Pret:</span> ${product.price} RON</h4>		
						<button class="btn addToCart"  id="addProductToCart" ${product.id} > Add To Cart  <i class="fas fa-shopping-cart"></i></button>		
						<input type="Number" value="1" id="quantity">	
					</div>
					<div class="bookDetails">					
						<h5> <span>Autor:</span> ${product.author}</h5>
						<h5> <span>Titlu:</span> ${product.title}</h5>
						<h5> <span>Pagini:</span> ${product.pages}</h5>
						<h5> <span>Coperta:</span> ${product.coperta}</h5>
									
					</div>		
			</div>
			`;	
			this.productsDiv.innerHTML = output;		
			
			addProductToCart.addEventListener('click', () => {
			let count = parseInt(quantity.value);
			if (isNaN(count)) {
				count = 1;
			}
			addProductsInLocalStorage(product, count);
			alert("Produsul a fost adaugat in cos")

		  });	
			  
		});
	 
	}
	showProductsAdmin(products) {
		let output = '';
		products.forEach((product) => {
            output +=
            `<div class="adminTable"> 
				<img class="img" src="${product.picture}">
				<h3>${product.author}</h3> 
				<h4>${product.title}</h4> 
				<h5>${product.price} RON</h5> 
				<button class="delete" id=${product.id} > Remove </button> </td>				
			</div>		
            `;
			this.productsDiv.innerHTML = output;
		});
    }
    showProductsCart(storageItems) {
        let output = '';
        storageItems.forEach((item) => {
            output = `
            <table id="table-cart">
                <tbody> 
                    <tr class="cartRows">
                        <td><img src="${item.product.picture}" class="admin-card-img"/></td>
                        <td><button onclick="window.location.href='details.html?id=${item.product.id}'" class="title">${item.product.title}</button></td>                       
                        <td>${item.product.price} RON</td>
                        <td><input value=${item.count} id="quantity" type="number" min="1" max="10"/></td>
                        <td id="subtotal">${item.product.price*item.count} RON </td>
                        <td><button id=${item.product.id} type="button" class="card-button delete"> <i class="far fa-trash-alt" id=${item.product.id}></i></button></td>
                    </tr>
                </tbody>   
            </table> 
            `     
            this.cartBody.innerHTML += output;
        });
        let inputFields = document.querySelectorAll("input");
        inputFields.forEach( (inputElement) => {
            let row = inputElement.parentElement.parentElement;
            let removeButton = row.lastElementChild.firstElementChild;
            let productId = removeButton.id;
            inputElement.addEventListener('change', (e) => {
                let count = parseInt(e.target.value);
                if(!isNaN(count) && count > 0) {
                    updateQuantityInLocalStorage(productId, count);
                    return window.location.reload();
                } else {
                    let storageElement = getElementFromLocalStorage(productId);
                    e.target.value = storageElement.count;
                }
            });  
            
            removeButton.addEventListener('click', (e) => {
                removeElementFromLocalStorage(e.target.id);
                row.remove();
                    return window.location.reload();
                });
            });  
        }
    	
	
}
export const ui = new UI();
