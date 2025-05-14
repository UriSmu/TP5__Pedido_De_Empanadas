import './Listado.css'

const Listado = ({pedido}) => {
    let gustosTotales = [];
    //USO LOS FOREACH PARA PODER ACCEDER A LOS GUSTOS QUE PIDIÓ CADA PERSONA, Y CUANTAS PIDIÓ DEL MISMO
    pedido.forEach(p => {
        p.gustos.forEach(gusto => {
          if (gusto.gusto && gusto.cantidad) {
            const hay = gustosTotales.find(g => g.gusto === gusto.gusto);
            if (hay) {
              hay.cantidad += parseInt(gusto.cantidad);
            } else {
              gustosTotales.push({ gusto: gusto.gusto, cantidad: parseInt(gusto.cantidad) }); 
            }
          }
        });
      });

    gustosTotales = gustosTotales.filter(g => g.cantidad > 0);

    const mostrarPedidos = pedido.map(p => (
        <div key={p.id}>
          <h5>{p.nombre} ({p.sector})</h5>
          {p.gustos.map((gusto, index) => (
            gusto.gusto ? <p key={index}>{gusto.cantidad} de {gusto.gusto}</p> : null
          ))}
        </div>
      ));
    
    return(
        <>
        <div className="one-half column">
            <h2>PEDIDO TOTAL</h2>
            {gustosTotales.length > 0 ? (
            <ul>
                {gustosTotales.map((gusto, index) => (
                <li key={index}>{gusto.cantidad} de {gusto.gusto}</li>
                ))}
            </ul>
            ) : (
            <p>No se ha realizado ningún pedido.</p>
            )}
        </div>
        <div className="one-half column">
            <h2>PEDIDOS</h2>
            {mostrarPedidos}
        </div>
        </>
    )
}

export default Listado;