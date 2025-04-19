import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'5343937ddad0433aa21ac917592433db'
    }
})


