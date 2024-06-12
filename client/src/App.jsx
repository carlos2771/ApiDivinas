import SideNavBar from "./SideNavBar/SideNavBar";
import { Routes, Route } from "react-router-dom";
import { ProductosProvider } from "./context/ProductosContext";
import FormProductos from "./pages/FormProductos";
import "./App.css";  // Asegúrate de importar el archivo CSS

function App() {
  return (
    <div className="app-container">
      <ProductosProvider>
        <div className="main-layout">
          <SideNavBar />
          <div className="content">
            <Routes>
              <Route path="Formulario" element={<FormProductos />} />
            </Routes>
          </div>
        </div>
      </ProductosProvider>
    </div>
  );
}

export default App;
