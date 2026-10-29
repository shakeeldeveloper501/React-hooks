
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import  store  from "./topic/21. Redux Toolkit/redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <App/>
  </Provider>
  
);


