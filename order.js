require('dotenv').config();

const api = require('./config/wooCommerce');

const getOrders = async (pageNumber, limit) => {
    try {
        const startDate = new Date('2022-12-12').toISOString();
        const lastDate = new Date('2022-12-29').toISOString();
        const perPageLImit = limit ? limit : 5; //limit of order per page
        const page = pageNumber ? pageNumber : 1; // number of page

        const ordersResponse = await api.get(`orders?after=${startDate}&before=${lastDate}&order=asc&per_page=${perPageLImit}&page=${page}`);

        console.log("orders", ordersResponse.data);
        console.log("Number of orders", ordersResponse.data.length);

    } catch (error) {
        console.log(error);
    }

}

getOrders(2, 5); // add a page number and order limit to get a orders of that page