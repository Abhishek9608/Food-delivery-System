import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    const { cartItem } = this.props;
    console.log(cartItem);
    // console.log(this.props);

    return (
      <>
        <div className="row m-0 align-items-center justify-content-center " style={{ minHeight: "100vh" }}>
          <div className="col-6 p-0">
            {cartItem.map((item) => {
              return (
                <div key={item.id} class="card mb-3  ">
                  <img class="card-img-top" style={{ height: "100px" }} src={item.img} alt="img" />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">
                      <h1>{item.price}</h1>
                    </p>
                    <button class="btn btn-primary">CheckOut</button>
                  </div>
                </div>
              );
            })}
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

// export default Banner;
