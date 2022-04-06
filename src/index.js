import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './components/Todo/Todo';

// ReactDOM.render(
// <React.StrictMode>
//   <Todo />
// </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Todo />)