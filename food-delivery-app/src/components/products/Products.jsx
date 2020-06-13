import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../../redux/Action";

class Products extends React.Component {
  render() {
    const { searchData, cartItem } = this.props;
    // console.log(cartItem.length);
    // console.log(this.props);

    const card = searchData?.map((item, index) => {
      return (
        <div key={index} className="col-4">
          <Link to="/cart" onClick={() => cartItem(item)}>
            <div className="card">
              <img className="card-img-top" src={item.img} alt="img" />
              <div className="card-body">
                <h6 className="card-title display-5 ">{item.name}</h6>
                <span>{item.price}</span>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div className="container mt-5 ">
        <div className="row">{card}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  searchData: state.searchData,
});

const mapDispatchToProps = (dispatch) => ({
  cartItem: (payload) => dispatch(addItem(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

// export default Banner;
