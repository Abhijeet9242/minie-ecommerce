import { useEffect,useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { useSearchParams,Link, Navigate, useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/actions";
import "../style/Home.css";


const Home = () => {

const [categories, setCategories] = useState([]);
  const [selectCate, setSelectCate] = useState(null);
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(1);

    const products = useSelector((store)=>store.products) 
    const dispatch = useDispatch()
    

    const navigate = useNavigate()
   

    useEffect(()=>{
        dispatch(fetchProducts())
        console.log(products)
    },[])

    useEffect(()=>{
        dispatch(fetchProducts(page,orderBy))
    },[page,orderBy])

   
    useEffect(() => {
        let pro = products || [];
        let catoge = pro.map((product)=>product.category)
        // console.log(catoge)
        // catoge = new Set(catoge);
        // catoge = [null, ...catoge];
        setCategories(catoge)
      }, [products]);

    //   useEffect(()=>{
    //     setPage(searchParams.get("page") || 1);
    //   },[searchParams])

    //   console.log(searchParams + "sear")

   
     

    return(
    <div>

<div>
      <div className="filtersdiv">
        Filter -{" "}
        <select
          onChange={(e) => setSelectCate(e.target.value)}
          value={selectCate}
        >
            <option></option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="homedecor">HomeDecor</option>

          {/* {categories.map((cate) => (
            <option value={cate}>{cate}</option>
          ))} */}
         
          
        </select>{" "}
        Sort -{" "}
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option></option>
          <option value="asc">Low To High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="products">
        
      </div>

        <div className="prdoductsdiv">
            {
                
            products
            .filter((pro) => selectCate === null || pro.category === selectCate)
            .map((product)=>(
                <div className="productdiv" key={product.id}>
                <img src={product.image} alt="" srcset="" />
                    <Link  to={`product/${product.id}`} >
                   <h3>{product.title}</h3>
                   </Link>
                    <p>Price - {product.price}</p>
            </div>
           
            ))
           }
        </div>
        <div className="btnmaindiv">
            {/* <p>{page}</p> */}
           <div className="btndiv">
                <button  disabled={page <= 1 ? true : false} onClick={() => setPage((prev) => prev - 1)}>prev</button>
                <button   disabled={page >= 4 ? true : false} onClick={() => setPage((prev) => prev + 1)}>next</button>
           </div>
        </div>
        

    </div>
    </div>
    )
}

export default Home