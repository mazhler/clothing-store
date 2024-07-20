import React, { useState, useEffect } from 'react';
import ClothingItemAdd from './ClothingItemAdd';
import ClothingItemEdit from './ClothingItemEdit';
import ClothingSearch from './ClothingSearch';

const ClothingList = () => {
  const [clothingItems, setClothingItems] = useState(() => {
    const savedItems = localStorage.getItem('clothingItems');
    return savedItems ? JSON.parse(savedItems) : [
      { id: 1, name: 'Camiseta', price: 20 },
      { id: 2, name: 'Pantalones', price: 30 },
      { id: 3, name: 'Chaqueta', price: 50 },
      { id: 4, name: 'Zapatos', price: 40 },
    ];
  });
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('clothingItems', JSON.stringify(clothingItems));
  }, [clothingItems]);

  const addClothingItem = (item) => {
    setClothingItems([
      ...clothingItems,
      { id: clothingItems.length + 1, ...item }
    ]);
  };

  const editClothingItem = (updatedItem) => {
    setClothingItems(
      clothingItems.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    setEditingItem(null);
  };

  const removeClothingItem = (id) => {
    setClothingItems(clothingItems.filter(item => item.id !== id));
  };

  const filteredItems = clothingItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Listado de Prendas de Vestir</h1>
      <ClothingSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {editingItem ? (
        <ClothingItemEdit
          currentItem={editingItem}
          onEdit={editClothingItem}
          onCancel={() => setEditingItem(null)}
        />
      ) : (
        <ClothingItemAdd onAdd={addClothingItem} />
      )}
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => setEditingItem(item)}>Editar</button>
            <button onClick={() => removeClothingItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothingList;
