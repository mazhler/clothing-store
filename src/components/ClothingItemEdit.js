import React, { useState } from 'react';

const EditClothingItem = ({ currentItem, onEdit, onCancel }) => {
  const [name, setName] = useState(currentItem.name);
  const [price, setPrice] = useState(currentItem.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ id: currentItem.id, name, price: parseFloat(price) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la prenda"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Guardar Cambios</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default EditClothingItem;
