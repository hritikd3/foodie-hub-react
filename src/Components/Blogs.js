import React from "react";

export default function Blogs() {
  return (
    <>
      {/* blogs section starts  */}
      <section className="blogs" id="blogs">
        <div className="heading">
          <span>our blogs</span>
          <h3>our daily stories</h3>
        </div>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <h3>
                {" "}
                <i className="fas fa-calendar" /> 21st may, 2021{" "}
              </h3>
              <img src={"assests/image/blog-1.jpg"} alt="" />
            </div>
            <div className="content">
              <div className="tags">
                <a href="/#">
                  {" "}
                  <i className="fas fa-tag" /> food /{" "}
                </a>
                <a href="/#">
                  {" "}
                  <i className="fas fa-tag" /> burger /{" "}
                </a>
                <a href="/#">
                  {" "}
                  <i className="fas fa-tag" /> pizza
                </a>
              </div>
              <h3>your one and only partner...</h3>
              <p>our blogs you must check for updates.</p>
              <a href="/#" className="btn">
                read more
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <h3>
                {" "}
                <i className="fas fa-calendar" /> 21st may, 2021{" "}
              </h3>
              <img src={"assests/image/blog-2.jpg"} alt="" />
            </div>
            <div className="content">
              <div className="tags">
                <a href="/#">
                  {" "}
                  <i className="fas fa-tag" /> food /{" "}
                </a>
                <a href="/#">
                  {" "}
                  <i className="fas fa-tag" /> burger /{" "}
                </a>
                <a href="/#">
                  {" "}
                  <i className="fas fa-tag" /> pizza
                </a>
              </div>
              <h3>why not to eat junk food daily..</h3>
              <p>our blogs you must check for updates.</p>
              <a href="/#" className="btn">
                read more
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <h3>
                {" "}
                <i className="fas fa-calendar" /> 21st may, 2021{" "}
              </h3>
              <img src={"assests/image/blog-3.jpg"} alt="" />
            </div>
            <div className="content">
              <div className="tags">
                <a href="/#">
                  {" "}
                  <i className="fas fa-tag" /> food /{" "}
                </a>
                <a href="/#">
                  {" "}
                  <i className="fas fa-tag" /> burger /{" "}
                </a>
                <a href="/#">
                  {" "}
                  <i className="fas fa-tag" /> pizza
                </a>
              </div>
              <h3>Foodie hub goes to wheel o meal...</h3>
              <p>our blogs you must check for updates.</p>
              <a href="/#" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* blogs section ends */}
    </>
  );
}
