console.log('¡El archivo setupTest.ts se está ejecutando! ...')

import '@testing-library/jest-dom'

//Mock window.matchmedia 
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string ) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
