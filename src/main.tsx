
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { Buffer } from 'buffer';

// Make Buffer available globally for Solana libraries
(window as any).Buffer = Buffer;
(globalThis as any).Buffer = Buffer;

createRoot(document.getElementById("root")!).render(<App />);
