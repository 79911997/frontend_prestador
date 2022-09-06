import React from "react";
import { useState } from "react"
import axios from "axios";


function Pessoa({children}) {

  const [values, setValues] = useState();


  const handleChargeValues = (value) => {
  setValues(prevValue=>({
  ...prevValue,
  [value.target.name]: value.target.value,
  }))
};
  const handleClickPessoa = () => {
    axios.post('http://localhost:3000/pessoas', values);
  console.log(values)
  }
  return (
    <div className="pessoa-container">
      <div className="register--container">
        <h1>Cadastro de Pessoa</h1>
        <div>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>

        <div>
          <input
            type="text"
            name="sobrenome"
            placeholder="sobrenome"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>

        <div>
          <input
            type="text"
            name="cpf"
            placeholder="cpf"
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
        <div>
          <input
            type="text"
            name="endereco"
            placeholder="endereco"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="number"
            name="numero"
            placeholder="numero"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="cidade"
            placeholder="cidade"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="cep"
            placeholder="cep"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <br />
        <button className="register--input" type="button" onClick={() => handleClickPessoa ()}>Cadastrar</button>
      </div>
    </div>
  );
}

export default Pessoa;
