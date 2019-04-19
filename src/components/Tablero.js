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
      fichasActuales: [],
      fichasBocaArriba: []
    };
  }

  isBocaArriba(unaFicha) {
    return _.includes(this.state.fichasBocaArriba, unaFicha);
  }

  procesarParDeFichas(ficha) {
    const potencialPar = this.state.fichasActuales.concat(ficha);
    if(potencialPar.length === 2) {
      //TODO: Procesar par
      return []
    } else {
      return potencialPar
    }
  }

  seleccionarFicha(contenido, ficha) {    
    this.setState({
      ...this.state,
      fichasBocaArriba: this.state.fichasBocaArriba.concat(ficha),
      fichasActuales: this.procesarParDeFichas(ficha)
    });  
  }

  calculateStyle() {
    return {gridTemplateColumns: `repeat(${this.props.columnas}, fit-content(120px))`};
  }

  render() {
    const fichas = this.state.contenidosMezclados.map(
      (unContenido, index) => <Ficha
        alDarseVuelta={this.seleccionarFicha.bind(this)}
        id={index}
        key={index}
        bocaArriba={this.isBocaArriba(index)}
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