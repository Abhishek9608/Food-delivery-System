import React from "react";
import { connect } from "react-redux";
// import { searchItem } from "../../redux/Action";
// import { searchItem } from "../../redux/Action";
import { Link } from "react-router-dom";

class Products extends React.Component {
  render() {
    const { searchData } = this.props;

    // console.log(searchData[0].id);
    const card = searchData.map((item, index) => {
      return (
        <div className="col-4">
          <Link to="/">
            <div class="card">
              <img class="card-img-top" src="https://placeimg.com/640/480/tech" alt="img" />
              <div class="card-body">
                <h6 class="card-title display-5 ">{item.name}</h6>
                <span>{item.price}</span>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div className="container mt-5 ">
        <div className="row  ">{card}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  searchData: state.searchData,
});

export default connect(mapStateToProps, null)(Products);

// export default Banner;
