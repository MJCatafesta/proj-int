import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeletarCategoria from "./components/Categorias/deletarCategorias/DeletarCategoria";
import FormularioCategoria from "./components/Categorias/formularioCategorias/FormularioCategoria";
import ListaCategorias from "./components/Categorias/listaCategorias/ListaCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ListaPostagens from "./components/postagens/listaPostagens/ListaPostagens";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastrar from "./pages/cadastro/Cadastrar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastrar />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/postagens" element={<ListaPostagens />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ AuthProvider>
  );
}

export default App;