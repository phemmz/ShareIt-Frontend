import React from 'react';
import { render } from 'react-dom';

import AppRoutes from './AppRoutes';
import './style.scss';

render(
  <AppRoutes />,
  document.getElementById('root')
);
