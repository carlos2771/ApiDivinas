import { axiosClient } from "./axiosInstance";

export const getProductosRequest = async() =>{
    const response = await axiosClient.get("/productos")
    console.log("datos",response);
    return response.data
}
export const createProductosRequest = async(data) =>{
    const response = await axiosClient.post("/productos",data)
    console.log("datos",response);
    return response.data
}