import React from 'react';
import ColorItem from './ColorItem';

function ColorAlbum({ colors, onDeleteColor, onEditColor }) {
  return (
    <div className="color-album">
      {colors.map((color, index) => (
        <ColorItem
          key={index}
          color={color}
          onDelete={() => onDeleteColor(index)}
          onEdit={(newColor) => onEditColor(index, newColor)}
        />
      ))}
    </div>
  );
}

export default ColorAlbum;