import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

// Temporary debug: render a test string first to see if React works at all
const root = document.getElementById('root')!;
root.innerHTML = '<div style="padding:40px;font-family:sans-serif"><h1>React is loading...</h1><p>If you see this, the HTML is working.</p></div>';

setTimeout(() => {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}, 100);
