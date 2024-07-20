import React from 'react';

const ClothingList = () => {
  const clothingItems = [
    { id: 1, name: 'Camiseta', price: 20 },
    { id: 2, name: 'Pantalones', price: 30 },
    { id: 3, name: 'Chaqueta', price: 50 },
    { id: 4, name: 'Zapatos', price: 40 },
  ];

  return (
    <div>
      <h1>Listado de Prendas de Vestir</h1>
      <ul>
        {clothingItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothingList;
