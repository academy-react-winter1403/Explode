import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { store } from './core/redux/index.';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
