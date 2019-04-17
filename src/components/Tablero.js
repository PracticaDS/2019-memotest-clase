import React from 'react';
import { Ficha } from './Ficha';

export class Tablero extends React.Component {

  constructor(props) {
    super(props);
    //TODO: Falta agregar shuffle para contenidos mezclado
    this.state = {
      contenidosMezclados:
        props.contenidos.concat(props.contenidos),
      contenidosSeleccionados: []
    };
  }

  isBocaArriba(unContenido) {
    return this.state.contenidosSeleccionados.indexOf(unContenido) != -1;
  }

  seleccionarContenido(unContenidoSeleccionado) {
    this.setState({
      ...this.state,
      contenidosSeleccionados:
        this.state.contenidosSeleccionados.concat(
          unContenidoSeleccionado)
    })
  }

  render() {
    const fichas = this.state.contenidosMezclados.map(
      (unContenido, index) => <Ficha
        alDarseVuelta={this.seleccionarContenido.bind(this)}
        key={index}
        bocaArriba={this.isBocaArriba(unContenido)}
        contenido={unContenido} />
    );

    return <div>{fichas}</div>
  }

}