require('dotenv').config();

const api = require('./config/wooCommerce');

const getProducts = async (pageNumber, limit) => {
    try {
        
        const productsResponse = await api.get(`products?order=asc&orderby=title`);

        console.log("products", productsResponse.data);
        console.log("Number of productsResponse", productsResponse.data.length);

    } catch (error) {
        console.log(error);
    }

}

getProducts();