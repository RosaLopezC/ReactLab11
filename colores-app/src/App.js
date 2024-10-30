import React, { useState, useEffect } from 'react';
import './App.css';
import ColorForm from './components/ColorForm';
import ColorAlbum from './components/ColorAlbum';

function App() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem('colors')) || [];
    setColors(savedColors);
  }, []);

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  const addColor = (color) => {
    setColors([...colors, color]);
  };

  const deleteColor = (index) => {
    const newColors = colors.filter((_, i) => i !== index);
    setColors(newColors);
  };

  const editColor = (index, newColor) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  return (
    <div className="App">
      <h1>Guarda tus colores favoritos</h1>
      <ColorForm onAddColor={addColor} />
      <ColorAlbum
        colors={colors}
        onDeleteColor={deleteColor}
        onEditColor={editColor}
      />
    </div>
  );
}

export default App;