
import "./app.css";
import { Outlet } from "react-router-dom";
import Navbar from "./topic/18. react-router-dom/components/Navbar";
import Footer from "./topic/18. react-router-dom/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
export default App;


