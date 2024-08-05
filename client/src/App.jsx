import SideNavBar from "./SideNavBar/SideNavBar";
import { Routes, Route } from "react-router-dom";
import { ProductosProvider } from "./context/ProductosContext";
import FormProductos from "./pages/FormProductos";
import "./App.css";  // Asegúrate de importar el archivo CSS
import LoginForm from "./pages/LoginForm";
import { LoginProvider } from "./context/LoginContext";


function App() {
 
  
  return (
    <LoginProvider>
      <ProductosProvider>
        <div className="app-container">
          <div className="main-layout">
             <SideNavBar />
            <div className="content">
              <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/Formulario" element={<FormProductos />} />
              </Routes>
            </div>
          </div>
        </div>
      </ProductosProvider>
    </LoginProvider>
  );
}

export default App;
