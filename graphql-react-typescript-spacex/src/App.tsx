import React from 'react';
import PokemonStats from './components/PokemonStats';

import './App.css';

const App = () => {
  const [id, setId] = React.useState("Pikachu");
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <PokemonStats id={ id } />
    </div>
  );
};

export default App;
