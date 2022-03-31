import React from 'react';
import './App.css';
import Portal from '././components/Portal.jsx';

const app = () => {
  return (
    <div>
      <Portal />
      <div>{'This is App screen'}</div>
      <Portal />
    </div>
  );
};

// Result will be...
// Hello, I am a portal
// Hello, I am a portal
// This is App screen

export default app;
