import React, { Component } from "react";
import styles from "./HomeCard.module.css";
import { Link } from "react-router-dom";

export default class HomeCard extends Component {
  render() {
    return (
      <div className="container-fluid my-5 ">
        <div className="row mx-5">
          <div className="col-3 ">
            <Link to="/product " style={{ textDecoration: "none" }}>
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png" alt="Card" />
                <div class="card-body">
                  <p class="card-text" id={styles.text}>
                    Order Food Online
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src="https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png" alt="Card" />
              <div class="card-body">
                <p class="card-text">NightLife's and club</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src="https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png" alt="Card" />
              <div class="card-body">
                <p class="card-text">Go out for meal</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src="https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png" alt="Card" />
              <div class="card-body">
                <p class="card-text">Romato Gold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
