import React from "react";
import "../styles.css";
export default function Home() {
  return (
    <>
      <div>
        {/* header section starts  */}
        <header className="header">
          <a href="#" className="logo">
            {" "}
            <i className="fas fa-utensils" /> foodie hub{" "}
          </a>
          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#popular">popular</a>
            <a href="#menu">menu</a>
            <a href="#order">order</a>
            <a href="#blogs">blogs</a>
          </nav>
          <div className="icons">
            <div id="menu-btn" className="fas fa-bars" />
            <div id="search-btn" className="fas fa-search" />
            <div id="cart-btn" className="fas fa-shopping-cart" />
            <div id="login-btn" className="fas fa-user" />
          </div>
        </header>
        {/* header section ends  */}
        {/* search-form  */}
        <section className="search-form-container">
          <form action>
            <input
              type="search"
              name
              placeholder="search here..."
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search" />
          </form>
        </section>
        {/* shopping-cart section  */}
        <section className="shopping-cart-container">
          <div className="products-container">
            <h3 className="title">your products</h3>
            <div className="box-container">
              <div className="box">
                <i className="fas fa-times" />
                <img src={"./assests/image/menu-1.png"} alt="" />
                <div className="content">
                  <h3>delicious food</h3>
                  <span> quantity : </span>
                  <input type="number" name defaultValue={1} id />
                  <br />
                  <span> price : </span>
                  <span className="price"> $40.00 </span>
                </div>
              </div>
              <div className="box">
                <i className="fas fa-times" />
                <img src="image/menu-2.png" alt="" />
                <div className="content">
                  <h3>delicious food</h3>
                  <span> quantity : </span>
                  <input type="number" name defaultValue={1} id />
                  <br />
                  <span> price : </span>
                  <span className="price"> $40.00 </span>
                </div>
              </div>
              <div className="box">
                <i className="fas fa-times" />
                <img src={"./assests/image/menu-3.png"} alt="" />
                <div className="content">
                  <h3>delicious food</h3>
                  <span> quantity : </span>
                  <input type="number" name defaultValue={1} id />
                  <br />
                  <span> price : </span>
                  <span className="price"> $40.00 </span>
                </div>
              </div>
              <div className="box">
                <i className="fas fa-times" />
                <img src="image/menu-4.png" alt="" />
                <div className="content">
                  <h3>delicious food</h3>
                  <span> quantity : </span>
                  <input type="number" name defaultValue={1} id />
                  <br />
                  <span> price : </span>
                  <span className="price"> $40.00 </span>
                </div>
              </div>
              <div className="box">
                <i className="fas fa-times" />
                <img src="image/menu-5.png" alt="" />
                <div className="content">
                  <h3>delicious food</h3>
                  <span> quantity : </span>
                  <input type="number" name defaultValue={1} id />
                  <br />
                  <span> price : </span>
                  <span className="price"> $40.00 </span>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-total">
            <h3 className="title"> cart total </h3>
            <div className="box">
              <h3 className="subtotal">
                {" "}
                subtotal : <span>$200</span>{" "}
              </h3>
              <h3 className="total">
                {" "}
                total : <span>$200</span>{" "}
              </h3>
              <a href="#" className="btn">
                proceed to checkout
              </a>
            </div>
          </div>
        </section>
        {/* login-form  */}
        <div className="login-form-container">
          <form action>
            <h3>login form</h3>
            <input
              type="email"
              name
              placeholder="enter your email"
              id
              className="box"
            />
            <input
              type="password"
              name
              placeholder="enter your password"
              id
              className="box"
            />
            <div className="remember">
              <input type="checkbox" name id="remember-me" />
              <label htmlFor="remember-me">remember me</label>
            </div>
            <input type="submit" defaultValue="login now" className="btn" />
            <p>
              forget password? <a href="#">click here</a>
            </p>
            <p>
              don't have an account? <a href="#">create one</a>
            </p>
          </form>
        </div>
        {/* home section starts  */}
        <section className="home" id="home">
          <div className="content">
            <span>welcome foodies</span>
            <h3>different spices for the different tastes 😋</h3>
            <p>Great taste for great you only at Foodie hub.</p>
            <a href="#" className="btn">
              order now
            </a>
          </div>
          <div className="image">
            <img
              src={"./assests/image/home-img.png"}
              alt=""
              className="home-img"
            />
            <img
              src={"./assests/image/home-parallax-img.png"}
              alt=""
              className="home-parallax-img"
            />
          </div>
        </section>
        {/* home section ends  */}
      </div>
    </>
  );
}
