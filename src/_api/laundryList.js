import axios from 'axios';

export function getLaundryList(area) {
    return axios.post("http://18.191.41.196:3001/provider/getProviderByArea", {
        area: area
    });
};

export function getLaundryListItem(id) {
    return axios.get(`http://3.17.131.25:3001/provider/${id}`);
}

// GET PROVIDER ITEMS LIST
export function getProviderItems(id) {
    return axios.get(`http://18.191.41.196:3001/item/GetItemHierarchyData/${id}`)
}

// GET PROVIDER PRICE TAB
export function getPriceTab(id) {
    return axios.get(`http://18.191.41.196:3001/item/GetPriceTabData/${id}`);
}

// GET REVIEWS
export function getItemReviews(itemId) {
    return axios.post("http://18.191.41.196:3001/reviews/GetReviews", {
        getBy:[{"providerId":itemId}],
        startRow: "0",
        endRow: "100",
        sortBy: "orderId",
        userType: "PRO"
    });
};