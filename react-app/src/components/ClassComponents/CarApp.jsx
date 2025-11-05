import { Component } from "react";
import InfoCard from "./InfoCard";

const mockData = [
  {
    make: "Toyota",
    quantity: 10,
    id: 1,
  },
  {
    make: "Honda",
    quantity: 10,
    id: 2,
  },
  {
    make: "Nissan",
    quantity: 10,
    id: 3,
  },
];

class CarApp extends Component {
  state = {
    cars: mockData,
  };

  handleSell = (id) => {
    const updatedCars = this.state.cars.map((car) => {
      if (car.id === id) {
        return {
          ...car,
          quantity: car.quantity - 1,
        };
      }
      return car;
    });
    this.setState({
      cars: updatedCars,
    });
  };

  render() {
    return (
      <>
        <h1>Car App</h1>
        <ul style={{ display: "flex", gap: "20px" }}>
          {this.state.cars.map((car) => (
            <InfoCard car={car} key={car.id} handleSell={this.handleSell} />
          ))}
        </ul>
      </>
    );
  }
}

export default CarApp;
