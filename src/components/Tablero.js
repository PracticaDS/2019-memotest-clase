import React from 'react';
import { Ficha } from './Ficha';

//TODO: Manejar el estado de las fichas aquí
export function Tablero(props) {
  const contenidosMezclados = 
    props.contenidos.concat(props.contenidos);

  //TODO: Falta agregar shuffle para contenidos mezclados

  const fichas = contenidosMezclados.map(
    (unContenido, index) => <Ficha 
      alDarseVuelta={(contenido) => 
        console.log("ficha dada vuelta: " + contenido)}
      key={index} 
      contenido={unContenido} />
  );

  return <div>{fichas}</div>
}