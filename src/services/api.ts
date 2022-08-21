import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-finances-service-api.herokuapp.com'
})

export default api