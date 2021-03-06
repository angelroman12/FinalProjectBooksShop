class customHTTPMethods {
    async get('http://localhost:3000/products'){
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        return data;
    }
}

export const http = new customHTTPMethods();