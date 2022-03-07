import React from "react";

export default function Footer() {
  return (
    <>
      {/* footer section starts  */}
      <section className="footer">
        <div className="newsletter">
          <h3>newsletter</h3>
          <form action>
            <input type="email" name placeholder="enter your email" id />
            <input type="submit" defaultValue="subscribe" />
          </form>
        </div>
        <div className="box-container">
          <div className="box">
            <h3>our menu</h3>
            <a href="#">
              <i className="fas fa-arrow-right" /> pizza
            </a>
            <a href="#">
              <i className="fas fa-arrow-right" /> burger
            </a>
            <a href="#">
              <i className="fas fa-arrow-right" /> chicken
            </a>
            <a href="#">
              <i className="fas fa-arrow-right" /> pasta
            </a>
            <a href="#">
              <i className="fas fa-arrow-right" /> and more...
            </a>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <a href="#home">
              {" "}
              <i className="fas fa-arrow-right" /> home
            </a>
            <a href="#about">
              {" "}
              <i className="fas fa-arrow-right" /> about
            </a>
            <a href="#popular">
              {" "}
              <i className="fas fa-arrow-right" /> popular
            </a>
            <a href="#menu">
              {" "}
              <i className="fas fa-arrow-right" /> menu
            </a>
            <a href="#order">
              {" "}
              <i className="fas fa-arrow-right" /> order
            </a>
            <a href="#blogs">
              {" "}
              <i className="fas fa-arrow-right" /> blogs
            </a>
          </div>
          <div className="box">
            <h3>extra links</h3>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right" /> my order
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right" /> my account
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right" /> my favorite
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right" /> terms of use
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right" /> privary policy
            </a>
          </div>
          <div className="box">
            <h3>opening hours</h3>
            <p>monday : 7:00am to 10:00pm</p>
            <p>tuesday : 7:00am to 10:00pm</p>
            <p>wednesday : 7:00am to 10:00pm</p>
            <p>friday h : 7:00am to 10:00pm</p>
            <p>saturday and sunday closed</p>
          </div>
        </div>
        <div className="bottom">
          <div className="share">
            <a href="#" className="fab fa-facebook-f" />
            <a href="#" className="fab fa-twitter" />
            <a href="#" className="fab fa-instagram" />
            <a href="#" className="fab fa-linkedin" />
            <a href="#" className="fab fa-pinterest" />
          </div>
          <div className="credit">
            {" "}
            created by{" "}
            <a
              href=""
              onClick={() =>
                alert(
                  "ʕ•́ᴥ•̀ʔ currently Smashing my keyboard until something good happens... 😄"
                )
              }
            >
              <span> hritik singh </span>
            </a>{" "}
            | all rights reserved!{" "}
          </div>
        </div>
      </section>
      {/* footer section ends */}
    </>
  );
}
