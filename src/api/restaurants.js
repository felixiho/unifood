const apiUrl = process.env.NODE_ENV === "development" ? 
                    process.env.REACT_APP_DEV_API_URL : process.env.REACT_APP_PROD_API_URL;

/**
* @function getRestaurant
* @returns {JSON} response
* @param id
* @desc Returns the trending restaurants
*/
const getRestaurant = async(id) => {  
    const restaurant = await fetch(`${apiUrl}api/restaurant/${id}`);
    let data = await restaurant.json();
    return data;
}

/**
* @function getRateCount
* @returns {JSON} response
* @param id
* @desc Returns the count of the rates
*/
const getRateCount = async(id) => {  
    const restaurant = await fetch(`${apiUrl}api/rateCount/${id}`);
    let data = await restaurant.json();
    return data;
}


export  { getRestaurant, getRateCount }