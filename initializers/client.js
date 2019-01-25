import React from 'react';
import ReactDOM from 'react-dom';
import App from 'client/App';

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('appRoot'));
}
