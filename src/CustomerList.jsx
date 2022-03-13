import { Component } from "react";

export default class CustomersList extends Component {
  state = {
    appTitle: "Customers",
    customerCount: 5,
    customers: [
      {
        id: 1,
        name: "Mboh Bless",
        phone: "123-456",
        address: { city: "Yaounde" },
        photo: "https://picsum.photos/id/1009/60",
      },
      {
        id: 2,
        name: "Jack mah",
        phone: "789-012",
        address: { city: "Beijing" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Elon Musk",
        phone: "345-678",
        address: { city: "Texas" },
        photo: "https://picsum.photos/id/1019/60",
      },
      {
        id: 4,
        name: "Warrem buffet",
        phone: "",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1004/60",
      },
      {
        id: 5,
        name: "Richard brandson",
        phone: "",
        address: { city: "London" },
        photo: "https://picsum.photos/id/1029/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.appTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customerCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  // executes when the user clicks on the refresh button
  onRefreshClick = () => {
    this.setState({
      customerCount: 7,
    });
  };
  getPhoneToRender = (phone) => {
    {
      return phone ? (
        phone
      ) : (
        <div className="bg-warning text-center p-2">No phone</div>
      );
    }
  };
  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer"></img>
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  //dynamic changes to the elements of an array in react js
  onChangePictureClick = (cus, index) => {
    console.log(cus);
    //getting the list of customers
    var cusArr = this.state.customers;
    cusArr[index].photo = "https://picsum.photos/id/1026/60";
    this.setState({ customers: cusArr });
  };
}
