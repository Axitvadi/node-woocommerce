require('dotenv').config();

const api = require('./config/wooCommerce');

const getProducts = async (pageNumber, limit) => {
    try {
        
        const { data } = await api.get(`products?order=asc&orderby=title`);

        console.log("Products", data);
        console.log("Number of products", data.length);

    } catch (error) {
        console.log(error);
    }

}

getProducts();