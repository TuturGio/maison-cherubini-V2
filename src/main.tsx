import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  document.body.innerHTML = '<div style="padding:40px;color:red;font-family:sans-serif"><h1>No #root element found</h1></div>';
} else {
  try {
    const root = createRoot(rootEl);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (err) {
    rootEl.innerHTML = `<div style="padding:40px;color:red;font-family:sans-serif">
      <h1>Render Error</h1>
      <pre style="white-space:pre-wrap;word-break:break-all">${err instanceof Error ? err.message + '\n\n' + err.stack : String(err)}</pre>
    </div>`;
  }
}
