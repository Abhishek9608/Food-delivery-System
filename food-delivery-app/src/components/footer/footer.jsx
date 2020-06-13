import React from "react";
import { Link } from "react-router-dom";
import styles from "../footer/footer.module.css";

const Footer = () => {
  return (
    <>
      <footer class="mainfooter m-0" role="contentinfo" className={styles.footer}>
        <div className={styles.footerMiddle}>
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>COMPANY</h4>
                  <ul class="list-unstyled">
                    <li>
                      <Link className={styles.Link} to="/">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Careers</Link>
                    </li>
                    <li>
                      <Link to="/">contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>Support</h4>
                  <ul class="list-unstyled">
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Help</Link>
                    </li>
                    <li>
                      <Link to="/">Shipping Return</Link>
                    </li>
                    <li>
                      <Link to="/">Romato Bussiness</Link>
                    </li>
                    <li>
                      <Link to="/">Ahmedabad</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>About Romato</h4>
                  <ul class="list-unstyled">
                    <li>
                      <Link to="/">Studio Proper is a Melbourne based product design studio dedicated to simplifying everyday experiences with technology.</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <h4>Follow Us</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 " className={styles.copy}>
                <p class="text-center">&copy; Copyright 2020 - Phone. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
