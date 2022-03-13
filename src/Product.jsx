import { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    //console.log("product Constructor");
    this.state = {
      prod: this.props.prod,
    };
  }

  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-1">
          <div className="card-body">
            <div className="text-muted">
              #{this.state.prod.id}
              <span className="pull-right hand-icon">
                <i
                  className="fa fa-times"
                  onClick={() => {
                    this.props.onDelete(this.state.prod);
                  }}
                ></i>
              </span>
            </div>

            <h5 className="pt-5 border-top">{this.state.prod.productName}</h5>
            <div>${this.state.prod.price}</div>
          </div>
          <div className="card-footer">
            <div className="float-start">
              <span className="badge  m-1 text-dark">
                {this.state.prod.quantity}
              </span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.prod, 0);
                  }}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.prod, 10);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="float-end"> {this.props.children}</div>
          </div>
          {/*card footer*/}
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    // console.log("component will unmound");
  }
  componentDidMount() {
    // console.log("component did mount- Product");
  }
  componentDidUpdate() {
    //  console.log("componentDidUpdate-Product");
  }
}
