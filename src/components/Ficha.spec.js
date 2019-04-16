
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
    const ficha = mount(<Ficha contenido="🤡" />)
    
    ficha.simulate("click")
    
    expect(ficha.state("bocaArriba")).toBe(true);
    expect(ficha.find("div.ficha").hasClass("bocaAbajo")).toBe(false);
  })
});