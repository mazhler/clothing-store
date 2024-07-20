import React from 'react';

const ClothingSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar prenda..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default ClothingSearch;
