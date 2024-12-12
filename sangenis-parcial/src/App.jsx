import React, { useState, useEffect } from "react";
import ListaDePaises from "./componentes/ListaDePaises";
import HistorialDeBusquedas from "./componentes/HistorialDeBusquedas";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [paises, setPaises] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const buscarPais = async () => {
      if (busqueda.trim() !== "") {
        try {
          const respuesta = await fetch(
            `https://restcountries.com/v3.1/name/${busqueda}`
          );
          const datos = await respuesta.json();
          setPaises(datos);
          if (datos.length > 0) {
            const pais = datos[0].name.common;
            if (!historial.includes(pais)) {
              setHistorial([...historial, pais]);
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const nuevoTimeoutId = setTimeout(buscarPais, 500);
    setTimeoutId(nuevoTimeoutId);
  }, [busqueda]);

  const manejarBusqueda = (evento) => {
    setBusqueda(evento.target.value);
  };

  const manejarLimpiarHistorial = () => {
    setHistorial([]);
  };

  return (
    <div>
      <h1>Buscar País</h1>
      <input
        type="text"
        value={busqueda}
        onChange={manejarBusqueda}
        placeholder="Ingrese el nombre del país"
      />
      {paises.length === 0 ? (
        <p>No hay resultados para mostrar.</p>
      ) : (
        <ListaDePaises paises={paises} />
      )}
      <HistorialDeBusquedas
        historial={historial}
        onClear={manejarLimpiarHistorial}
      />
    </div>
  );
}

export default App;
