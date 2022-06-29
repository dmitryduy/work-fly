import ReactDOM from "react-dom/client";

import App from "./App";
import { ComposeProvider } from "./providers";
import StyleProvider from "./providers/StyleProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ComposeProvider providers={[[StyleProvider]]}>
    <App />
  </ComposeProvider>
);
