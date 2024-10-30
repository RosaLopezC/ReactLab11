import React, { useState } from 'react';

function ColorForm({ onAddColor }) {
  const [color, setColor] = useState('#000000');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!color.trim() || !name.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    onAddColor({ color, name });
    setColor('#000000');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="color-form">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Escribe un color (ej. #FF5733)"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del color"
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default ColorForm;