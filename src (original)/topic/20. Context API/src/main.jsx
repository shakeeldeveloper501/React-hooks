import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CountProvider from "./contexts/providers/CountProvider.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <CountProvider>
      <App />
    </CountProvider>
  </>,
);
