import React from 'react';

import "./Ficha.css"
import PropTypes from 'prop-types';

export class Ficha extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {bocaArriba: props.bocaArriba}
  }

  darVuelta() {
    if(!this.state.bocaArriba) {
      this.setState({bocaArriba: true})
      if(this.props.alDarseVuelta) {
        this.props.alDarseVuelta(this.props.contenido)
      }
    }
  }

  render() {
    if (this.state.bocaArriba)
      return <div className="ficha" 
          onClick={this.darVuelta.bind(this)}>{this.props.contenido}</div>;
    else {
      return <div onClick={this.darVuelta.bind(this)} className="ficha bocaAbajo"></div>;
    }
  }
}

Ficha.propTypes = {
  bocaArriba: PropTypes.bool,
  alDarseVuelta: PropTypes.func
}

Ficha.defaultProps = {
  bocaArriba: false
}