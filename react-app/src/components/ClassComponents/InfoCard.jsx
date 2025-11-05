import { Component, PureComponent } from "react";

// stateless component

class InfoCard extends Component {
  render() {
    const { make, quantity, id } = this.props.car;
    console.log(`${make} rendered`);
    return (
      <div
        style={{ border: "1px solid black", padding: "15px", width: "100px" }}
      >
        <p>{make}</p>
        <p>{quantity}</p>
        <button onClick={() => this.props.handleSell(id)}>Sell</button>
      </div>
    );
  }

  // shallow comparison on state and props objects
  shouldComponentUpdate(nextProps) {
    console.log(this.props.car, nextProps.car);
    if (this.props.car === nextProps.car) {
      return false;
    }
    return true;
  }
}

export default InfoCard;
