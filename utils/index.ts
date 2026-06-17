import axios from 'axios';

export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': '54021d9bbemsh2ba32fc6b40d7a4p12d8fejsnefca34a63824',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model?corolla', { headers });
    const result = await response.json();
    return result;
}

export async function getCars() {
    
const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?modal?corolla',
    params: { model: 'corolla' },
    headers: {
        'x-rapidapi-key': '54021d9bbemsh2ba32fc6b40d7a4p12d8fejsnefca34a63824',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

 try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error,"error here");
}   
}