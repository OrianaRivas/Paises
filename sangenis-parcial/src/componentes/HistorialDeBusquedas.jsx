import React from "react";

function HistorialDeBusquedas({ historial, onClear }) {
  if (historial.length === 0) return <p>No hay búsquedas recientes.</p>;

  return (
    <div>
      <h3>Historial de búsquedas</h3>
      <ul>
        {historial.map((pais, index) => (
          <li key={index}>{pais}</li>
        ))}
      </ul>
      <button onClick={onClear}>Limpiar historial</button>
    </div>
  );
}

export default HistorialDeBusquedas;
