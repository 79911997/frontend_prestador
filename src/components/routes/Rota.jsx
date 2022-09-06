import { BrowserRouter, Route, Routes } from "react-router-dom";
import Servico from "../servico/servico";
import Pessoa from "../pessoa/Pessoa";
import Home from "../../home/componentes/Home";
import Header from "../../home/componentes/Header";
import Usuario from "../usuario/Usuario";
import Login from "../template/Login";

function Rota() {

return(
  
<BrowserRouter>
<Routes>
  <Route path="/" element={<Header />}>
    <Route index element={<Login/>} />
  </Route>
  <Route path="/login" element={<Login/>}>
    <Route path="novo" element={<Usuario/>} />
    <Route path="servicos" element={<Servico />} />
    <Route path="servicos/novo" element={<Servico />} />
    <Route path="servicos/:id" element={<Servico />} />
  </Route>
  <Route path="/admin" element={<Header />}>
    <Route path="clientes" element={<Pessoa />} />
    <Route path="clientes/novo" element={<Pessoa/>} />
    <Route path="clientes/:id" element={<Pessoa />} />
  </Route>
  <Route
    path="*"
    element={
      <main style={{ padding: "1rem" }}>
        <p>Esta página não existe.</p>
      </main>
    }
  />
</Routes>
</BrowserRouter>
)}
export default Rota