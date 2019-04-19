import { mount } from 'enzyme';
import { Ficha } from './Ficha';
import React from 'react';
import { Tablero } from './Tablero';

describe("Tablero", () => {
  function crearTablero(contenidos = ["💩", "🤡", "👹", "👻", "👽", "👾"]) {
    const tablero = mount(<Tablero contenidos={contenidos} />);
    return tablero;
  }
  
  it("deberia tener una cantidad de fichas pares", () => {
    const tablero = crearTablero(["💩"]);
    expect(tablero.find(Ficha).length).toEqual(2);
  })

  it("deberia guardar fichas seleccionadas", () => {
    const tablero = crearTablero();
    const ficha = tablero.find(Ficha).at(0);

    ficha.simulate("click");

    expect(tablero.state("fichasActuales")).toEqual([ficha.prop("id")]);
    expect(tablero.state("fichasBocaArriba")).toEqual([ficha.prop("id")]);
    expect(tablero.find(Ficha).at(0).prop("bocaArriba")).toEqual(true);
  })

  it("deberia guardar máximo un par de fichas actuales", () => {
    const tablero = crearTablero();
    
    const ficha1 = tablero.find(Ficha).at(0);
    const ficha2 = tablero.find(Ficha).at(1);
    
    ficha1.simulate("click");
    ficha2.simulate("click");

    expect(tablero.state("fichasActuales")).toEqual([]);
    expect(tablero.state("fichasBocaArriba")).toEqual([ficha1.prop("id"), ficha2.prop("id")]);
  })

  it("deberia guardar un par encontrado", () => {
    const tablero = crearTablero(["🤡"]);
    
    const ficha1 = tablero.find(Ficha).at(0);
    const ficha2 = tablero.find(Ficha).at(1);
    
    ficha1.simulate("click");
    ficha2.simulate("click");

    expect(tablero.state("paresEncontrados")).toEqual([[ficha1.prop("id"), ficha2.prop("id")]]);
  })
});


