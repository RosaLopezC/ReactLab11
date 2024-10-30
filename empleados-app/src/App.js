import React, { useState } from 'react';
import './App.css';
import EmpleadoList from './components/EmpleadoList';
import EmpleadoForm from './components/EmpleadoForm';

function App() {
  const [empleados, setEmpleados] = useState([
    { id: 1, nombre: 'Juan Pérez', cargo: 'Desarrollador', foto: 'https://media.v2.siweb.es/uploaded_thumb_big/409d16e4bfdd9d56bbcdede012883dd9/borja_clavero_2_madrid_22_junio_2019_fotografo_jose_pedro_salinas.jpg' },
    { id: 2, nombre: 'María Gómez', cargo: 'Diseñadora', foto: 'https://media.v2.siweb.es/uploaded_thumb_medium/409d16e4bfdd9d56bbcdede012883dd9/pilar_casani_madrid_16_mayo_2017_fotografo_jose_pedro_salinas.jpg' },
  ]);
  const [empleadoEditando, setEmpleadoEditando] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const agregarEmpleado = (empleado) => {
    setEmpleados([...empleados, empleado]);
    setMostrarFormulario(false);
  };

  const eliminarEmpleado = (id) => {
    setEmpleados(empleados.filter(empleado => empleado.id !== id));
  };

  const editarEmpleado = (id) => {
    const empleado = empleados.find(emp => emp.id === id);
    setEmpleadoEditando(empleado);
  };

  const guardarEmpleado = (empleado) => {
    if (empleado.id) {
      setEmpleados(empleados.map(emp => emp.id === empleado.id ? empleado : emp));
    } else {
      agregarEmpleado(empleado);
    }
    setEmpleadoEditando(null);
  };

  return (
    <div className="App">
      <h1>Lista de Empleados</h1>
      <EmpleadoList
        empleados={empleados}
        onDelete={eliminarEmpleado}
        onEdit={editarEmpleado}
      />
      {empleadoEditando ? (
        <EmpleadoForm
          empleado={empleadoEditando}
          onSave={guardarEmpleado}
          onCancel={() => setEmpleadoEditando(null)}
        />
      ) : (
        <>
          {mostrarFormulario ? (
            <EmpleadoForm onSave={agregarEmpleado} onCancel={() => setMostrarFormulario(false)} />
          ) : (
            <button onClick={() => setMostrarFormulario(true)}>Agregar Empleado</button>
          )}
        </>
      )}
    </div>
  );
}

export default App;