import { useDispatch, useSelector } from "react-redux";
import { useMyDispatch } from "../hooks/useMyDispatch";
import { useMySelector } from "../hooks/useMySelector";
import withCounter from "../hoc/withCounter";
import { fetchInitialCarData, sellCar } from "../slices/rtkCarSlice";
import { useEffect } from "react";

function CarApp() {
  const dispatch = useDispatch();
  const { cars, loading } = useSelector((state) => state.car);
  console.log("cars", sellCar());

  useEffect(() => {
    console.log("fetch initial car data action", fetchInitialCarData());
    dispatch(fetchInitialCarData());
  }, []);

  return (
    <>
      <h1>Car App</h1>
      {loading ? (
        <h2>Loading Car Data...</h2>
      ) : (
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
              <button onClick={() => dispatch(sellCar(id))}>Sell</button>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

// const WrappedCarApp = withB(withA(withCounter(CarApp)));
export default CarApp;
