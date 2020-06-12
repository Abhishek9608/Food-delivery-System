import React from "react";
// import { connect } from "react-redux";
import { searchItem } from "../../redux/Action";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    // const { searchItem } = this.props;
    return (
      <>
        <div className="row m-0 ">
          <div className=" col-12 p-0" style={{ backgroundImage: "url(/Image/hotel_banner.jpeg)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "90vh" }}>
            <div className="row align-items-center h-100 m-0">
              <div className="col-12 d-flex align-items-center flex-column ">
                <h1 className=" text-white">Romato</h1>
                <h1 class="display-5 mt-3  text-white ">Discover the best food & drinks in Kolkata</h1>
                <div className="col-8 ">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      value={this.state.value}
                      onChange={(e) => this.setState({ value: e.target.value })}
                    />
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2" onClick={() => searchItem(this.state.value)}>
                        @example.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   searchItem: (payload) => dispatch(searchItem(payload)),
// });

// export default connect(mapDispatchToProps)(Banner);

export default Banner;
