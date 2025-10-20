import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import Navegacao from './routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
  </StrictMode>,
)
