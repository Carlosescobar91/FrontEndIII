//Aqui deberias escribir tus funciones de validacion
import Card from './Card';
import React, { useState } from "react";

function App() {
  const [valorInput1, setValorInput1] = useState("");
  const [valorInput2, setValorInput2] = useState("");
  const [hayError, setHayError] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!valorInput1.trim() || !valorInput2.trim()) {
      setHayError(true);
      return;
    }
    if (/^\s/.test(valorInput1) || valorInput1.length < 3) {
      setHayError(true);
      return;
    }
    if (valorInput2.length < 6) {
      setHayError(true);
      return;
    }

    setHayError(false);
    setEnviado(true);
  };

  const handleInput1Change = (event) => {
    const nuevoValor = event.target.value;
    setValorInput1(nuevoValor);
  };

  const handleInput2Change = (event) => {
    const nuevoValor = event.target.value;
    setValorInput2(nuevoValor);
  };

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <div>
            <div className="center-div">
              <label>
                Ingresa tu nombre:
                <input
                  type="text"
                  value={valorInput1}
                  onChange={handleInput1Change}
                />
              </label>
            </div>
            <div className="center-div">
              <label>
                Que estudias:
                <input
                  type="text"
                  value={valorInput2}
                  onChange={handleInput2Change}
                />
              </label>
            </div>
            <div className="center-div">
              <button type="submit">Enviar</button>
            </div>
          </div>
          {hayError && <p>Por favor chequea que la información sea correcta</p>}
        </form>
      ) : (
        <Card  dataInput1={valorInput1} dataInput2={valorInput2}/>
      )}
    </div>
  );
}

export default App;
