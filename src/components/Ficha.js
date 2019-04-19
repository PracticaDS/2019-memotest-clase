import React from 'react';

import "./Ficha.css"
import PropTypes from 'prop-types';

export class Ficha extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {bocaArriba: props.bocaArriba}
  }

  darVuelta() {
    this.setState({bocaArriba: true})
    if(this.props.alDarseVuelta) {
      this.props.alDarseVuelta(this.props.contenido, this.props.id)
    }
  }

  render() {
    if (this.state.bocaArriba)
      return <div className="ficha">{this.props.contenido}</div>;
    else {
      return <div className="ficha bocaAbajo" onClick={this.darVuelta.bind(this)}></div>;
    }
  }
}

Ficha.propTypes = {
  bocaArriba: PropTypes.bool,
  alDarseVuelta: PropTypes.func,
  id: PropTypes.number
}

Ficha.defaultProps = {
  bocaArriba: false
}