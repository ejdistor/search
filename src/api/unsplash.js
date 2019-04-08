import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e0b108facdaf24f84ff6b9c1fbd62942d6b2e6c4db58ffb1ca4c08f2da851ae7'
    }
});