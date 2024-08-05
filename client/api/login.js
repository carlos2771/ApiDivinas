import { axiosClient } from "./axiosInstance";

export const createUserRerquest = async(data) => {
    const response = await axiosClient.post("/createUser", data)
    return response.data;
}

export const loginRerquest = async(data) => {
    const response = await axiosClient.post("/login", data)
    return response.data;
}