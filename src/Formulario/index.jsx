import './Formulario.css'
import { useState } from 'react';
import GustoInput from './GustoInput.jsx'

//PARA EL EJERCICIO, ME BASO EN EL COMPONENTE FORMULARIO DEL TP CITAS

const Formulario = ({agregarPedido}) => {
  //ESTA FUNCIÓN, LO QUE VA A HACER, ES TOMAR EL VALOR DEL FORMULARIO ACTUALIZADO EN TIEMPO REAL QUE ENVÍA "handleChange"
  const [formCampos, setFormCampos] = useState({
    nombre: '',
    sector: ''
  });

  const [gustos, setGustos] = useState([
    { gusto: '', cantidad: '' }
  ]);

  const handleChange = (e) => {
    setFormCampos({
      ...formCampos,
      [e.target.name]: e.target.value
    });
  };

  const handleGustoChange = (index, campo, valor) => {
    const nuevosGustos = [...gustos];
    nuevosGustos[index][campo] = valor;
    setGustos(nuevosGustos);
  };

  const agregarOtroGusto = () => {
    setGustos([...gustos, { gusto: '', cantidad: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formCampos.nombre || !formCampos.sector) {
      alert('Nombre y sector son obligatorios');
      return;
    }

    for (let i = 0; i < gustos.length; i++) {
      if (!gustos[i].gusto || !gustos[i].cantidad) {
        alert(`Faltan datos en el gusto #${i + 1}`);
        return;
      }
    }

    const nuevaCita = {
      id: Date.now(),
      ...formCampos,
      gustos: gustos
    };

    if(confirm("Seguro que desea agregar la cita?")) //EL CONFIRM LO HABÍA PUESTO EN LA FUNCIÓN "agregarPedido" en App; pero si no la quería agregar perdía lo que ingresé en los inputs. Ahora, no
    {
      agregarPedido(nuevaCita);

      //ACÁ LIMPIAMOS EL FORM
      setFormCampos({ nombre: '', sector: '' });
      setGustos([{ gusto: '', cantidad: '' }]);
    }

  };

  
  return (
    <div className="one-half column">
      <h2>Elegir empanadas</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" name="nombre" className="u-full-width" value={formCampos.nombre} onChange={handleChange} />

        <label>¿En qué sector trabaja?</label>
        <select name="sector" className="u-full-width" value={formCampos.sector} onChange={handleChange}>
          <option value="" disabled>-- Seleccionar sector --</option>
          <option value="Sistemas">Sistemas</option>
          <option value="Finanzas">Finanzas</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
          <option value="Ventas">Ventas</option>
          <option value="Soporte">Soporte</option>
          <option value="Depósito">Depósito</option>
          <option value="Administración">Administración</option>
          <option value="Mantenimiento">Mantenimiento</option>
        </select>

        {gustos.map((g, index) => (
          <GustoInput
            key={index}
            index={index}
            gusto={g.gusto}
            cantidad={g.cantidad}
            handleGustoChange={handleGustoChange}
          />
        ))}

        <button type="button" onClick={agregarOtroGusto} className="u-full-width">
          ¡Otro gusto!
        </button>

        <button type="submit" className="u-full-width button-primary">
          Pedir
        </button>
      </form>
    </div>
  );
};

export default Formulario;