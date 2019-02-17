const axios = require('axios');

const getPosts = async () => {
    const posts = await axios.get('https://api.myjson.com/bins/hc5ye');
    return posts.data;
}
export default getPosts;