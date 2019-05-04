import React from 'react';

import "./Ficha.css"
import PropTypes from 'prop-types';

export class Ficha extends React.Component {

  darVuelta() {
    if(!this.props.bocaArriba && this.props.alDarseVuelta) {
      this.props.alDarseVuelta(this.props.contenido, this.props.id)
    }
  }

  render() {
    const classes = ["ficha"]
    
    if(this.props.resuelta) classes.push("resuelta")
    if(!this.props.bocaArriba) classes.push("boca-abajo")

    const classNames = classes.join(" ")

    return <div className={classNames} onClick={this.darVuelta.bind(this)}>{this.props.bocaArriba?this.props.contenido:""}</div>;
  }
}

Ficha.propTypes = {
  bocaArriba: PropTypes.bool,
  alDarseVuelta: PropTypes.func,
  resuelta: PropTypes.bool,
  id: PropTypes.number,
  contenido: PropTypes.string
}

Ficha.defaultProps = {
  bocaArriba: false,
  resuelta: false
}