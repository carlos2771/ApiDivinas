import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export const useLogin = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("No estás usando Context adecuadamente");
    }
    return context;
};
