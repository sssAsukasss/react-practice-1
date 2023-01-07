
// import React from 'react' is no need since React 17;
import { createRoot } from 'react-dom/client';
import { App } from './App';

//From React 18, we use "createRoot() insted of ReactDOM.render()."
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />);
