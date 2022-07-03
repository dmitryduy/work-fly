import ReactDOM from 'react-dom/client';

import App from './App';
import { StyleProvider } from './providers/StyleProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StyleProvider>
    <App />
  </StyleProvider>
);
