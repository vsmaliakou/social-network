import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "15f7a0a9-64c3-4a6a-9f8f-a55a7d8541a6"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        )
    }
}

