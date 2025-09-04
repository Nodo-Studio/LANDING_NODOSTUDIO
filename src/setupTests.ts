import '@testing-library/jest-dom'
import { vi } from 'vitest'

//Mock window.matchmedia 
Object.defineProperty(window, 'matchmedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
