import React, { useState } from 'react';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [editando, setEditando] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === '') return;
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
    setNuevaTarea('');
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const iniciarEdicion = (id, texto) => {
    setEditando(id);
    setTextoEditado(texto);
  };

  const finalizarEdicion = (id) => {
    if (textoEditado.trim() === '') return;
    setTareas(tareas.map(tarea => tarea.id === id ? { ...tarea, texto: textoEditado } : tarea));
    setEditando(null);
  };

  return (
    <div className="App">
      <div className="caja">
        <h1>Bienvenid@</h1>
        <h3>Ingresa tus tareas</h3>
        <form onSubmit={agregarTarea}>
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Nueva tarea"
          />
          <button type="submit">Agregar</button>
        </form>
        <ul>
          {tareas.map(tarea => (
            <li key={tarea.id}>
              {editando === tarea.id ? (
                <>
                  <input
                    type="text"
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                  />
                  <button onClick={() => finalizarEdicion(tarea.id)}>Guardar</button>
                </>
              ) : (
                <>
                  <span>{tarea.texto}</span>
                  <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                  <button onClick={() => iniciarEdicion(tarea.id, tarea.texto)}>Editar</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;