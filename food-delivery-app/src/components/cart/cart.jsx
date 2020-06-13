import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  render() {
    const { cartItem } = this.props;

    return (
      <>
        <div className="row m-0 align-items-center justify-content-center " style={{ minHeight: "100vh" }}>
          <div className="col-4 p-0">
            {cartItem.length !== 0 ? (
              cartItem.map((item) => {
                console.log(item.title);
                return (
                  <div key={item.id} className="card mb-3  ">
                    <img className="card-img-top" style={{ height: "100px" }} src={item.img} alt="img" />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        <span>{item.price}</span>
                      </p>
                      <button className="btn btn-primary">BUY</button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="row">
                <h1>Cart is empty</h1>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItem: state.cartItem,
});

export default connect(mapStateToProps, null)(Cart);
