import React from "react";

export default function Menu() {
  return (
    <>
      {/* menu section starts  */}
      <section className="menu" id="menu">
        <div className="heading">
          <span>our menu</span>
          <h3>our top dishes</h3>
        </div>
        <div className="box-container">
          <a href="/#" className="box">
            <img src={"assests/image/menu-1.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
          <a href="/#" className="box">
            <img src={"assests/image/menu-2.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
          <a href="/#" className="box">
            <img src={"assests/image/menu-3.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
          <a href="/#" className="box">
            <img src={"assests/image/menu-4.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
          <a href="/#" className="box">
            <img src={"assests/image/menu-5.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
          <a href="/#" className="box">
            <img src={"assests/image/menu-6.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
        </div>
      </section>
      {/* menu section ends */}
    </>
  );
}
