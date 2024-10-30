import React, { useState } from 'react';

function ColorItem({ color, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newColor, setNewColor] = useState(color.color);
  const [newName, setNewName] = useState(color.name);

  const handleEdit = () => {
    onEdit({ color: newColor, name: newName });
    setIsEditing(false);
  };

  return (
    <div className="color-item">
      {isEditing ? (
        <>
          <input
            type="color"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nombre del color"
          />
          <button onClick={handleEdit}>Guardar</button>
        </>
      ) : (
        <>
          <div className="color-box" style={{ backgroundColor: color.color }}></div>
          <div className="color-name">{color.name}</div>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={onDelete}>Eliminar</button>
        </>
      )}
    </div>
  );
}

export default ColorItem;