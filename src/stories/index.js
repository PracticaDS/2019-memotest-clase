import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { Ficha } from '../components/Ficha';
import { Tablero } from '../components/Tablero';

storiesOf('Ficha', module).add('Normal', () => <Ficha 
contenido="😀" alDarseVuelta={action("Dar vuelta")} />);
storiesOf('Tablero', module)
.add('Normal', () => <Tablero contenidos={["💩", "🤡", "👹", "👻", "👽", "👾"]} />);