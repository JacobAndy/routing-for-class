import React, { Component } from "react";

class Product extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.match);
    return (
      <div>
        <h1>{this.props.match.params.product}</h1>
        <h2>${this.props.match.params.price}.00</h2>
        <h3>{this.props.match.params.itemDescription}</h3>
      </div>
    );
  }
}
export default Product;
