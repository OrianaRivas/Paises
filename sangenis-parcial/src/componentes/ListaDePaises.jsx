import React from "react";
import ItemDePais from "./ItemDePais";

function ListaDePaises({ paises }) {
  if (paises.length === 0) return <p>No hay resultados para mostrar.</p>;

  return (
    <ul>
      {paises.map((pais) => (
        <ItemDePais key={pais.name.common} pais={pais} />
      ))}
    </ul>
  );
}

export default ListaDePaises;
