import React from 'react';
import ReactDOM from 'react-dom';
import Sheet from './Sheet';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Sheet />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
