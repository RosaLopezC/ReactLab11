import React, { useState, useEffect } from 'react';

function EmpleadoForm({ empleado, onSave, onCancel }) {
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const [foto, setFoto] = useState('');

  useEffect(() => {
    if (empleado) {
      setNombre(empleado.nombre);
      setCargo(empleado.cargo);
      setFoto(empleado.foto);
    } else {
      setNombre('');
      setCargo('');
      setFoto('');
    }
  }, [empleado]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !cargo.trim() || !foto.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    onSave({ id: empleado ? empleado.id : Date.now(), nombre, cargo, foto });
    setNombre('');
    setCargo('');
    setFoto('');
  };

  return (
    <form onSubmit={handleSubmit} className="empleado-form">
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de la foto"
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
      />
      <button type="submit">{empleado ? 'Guardar' : 'Agregar'}</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancelar</button>}
    </form>
  );
}

export default EmpleadoForm;