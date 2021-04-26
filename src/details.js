import { http } from './http.js';
import { ui } from './ui.js';
 
window.onload = () => {
	if(window.location.search !== '') {
		const id = window.location.search.split('=')[1];	
		http.get(`https://60827d705dbd2c0017579a8a.mockapi.io/api/v1/products?id=`+id )
		.then((data) =>  ui.showProductDetails(data));		
	}
}

