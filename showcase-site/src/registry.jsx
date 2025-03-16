import CounterWidget from './widgets/test-widget';
import StockTracker from './widgets/stock-widget';
import WeatherWidget from './widgets/weather-widget';
import NotepadWidget from './widgets/notepad-Component';
import DropZone from './Dropzone';
import CurrencyConverter from './decoded-widgets/currency-converter';

// Define component types as constants to avoid typos - set to all lowercase with no symbols
export const COMPONENT_TYPES = {
  COUNTER: 'counterwidget',
  STOCK: 'stocktracker',
  WEATHER: 'weatherwidget',
  NOTEPAD: 'notepadwidget',
  DROPZONE: 'dropzone',
  CURRENCY: 'currencyconverter'
};

// Initialize the component registry
export const initializeComponentRegistry = () => {
  if (!window.componentRegistry) {
    window.componentRegistry = new Map();
  }
  
  // Register all available components
  window.componentRegistry.set(COMPONENT_TYPES.DROPZONE, DropZone);
  window.componentRegistry.set(COMPONENT_TYPES.COUNTER, CounterWidget);
  window.componentRegistry.set(COMPONENT_TYPES.STOCK, StockTracker);
  window.componentRegistry.set(COMPONENT_TYPES.WEATHER, WeatherWidget);
  window.componentRegistry.set(COMPONENT_TYPES.NOTEPAD, NotepadWidget);
  window.componentRegistry.set(COMPONENT_TYPES.CURRENCY, CurrencyConverter);
  
  
  console.log('Component registry initialized with all widgets');
};

// Helper function to get a component by type
export const getComponent = (type) => {
  return window.componentRegistry.get(type.toLowerCase());
};