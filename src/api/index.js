import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export const getAllCompetitors = () => api.get(`/competitors`)
export const getCompetitorById = id => api.get(`/competitor/${id}`)
export const createCompetition = () => api.get(`/competition`).then(res => {return res.data})

const apis = {
    getAllCompetitors,
    getCompetitorById,
    createCompetition
}

export default apis