import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToProduct } from './redux/action/productAction'
import Products from './Products';

function App() {
  const count = useSelector(state =>state.Products)
  console.log(count);
  
  const dispatch = useDispatch();

  const handleAddToProduct = () => {
    dispatch(addToProduct({
      id: 1,
      name: 'samsung',
    }))
  }


  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleAddToProduct}>Click</button>


      <Products />
    </>
  )
}

export default App
