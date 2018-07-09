import React, { Component } from "react";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          item: "Vans",
          price: 46,
          description: "These shoes were worn by Bam Margera"
        },
        {
          item: "Levis",
          price: 55,
          description: "Levis will last you a lifetime"
        },
        {
          item: "White tee",
          price: 5,
          description: "When you dont know what to wear, pick a whte tee"
        }
      ]
    };
  }
  render() {
    console.log(this.props.match);
    let product =
      this.state.products.find(c => c.item === this.props.match.params.name) ||
      false;

    return (
      <div>
        {product ? (
          <div>
            <h1>{product.item}</h1>
            <h2>${product.price}.00</h2>
            <h3>{product.description}</h3>
          </div>
        ) : (
          <h1>Sorry, item not found</h1>
        )}
      </div>
    );
  }
}
export default Product;
