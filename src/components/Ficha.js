import React from 'react';

import "./Ficha.css"

export class Ficha extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {bocaArriba: props.bocaArriba}
  }

  darVuelta() {
    this.setState({bocaArriba: !this.state.bocaArriba})
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