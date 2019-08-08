import axios from 'axios';

// GET CREDITS
export function getCredits() {
    return axios.post("http://18.191.41.196:3001/goCredit/GoCreditPackages");
}