import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/Action";

class Products extends React.Component {
  render() {
    const { searchData, cartItem } = this.props;
    console.log(this.props);

    const card = searchData?.map((item, index) => {
      return (
        <div key={index} className="col-4 my-5">
          <div>
            <div className="card">
              <img className="card-img-top" src={item.img} alt="img" />
              <div className="card-body">
                <h6 className="card-title display-5 ">{item.name}</h6>
                <span>Rs{item.price}</span>
              </div>
              <button className="btn btn-info" onClick={() => cartItem(item)}>
                Add to cart
              </button>
            </div>
          </div>
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
