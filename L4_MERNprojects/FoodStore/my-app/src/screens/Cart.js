import axios from "axios";
import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0)
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty!!</div>
      </div>
    );
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await axios({
      method: "post",
      url: "http://localhost:5000/home/orderData",
      data: {
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    console.log("Order Response", response);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };
  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      <div className="container m-auto mt-5 table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr>
              <th className="col">#</th>
              <th className="col">Name</th>
              <th className="col">Quantity</th>
              <th className="col">Option</th>
              <th className="col">Amount</th>
              <th className="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <span
                      style={{ color: "white" }}
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    >
                      X
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">Total Price: ₹{totalPrice}/-</h1>
        </div>
      </div>
      <div>
        <button className="btn bg-success mt-5" onClick={handleCheckOut}>
          Check out
        </button>
      </div>
    </div>
  );
}
