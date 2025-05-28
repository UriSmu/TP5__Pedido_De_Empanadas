import { useState } from 'react'
import './App.css'
import Formulario from './Formulario'
import Listado from './Listado'

function App() {
  const [pedido, setPedido] = useState([]);

  const agregarPedido = (nuevoPedido) => {
    setPedido([...pedido, nuevoPedido]);
  }

  return (
    <div className="layout-dos-columnas">
      <Formulario agregarPedido={agregarPedido} />
      <Listado pedido={pedido} />
    </div>
  )
}

export default App