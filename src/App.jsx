import "./App.css";
import Cart from "./topic/21. Redux Toolkit/components/Cart";
import Home from "./topic/21. Redux Toolkit/components/Home";
import Navbar from "./topic/21. Redux Toolkit/components/Navbar";
import Products from "./topic/21. Redux Toolkit/components/Products";
import User from "./topic/21. Redux Toolkit/components/User";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-500">
        <div>App component </div>
        <Navbar/>
        <User/>
        <Home/>
        <Products/>
        <Cart/>
      </div>
    </>
  );
}

export default App;
