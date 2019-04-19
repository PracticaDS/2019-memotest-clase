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
      fichasBocaArriba: [],
      paresEncontrados: []
    };
  }

  isBocaArriba(unaFicha) {
    return _.includes(this.state.fichasBocaArriba, unaFicha);;
  }

  contenidoDe(ficha) {
    return this.state.contenidosMezclados[ficha];
  }

  ponerBocaAbajo(parDeFichas) {
    this.setState({
      ...this.state,
      fichasBocaArriba: this.state.fichasBocaArriba.filter(it => !_.includes(parDeFichas, it))
    })
  }

  procesarPar(parDeFichas) {
    if(this.contenidoDe(parDeFichas[0]) === this.contenidoDe(parDeFichas[1])) {
      return [...this.state.paresEncontrados, parDeFichas];
    } else {
      setTimeout(() => this.ponerBocaAbajo(parDeFichas), 2000)
      return this.state.paresEncontrados;
    }
  }

  agregarAParDeFichas(ficha) {
    const potencialPar = this.state.fichasActuales.concat(ficha);
    if(potencialPar.length === 2) {
      return {
        paresEncontrados: this.procesarPar(potencialPar),
        fichasActuales: []
      }
    } else {
      return {fichasActuales: potencialPar}
    }
  }

  seleccionarFicha(contenido, ficha) {    
    this.setState({
      ...this.state,
      fichasBocaArriba: this.state.fichasBocaArriba.concat(ficha),
      ...this.agregarAParDeFichas(ficha)
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