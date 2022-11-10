import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addOrder, clearCart } from "../redux/actions";
import "../style/Cart.css"


const Cart = () => {
    const cartItems = useSelector((store) => store.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="mndiv">
           <div >
      {cartItems.map((item) => {
        return (
          <div className="cartitem">
            <img src={item.image} alt="" srcset="" />
            <div>{item.title}</div>
            <div>Rs. - {item.price}</div>
          </div>
        );
      })}
      <div>
        <div className="tprice">
          {" "}
          <strong>
            {" "}
            Total - {cartItems.reduce((acc, curr) => acc + curr.price, 0)}
          </strong>
        </div>
        <button className="placebtn"
          onClick={() => {
            dispatch(
              addOrder({
                id: Date.now(),
                items: cartItems,
                total: cartItems.reduce((acc, curr) => acc + curr.price, 0),
              })
            );
            dispatch(clearCart());
            navigate("/");
          }}
        >
          Place Order
        </button>
      </div>
    </div>

    </div>
      
    )
}

export default Cart