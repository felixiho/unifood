const apiUrl = process.env.NODE_ENV === "development" ? 
                    process.env.REACT_APP_DEV_API_URL : process.env.REACT_APP_PROD_API_URL;

/**
* @function getReviews
* @returns {JSON} response
* @param id
* @desc Returns the trending restaurants
*/
const getReviews = async(id) => {  
    const reviews = await fetch(`${apiUrl}api/ratings/${id}`);
    let data = await reviews.json();
    return data;
} 


/**
* @function handleComment
* @returns {JSON} response 
* @param {string}  type 
* @param {string}  id 
* @desc upvote, downvote or flag a comment
*/
const handleComment = async(type,id) => {  
    const handle = await fetch(`${apiUrl}api/handle-comment`, {
                        method: 'post',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "type": type,
                            "ratesId": id
                        })
                    });
    const data = await handle.json();
    return data;
} 



export  { getReviews, handleComment }