<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import './styles/index.css';
=======
>>>>>>> 90ec336 (fix: fixed scripts in package.json and removed app.css, index.css)
import App from './app';
=======
=======

>>>>>>> 3c05fe4 (feat: add pre-commit hook + add import eslint plugin)
import App from './App';
<<<<<<< HEAD
>>>>>>> fa66030 (fix: remove unused folders)
=======
import StyleProvider from './providers/StyleProvider';
>>>>>>> e380a49 (feat: add theme, theme provider, global style, rule in tsconfig and)
=======
import ReactDOM from "react-dom/client";

import App from "./App";
import { ComposeProvider } from "./providers";
import StyleProvider from "./providers/StyleProvider";
>>>>>>> 7a953c4 (fix: fixed FC children prop)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ComposeProvider providers={[[StyleProvider]]}>
    <App />
  </ComposeProvider>
<<<<<<< HEAD
);
<<<<<<< HEAD
>>>>>>> e380a49 (feat: add theme, theme provider, global style, rule in tsconfig and)
=======
>>>>>>> 7a953c4 (fix: fixed FC children prop)
=======
);
>>>>>>> 5f41ad0 (refactor: remove react.d.ts file for component props typing, typing props with yourself)
