
const apiUrl = process.env.NODE_ENV === "development" ? 
                    process.env.REACT_APP_DEV_API_URL : process.env.REACT_APP_PROD_API_URL;
            

/**
 * @function getTrending 
 * @returns {JSON} response
 * @desc Returns the trending restaurants
 */
const getTrending = async() => {  
    const trending = await fetch(apiUrl+"api/trending");
    let data = await trending.json();
    return data;
}


export  { getTrending }