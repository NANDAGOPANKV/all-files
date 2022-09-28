import React from 'react'
import './App.css';
import Persont from './components/Persont';

function App() {
  return (
    <div className="App">
      <h1>Hello World.</h1>
      <br /><br />
      <Persont
        name='Nandagopan K V'
        age={19}
        email="Nandagopan@gmail.com"
        isMarried={true}
        friends={['mcg', 'McGopanson', 'McGopan', 'Nanda']}
      />
    </div>
  );
}

export default App;
