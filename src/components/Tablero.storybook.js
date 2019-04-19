import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tablero } from './Tablero';
import { action } from '@storybook/addon-actions';

storiesOf('Tablero', module)
  .add('Normal', () => <Tablero columnas={4} contenidos={["💩", "🤡", "👹", "👻", "👽", "👾"]} />)
  .add('Pequeño', () => <Tablero columnas={2} contenidos={["💩", "🤡"]} onCompletado={action("On completado")} />);
