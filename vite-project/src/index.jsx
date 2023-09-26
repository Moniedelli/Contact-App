import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';
import { BrowserRouter } from 'react-router-dom';

import './style/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContactApp />
  </BrowserRouter>
)