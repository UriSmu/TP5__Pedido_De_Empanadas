const GustoInput = ({ index, gusto, cantidad, handleGustoChange }) => {
    return (
      <div className="gusto-input">
        <label>Gusto #{index + 1}</label>
        <select
          name="gusto"
          className="u-full-width"
          value={gusto}
          onChange={(e) => handleGustoChange(index, 'gusto', e.target.value)}
        >
          <option value="" disabled>-- Seleccionar gusto --</option>
          <option value="Carne Suave">Carne Suave</option>
          <option value="Carne Cortada a Cuchillo">Carne Cortada a Cuchillo</option>
          <option value="Carne Picante">Carne Picante</option>
          <option value="Pollo">Pollo</option>
          <option value="Humita Dulce">Humita Dulce</option>
          <option value="Humita Salada">Humita Salada</option>
          <option value="Jamón y Queso">Jamón y Queso</option>
          <option value="Capresse">Capresse</option>
          <option value="Queso y Cebolla">Queso y Cebolla</option>
          <option value="Primavera">Primavera</option>
          <option value="Roquefort">Roquefort</option>
          <option value="Verdura">Verdura</option>
          <option value="Cheeseburger">Cheeseburger</option>
          <option value="Panceta y ciruela">Panceta y ciruela</option>
          <option value="Atún">Atún</option>
        </select>
  
        <label>Cantidad</label>
        <input
          type="number"
          className="u-full-width"
          value={cantidad}
          onChange={(e) => handleGustoChange(index, 'cantidad', e.target.value)}
          min="1"
        />
      </div>
    );
  };
  
  export default GustoInput;