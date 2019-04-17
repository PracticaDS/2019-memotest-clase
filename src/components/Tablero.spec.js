import { mount } from 'enzyme';
import { Ficha } from './Ficha';
import React from 'react';
import { Tablero } from './Tablero';

describe("Tablero", () => {
  it("deberia tener una cantidad de fichas pares", () => {
    const contenidos = ["💩", "🤡", "👹", "👻", "👽", "👾"];
    
    const tablero = mount(<Tablero contenidos={contenidos} />)
    expect(tablero.find(Ficha).length).toEqual(contenidos.length * 2);
  })

  it("deberia guardar fichas seleccionadas", () => {
    const contenidos = ["💩", "🤡", "👹", "👻", "👽", "👾"];
    
    const tablero = mount(<Tablero contenidos={contenidos} />);
    const ficha = tablero.find(Ficha).at(0);

    ficha.simulate("click");

    expect(tablero.state("contenidosSeleccionados")).toEqual([ficha.prop("contenido")]);
  })
});
