import { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    //console.log("Constructor");
  }

  render() {
    //console.log("render");
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod, index) => {
            return (
              <Product
                key={prod.id}
                prod={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrment}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
          ;
        </div>
      </div>
    );
  }
  componentDidMount = async () => {
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    this.setState({ products: prods });
  };

  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}
  componentDidCatch(error, info) {
    // console.log("componentWill catch error");
    // console.log(error, info);
  }
  handleIncrement = (product, max) => {
    let allProduct = [...this.state.products];
    let index = allProduct.indexOf(product);
    if (allProduct[index].quantity < max) {
      allProduct[index].quantity++;
      this.setState({ products: allProduct });
    }
  };
  handleDecrment = (product, min) => {
    let allProduct = [...this.state.products];
    let index = allProduct.indexOf(product);
    if (allProduct[index].quantity > 0) {
      allProduct[index].quantity--;
      this.setState({ products: allProduct });
    }
  };
  handleDelete = (product) => {
    let allProduct = [...this.state.products];
    let index = allProduct.indexOf(product);
    if (
      window.confirm("Are You Sure you want to delete:" + product.productName)
    ) {
      allProduct.splice(index, 1);
      this.setState({ products: allProduct });
    }
  };
}
