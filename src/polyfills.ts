import { Buffer } from 'buffer';
import process from 'process';

// Set up polyfills before any other imports
(globalThis as any).Buffer = Buffer;
(globalThis as any).process = process;
(globalThis as any).global = globalThis;

if (typeof window !== 'undefined') {
  (window as any).Buffer = Buffer;
  (window as any).process = process;
  (window as any).global = window;
}

export { Buffer, process };