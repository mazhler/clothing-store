import React, { useState } from 'react';
import AddClothingItem from './AddClothingItem';

const ClothingList = () => {
  const [clothingItems, setClothingItems] = useState([
    { id: 1, name: 'Camiseta', price: 20 },
    { id: 2, name: 'Pantalones', price: 30 },
    { id: 3, name: 'Chaqueta', price: 50 },
    { id: 4, name: 'Zapatos', price: 40 },
  ]);

  const addClothingItem = (item) => {
    setClothingItems([
      ...clothingItems,
      { id: clothingItems.length + 1, ...item }
    ]);
  };

  const removeClothingItem = (id) => {
    setClothingItems(clothingItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Listado de Prendas de Vestir</h1>
      <AddClothingItem onAdd={addClothingItem} />
      <ul>
        {clothingItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeClothingItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothingList;
