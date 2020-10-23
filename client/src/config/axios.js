import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://riankanban.herokuapp.com/'
})

export default instance