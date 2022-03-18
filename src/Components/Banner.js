import React from "react";

export default function Banner() {
  return (
    <>
      {/* banner section starts  */}
      <section className="banner" id="banner">
        <div className="row-banner">
          <div className="content">
            <span>double cheese</span>
            <h3>burger</h3>
            <p>with cococola and fries</p>
            <a href="#order" className="btn">
              order now
            </a>
          </div>
        </div>
        <div className="grid-banner">
          <div className="grid">
            <img src={"assests/image/banner-1.png"} alt="" />
            <div className="content">
              <span>special offer</span>
              <h3>upto 50% off</h3>
              <a href="#order" className="btn">
                order now
              </a>
            </div>
          </div>
          <div className="grid">
            <img src={"assests/image/banner-2.png"} alt="" />
            <div className="content center">
              <span>special offer</span>
              <h3>upto 25% extra</h3>
              <a href="#order" className="btn">
                order now
              </a>
            </div>
          </div>
          <div className="grid">
            <img src={"assests/image/banner-3.png"} alt="" />
            <div className="content">
              <span>limited offer</span>
              <h3>100% cashback</h3>
              <a href="#banner" className="btn">
                order now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* banner section ends */}
    </>
  );
}
