import { useSelector } from "react-redux";
import "../style/Orders.css"

const Orders = () => {
    const orders = useSelector((store) => store.orders);
    console.log("orders"+orders)

    return (
        <div className="orderdiv">

           <div>.</div>
        {orders.map((order) => {
          return (
            <div key={order.id} className="orders">
              <p className="oid">Order id - {order.id}</p>
  
              {order.items.map((item) => {
                return (
                  <div key={item.id} className="item">
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>
                    <p>Rs. - {item.price}</p>
                  </div>
                );
              })}
              <p className="fprice">Total - Rs. {order.total}</p>
            </div>
          );
        })}
      </div>
    )
}

export default Orders