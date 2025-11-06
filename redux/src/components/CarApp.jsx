import { useDispatch, useSelector } from "react-redux";
import { useMyDispatch } from "../hooks/useMyDispatch";
import { useMySelector } from "../hooks/useMySelector";
import withCounter from "../hoc/withCounter";

function CarApp({ counter, handleIncrement, handleDecrement }) {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state);
  console.log(counter, handleIncrement, handleDecrement);

  return (
    <>
      <h1>Car App</h1>
      <ul style={{ display: "flex", gap: "20px" }}>
        {cars.map(({ make, quantity, id }) => (
          <div
            key={id}
            style={{
              border: "1px solid black",
              padding: "15px",
              width: "100px",
            }}
          >
            <p>{make}</p>
            <p>{quantity}</p>
            <button onClick={() => dispatch({ type: "car/sell", payload: id })}>
              Sell
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

const WrappedCarApp = withB(withA(withCounter(CarApp)));
export default WrappedCarApp;
