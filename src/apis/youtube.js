import axios from 'axios';

const KEY = 'AIzaSyDlo8BCbjcLZQ3kPnAeOMhAvQRd8McpEwg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});