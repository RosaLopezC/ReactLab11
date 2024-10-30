import React from 'react';

function EmpleadoItem({ empleado, onDelete, onEdit }) {
  return (
    <div className="empleado-item">
      <div className="empleado-foto">
        <img src={empleado.foto} alt={empleado.nombre} />
      </div>
      <div className="empleado-info">
        <h3>{empleado.nombre}</h3>
        <p>{empleado.cargo}</p>
        <button onClick={() => onDelete(empleado.id)}>Eliminar</button>
        <button onClick={() => onEdit(empleado.id)}>Editar</button>
      </div>
    </div>
  );
}

export default EmpleadoItem;