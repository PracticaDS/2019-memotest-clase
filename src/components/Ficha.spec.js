
import { mount } from 'enzyme';
import React from 'react';
import { Ficha } from './Ficha';


describe("fichas", () => {
  it("deberia estar boca abajo al crearse", () => {
    const ficha = mount(<Ficha contenido="🤡" />)
    expect(ficha.prop("bocaArriba")).toBe(false);
    expect(ficha.find("div.ficha").hasClass("boca-abajo")).toBe(true);
  })

  it("deberia no tener la clase boca abajo al estar boca arriba", () => {
    const ficha = mount(<Ficha contenido="🤡" bocaArriba={true}/>)
    
    expect(ficha.find("div.ficha").hasClass("bocaAbajo")).toBe(false);
  })

  it("deberia darse vuelta al hacer click", () => {
    var contenidoDadoVuelta;

    const ficha = mount(<Ficha id={1} contenido="🤡" alDarseVuelta={(contenido, key) => contenidoDadoVuelta = [contenido, key]}/>);
    
    ficha.simulate("click");

    expect(contenidoDadoVuelta).toEqual([ficha.prop("contenido"), ficha.prop("id")]);
  })
});