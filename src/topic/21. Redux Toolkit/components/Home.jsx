import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setUser({ name: "Ali", email: "sa9099" }));
  };
  return (
    <div>
      Home
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
};

export default Home;
