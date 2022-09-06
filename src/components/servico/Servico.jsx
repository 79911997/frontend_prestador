import React from "react";
import { useState } from "react"
import { Context } from "../pessoa/Pessoa"
import { useContext } from "react";
import { axios } from "axios";


function Servico() {

  const [values, setValues] = useState();


  const handleChargeValues = (value) => {
  setValues(prevValue=>({
  ...prevValue,
  [value.target.name]: value.target.value,
  }))
};

  const handleClickServico = () => {
    axios.post('http://localhost:3000/servicos', values);
  }

  return (
    <div className="servico-container">
      <div className="register--container">
        <h1>Cadastro de Servico</h1>
        <div>
          <input
            type="text"
            name="nome_servico"
            placeholder="nome_servico"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>

        <div>
          <input
            type="text"
            name="descrisao"
            placeholder="descrisao"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>

        <div>
          <input
            type="number"
            name="valor_hora"
            placeholder="valor_hora"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
       
        <div>
          <input
            type="text"
            name="nome_empresa"
            placeholder="nome_empresa"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="disponibilidade"
            placeholder="disponibilidade"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="local"
            placeholder="local"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="telefone"
            placeholder="telefone"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        </div>
        <br />
        <button className="register--input" type="button" onClick={() => handleClickServico }>Cadastrar</button>
      </div>
  );
}
export default Servico

