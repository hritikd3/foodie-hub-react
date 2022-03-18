import React from "react";

export default function Category() {
  return (
    <>
      {/* category section starts  */}
      <section className="category" id="cat">
        <a href="/#" className="box">
          <img src={"assests/image/cat-1.png"} alt="" />
          <h3>combo</h3>
        </a>
        <a href="/#" className="box">
          <img src={"assests/image/cat-2.png"} alt="" />
          <h3>pizza</h3>
        </a>
        <a href="/#" className="box">
          <img src={"assests/image/cat-3.png"} alt="" />
          <h3>burger</h3>
        </a>
        <a href="/#" className="box">
          <img src={"assests/image/cat-4.png"} alt="" />
          <h3>chicken</h3>
        </a>
        <a href="/#" className="box">
          <img src={"assests/image/cat-5.png"} alt="" />
          <h3>dinner</h3>
        </a>
        <a href="/#" className="box">
          <img src={"assests/image/cat-6.png"} alt="" />
          <h3>coffee</h3>
        </a>
      </section>
      {/* category section ends */}
    </>
  );
}
