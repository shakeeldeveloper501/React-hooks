
import { useSelector } from 'react-redux'

const Products = () => {

    const products = useSelector(state => state.payload);
    console.log(products);
    

    return (
        <div>
            Product
           {/* {JSON.stringify(products)} */}
        </div>
    )
}

export default Products