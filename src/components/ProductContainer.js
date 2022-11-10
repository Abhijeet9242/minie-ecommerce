import {useSelector,useDispatch} from "react-redux";


const ProductContainer = () => {

    const { productState } = useSelector((state) => ({ ...state.data }));
    

    return (
        <div>
            <h1>products</h1>
            <button>fetching</button>
           
        </div>
    )
}

export default ProductContainer