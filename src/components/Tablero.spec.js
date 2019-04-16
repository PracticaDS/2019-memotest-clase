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
});
