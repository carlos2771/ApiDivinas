import { useContext } from "react"
import { ProductosContext } from "../context/ProductosContext"


export const useProductos = () => {
    const context = useContext(ProductosContext)
    if(!context)
        throw new Error(
    "No estas usando Context adecuadamente")
    return context
}