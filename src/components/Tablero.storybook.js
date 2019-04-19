import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tablero } from './Tablero';

storiesOf('Tablero', module).add('Normal', () => <Tablero contenidos={["💩", "🤡", "👹", "👻", "👽", "👾"]} />);