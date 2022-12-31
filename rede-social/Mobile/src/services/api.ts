import axios from 'axios'

export default axios.create({
    baseURL: "http://192.168.0.81:4000/v1"
})