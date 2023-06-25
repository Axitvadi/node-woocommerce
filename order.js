require('dotenv').config();

const api = require('./config/wooCommerce');

const getOrders = async (pageNumber, limit) => {
    try {
        const startDate = new Date('2022-12-12').toISOString();
        const endDate = new Date('2022-12-29').toISOString();
        const perPageLimit = limit ? limit : 5; //limit of order per page
        const page = pageNumber ? pageNumber : 1; // number of page

        const { data } = await api.get(`orders?after=${startDate}&before=${endDate}&order=asc&per_page=${perPageLimit}&page=${page}`);

        console.log("Orders", data);
        console.log("Number of orders", data.length);

    } catch (error) {
        console.log(error);
    }

}

getOrders(2, 5); // add a page number and order limit to get a orders of that page