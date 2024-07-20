import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ClothingItemAdd = ({ onAdd }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      setError(t('complete_all_fields'));
      return;
    }
    if (parseFloat(price) <= 0) {
      setError(t('positive_price'));
      return;
    }

    onAdd({ name, price: parseFloat(price) });
    setName('');
    setPrice('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder={t('item_name')}
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label={t('item_name')}
        required
      />
      <input
        type="number"
        placeholder={t('item_price')}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        aria-label={t('item_price')}
        required
        min="0.01"
        step="0.01"
      />
      <button type="submit">{t('add')}</button>
    </form>
  );
};

export default ClothingItemAdd;
