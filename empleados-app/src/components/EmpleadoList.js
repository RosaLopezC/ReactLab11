import React from 'react';
import EmpleadoItem from './EmpleadoItem';

function EmpleadoList({ empleados, onDelete, onEdit }) {
  return (
    <div className="empleado-list">
      {empleados.map(empleado => (
        <EmpleadoItem
          key={empleado.id}
          empleado={empleado}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default EmpleadoList;