import React, { useState, useRef, useEffect } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();

  let options = props.options;
  let priceOptions = Object.keys(options[0]);
  let foodItem = props.foodItem;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({type: "UPDATE",id: foodItem._id,price: finalPrice,qty: qty,});
        return;
      }
      else if (food.size !== size) {
        await dispatch({type: "ADD", id: foodItem._id,price: finalPrice,qty: qty,size: size,name: props.foodItem.name,});
        return;
      }
      return;
    }
    await dispatch({type: "ADD",id: foodItem._id,price: finalPrice,qty: qty,size: size,name: props.foodItem.name,});
  };

  let finalPrice = qty * parseInt(options[0][size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div
      className="card mt-3"
      style={{
        width: "18rem",
        fontFamily: "cursive",
      }}
    >
      <img
        className="card-img-top"
        src={foodItem.img}
        alt="..."
        style={{ height: "200px", objectFit: "fill" }}
      />
      <div className="card-body">
        <h5 className="card-title">{foodItem.name}</h5>
        <p className="card-text">{foodItem.description}</p>
        <div className="container w-100">
          <select
            className="m-2 h-100 bg-success rounded"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="m-2 h-100 bg-success rounded"
            onChange={(e) => setSize(e.target.value)}
            ref={priceRef}
          >
            {priceOptions.map((data) => {
              if (data === "_id") return null;
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          <hr />
          <button
            className="btn btn-success justify-center ms-2"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
