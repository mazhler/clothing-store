import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "title": "Clothing List",
      "add_clothing_item": "Add Clothing Item",
      "edit_clothing_item": "Edit Clothing Item",
      "item_name": "Item Name",
      "item_price": "Item Price",
      "add": "Add",
      "edit": "Edit",
      "delete": "Delete",
      "cancel": "Cancel",
      "search_placeholder": "Search clothing item..."
    }
  },
  es: {
    translation: {
      "title": "Listado de Prendas de Vestir",
      "add_clothing_item": "Añadir Prenda de Vestir",
      "edit_clothing_item": "Editar Prenda de Vestir",
      "item_name": "Nombre de la Prenda",
      "item_price": "Precio de la Prenda",
      "add": "Añadir",
      "edit": "Editar",
      "delete": "Eliminar",
      "cancel": "Cancelar",
      "search_placeholder": "Buscar prenda de vestir..."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
