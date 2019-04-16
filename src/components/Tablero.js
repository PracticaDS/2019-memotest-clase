import React from 'react';
import { Ficha } from './Ficha';

export function Tablero(props) {
  const contenidosMezclados = 
    props.contenidos.concat(props.contenidos);

  const fichas = contenidosMezclados.map(
    (unContenido, index) => <Ficha key={index} contenido={unContenido} />
  );

  return <div>{fichas}</div>
}