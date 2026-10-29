import { useParams } from "react-router-dom"

const Products = () => {

  const objID = useParams()

  
  
    return (
    <div>
        Product id is {objID.id}
    </div>
  )
}

export default Products
