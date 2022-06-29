import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './styles/index.css';
import App from './app';
=======

import App from './App';
import StyleProvider from './providers/StyleProvider';
>>>>>>> c92fb7d4011221ca54a9daa9aed600750f61faa5

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<<<<<<< HEAD
  <App/>
);
=======
  <StyleProvider>
    <App />
  </StyleProvider>
);
>>>>>>> c92fb7d4011221ca54a9daa9aed600750f61faa5
