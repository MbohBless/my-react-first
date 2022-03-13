import { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", messge: "" };
  }
  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>

        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        <div className="text-end">
          {this.state.messge}
          <button className="btn btn-primary m-2" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
  onLoginClick = async () => {
    var response = await fetch(
      `http://localhost:5000/users?email'=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );
    var body = await response.json();
    console.log(body);
    if (body.length > 0) {
      //show success message display
      this.setState({
        messge: <span className="text-success">Successfully logged in</span>,
      });
    } else {
      this.setState({
        messge: (
          <span className="text-danger">invalid Login, please try again</span>
        ),
      });
    }
  };
}
