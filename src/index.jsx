import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Inbox from './Inbox';
import Header from './Header';


const App = () => {
  return (
    <>
      <Inbox account="radovan.holatko@mejlik.cz" messages={5} />
      <Inbox account="radovan.holatko@mejlik.cz" messages={0} />
      <Header user="Radovan Holátko" />
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
