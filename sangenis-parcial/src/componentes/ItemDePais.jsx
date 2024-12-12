import React from "react";

function ItemDePais({ pais }) {
  return (
    <li>
      <h3>{pais.name.common}</h3>
      <p>
        <strong>Capital:</strong> {pais.capital ? pais.capital[0] : "N/A"}
      </p>
      <p>
        <strong>Población:</strong> {pais.population.toLocaleString()}
      </p>
      <img
        src={pais.flags.svg}
        alt={`Bandera de ${pais.name.common}`}
        style={{ width: "100px", height: "auto" }}
      />
    </li>
  );
}

export default ItemDePais;
