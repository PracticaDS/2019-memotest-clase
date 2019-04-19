import React from 'react';
import { Ficha } from './Ficha';
import _ from 'lodash';
import './Tablero.css'
import { PropTypes } from 'prop-types';

export class Tablero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contenidosMezclados: _.shuffle(props.contenidos.concat(props.contenidos)),
      contenidosSeleccionados: []
    };
  }

  isBocaArriba(unContenido) {
    return _.includes(this.state.contenidosSeleccionados, unContenido);
  }

  seleccionarContenido(unContenidoSeleccionado) {
    this.setState({
      ...this.state,
      contenidosSeleccionados:
        this.state.contenidosSeleccionados.concat(
          unContenidoSeleccionado)
    })
  }

  calculateStyle() {
    return {gridTemplateColumns: `repeat(${this.props.columnas}, fit-content(120px))`};
  }

  render() {
    const fichas = this.state.contenidosMezclados.map(
      (unContenido, index) => <Ficha
        alDarseVuelta={this.seleccionarContenido.bind(this)}
        key={index}
        bocaArriba={this.isBocaArriba(unContenido)}
        contenido={unContenido} />
    );
    
    return <div style={this.calculateStyle()} className="tablero">{fichas}</div>
  }
}

Tablero.propTypes = {
  contenidos: PropTypes.array,
  columnas: PropTypes.number
}

Tablero.defaultProps = {
  columnas: 3
}