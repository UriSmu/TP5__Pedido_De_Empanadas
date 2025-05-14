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
    <>
      <Formulario agregarPedido={agregarPedido}/>
      <Listado pedido={pedido}/>
    </>
  )
}

export default App

//COSAS X HACER:
//1: AGRANDAR LETRA
//2: COLOR LETRA PEDIDOS INDIVIDUALES
//3: SI HACES MUCHOS PEDIDOS, LOS PEDIDOS INDIVIDUALES SE PONEN ABAJO DEL FORM, Y NO ES LO QUE TIENE QUE PASAR