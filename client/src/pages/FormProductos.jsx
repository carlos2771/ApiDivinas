import { useForm } from "react-hook-form";
import { useProductos } from "../hooks/useProductos";
import "./FormProductos.css";

export default function FormProductos() {
  const { createProductos, getProductos } = useProductos();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    
    e.preventDefault();
    const formData = new FormData();

    // Agrega los datos del formulario a formData
    formData.append("nombre", data.nombre);
    formData.append("tipo", data.tipo);
    formData.append("precio", data.precio);
    formData.append("descripcion", data.descripcion);

    // Agrega el archivo de imagen a formData
    if (data.img[0]) {
      formData.append("img", data.img[0]);
    }

    console.log("antes", formData);

    const res = await createProductos(formData);
    if (res) {
     
      getProductos();
      }
      };
  

  return (
    <div className="formulario-container">
      <div className="formulario">
        <h1 className="formulario-titulo">Agregar Productos</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formulario-textos">
          <div>
          <p>Nombre</p>
          <input type="text" {...register("nombre")} placeholder="Nombre"/>
          </div>
         
           <div>
           <p>Precio</p>
           <input type="number" {...register("precio")} placeholder="Precio"/>
           </div>
          
          </div>

          <div className="">
          <p>Descripcion</p>
            <select {...register("tipo")}>
              <option value="">Selecione Tipo</option>
              <option value="Cabello">Capilares</option>
              <option value="Uñas">Uñas</option>
              <option value="Belleza">Belleza</option>
            </select>
          </div>
          <div >
            <textarea type="text" {...register("descripcion")} placeholder="Descripción" className="descripcion"/>
          </div>
          <div className="">
            <p>Agregar archivo</p>
            <input type="file" {...register("img")} />
          </div>

          <div className="">
            <input  type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
