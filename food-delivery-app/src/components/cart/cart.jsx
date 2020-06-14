import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  render() {
    const { cartItem } = this.props;
    console.log(typeof cartItem[0].price);
    const TotalSum = cartItem.reduce((a, b) => {
      return a + b.price;
    }, 0);

    return (
      <>
        <div className="row d-flex justify-content-around mx-0 " style={{ minHeight: "100vh", marginTop: "6rem" }}>
          {cartItem.length !== 0 ? (
            <div className="row p-0 mx-0 justify-content-center">
              <div className="row col-8 mx-0 justify-content-start">
                {cartItem.map((item) => {
                  console.log(item.title);
                  return (
                    <div key={item.id} className="card col-12 flex-row mb-3 px-0" style={{ height: "10rem" }}>
                      <img className="card-img-top" src={item.img} alt="img" style={{ width: "30vw" }} />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          <span>{item.price}</span>
                        </p>
                        <button className="btn btn-danger">REMOVE</button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-4">
                <div class="card" style={{ minHeight: "20vh !important", position: "fixed", width: "30%" }}>
                  <div class="card-header">PRICE DETAILS</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between ">
                      Price({cartItem.length} item) <span>Rs 200</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                      Delivery Fee <span className="text-success">FREE</span>
                    </li>
                  </ul>
                  <div class="card-header d-flex justify-content-between" style={{ fontWeight: 700 }}>
                    Total Amount <span>Rs {TotalSum}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row align-items-center vh-100">Cart is Empty</div>
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItem: state.cartItem,
});

export default connect(mapStateToProps, null)(Cart);
