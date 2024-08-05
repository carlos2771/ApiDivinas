import {  useState } from "react"
import { createContext } from 'react';
import { createProductosRequest, getProductosRequest } from "../../api/productos";
import PropTypes from 'prop-types';
export const ProductosContext = createContext()

export const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState([])

    const getProductos = async() =>{
        try {
            const res = await getProductosRequest();
            console.log(res);
            setProductos(res)
        } catch (error) {
            console.error("error en la solicitud de get productos",error);
        }
    }
    
    const createProductos = async(data) =>{
        try {
            const res = await createProductosRequest(data);
            console.log(res);
            setProductos(res)
        } catch (error) {
            console.error("error en la solicitud de crear productos",error);
        }
    }

    return (
<ProductosContext.Provider
value={{
    productos,
    getProductos,
    createProductos
}}
>
{children}

</ProductosContext.Provider>
)
}
ProductosProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


