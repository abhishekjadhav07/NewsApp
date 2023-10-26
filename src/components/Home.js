import React, { Component } from "react";
import "../index.css";
import img from "../assets/hero-img.png";

export default class Home extends Component {
  //   imagePath = "./assets/hero-img.png";
  render() {
    return (
      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
              Empowering Your News Experience
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
              Innovative Solutions for a Modern News App Design
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start"></div>
              </div>
            </div>
            <div
              class="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={img} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
