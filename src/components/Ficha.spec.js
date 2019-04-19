
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { Ficha } from './Ficha';


describe("fichas", () => {
  it("deberia estar boca abajo al crearse", () => {
    const ficha = mount(<Ficha contenido="🤡" />)
    expect(ficha.state("bocaArriba")).toBe(false);
    expect(ficha.find("div.ficha").hasClass("bocaAbajo")).toBe(true);
  })

  it("deberia darse vuelta al hacer click", () => {
    var contenidoDadoVuelta;

    const ficha = mount(<Ficha id={1} contenido="🤡" alDarseVuelta={(contenido, key) => contenidoDadoVuelta = [contenido, key]}/>);
    
    ficha.simulate("click");
    
    expect(ficha.state("bocaArriba")).toBe(true);
    expect(ficha.find("div.ficha").hasClass("bocaAbajo")).toBe(false);

    expect(contenidoDadoVuelta).toEqual([ficha.prop("contenido"), ficha.prop("id")]);
  })
});