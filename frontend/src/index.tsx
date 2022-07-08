import ReactDOM from 'react-dom/client';

import App from './App';
import StyleProvider from './providers/StyleProvider';
import { ComposeProvider } from "./providers";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ComposeProvider providers={[[StyleProvider]]}>
    <App />
  </ComposeProvider>
);
