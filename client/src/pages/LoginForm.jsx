import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import "./LoginForm.css"
import { useEffect } from "react";
import Swal from "sweetalert2";


export default function LoginForm() {
 const navigate = useNavigate()
 const { login, errors: signinErrors,  isAuthenticated} = useLogin()
 const {register,handleSubmit} = useForm()



 const onSubmit = handleSubmit(async (data) => {
  console.log("los datos",data);
   login(data)
 
 })

 useEffect(() => {
  if (isAuthenticated) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Bienvenid@",
    });
    navigate('/Formulario');
  }
}, [isAuthenticated]);

  return (
    <div className="formulario-container-login">
    <div  className="formulario-login">
      <form onSubmit={onSubmit}>
      {
       signinErrors.map((error, i ) => (
        <p  key={i}>
          {error}
        </p>
      ))
      }
      <div className="formulario-textos-login">
      <input 
      type="email"
      placeholder="email"
      {...register("email")}
      />
      <input 
      type="password"
      placeholder="contraseña"
      {...register("password")}
      />


     <input type="submit" placeholder="Confirmar" />
    </div>
      </form>

    </div>
    </div>
  );
}
