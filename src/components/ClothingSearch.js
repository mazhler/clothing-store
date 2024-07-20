import React from 'react';
import { useTranslation } from 'react-i18next';

const ClothingSearch = ({ searchTerm, onSearchChange }) => {
  const { t } = useTranslation();

  return (
    <input
      type="text"
      placeholder={t('search_placeholder')}
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      aria-label={t('search_placeholder')}
    />
  );
};

export default ClothingSearch;
