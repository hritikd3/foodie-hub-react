import React from "react";
// import "./style.scss"
import Home from './Components/Home'
import "./styles.css";
export default function App() {
  return (
    <div>
      <Home />
      {/* category section starts  */}
      <section className="category">
        <a href="#" className="box">
          <img src={"./assests/image/cat-1.png"} alt="" />
          <h3>combo</h3>
        </a>
        <a href="#" className="box">
          <img src={"./assests/image/cat-2.png"} alt="" />
          <h3>pizza</h3>
        </a>
        <a href="#" className="box">
          <img src={"./assests/image/cat-3.png"} alt="" />
          <h3>burger</h3>
        </a>
        <a href="#" className="box">
          <img src={"./assests/image/cat-4.png"} alt="" />
          <h3>chicken</h3>
        </a>
        <a href="#" className="box">
          <img src={"./assests/image/cat-5.png"} alt="" />
          <h3>dinner</h3>
        </a>
        <a href="#" className="box">
          <img src={"./assests/image/cat-6.png"} alt="" />
          <h3>coffee</h3>
        </a>
      </section>
      {/* category section ends */}
      {/* about section starts  */}
      <section className="about" id="about">
        <div className="image">
          <img src={"./assests/image/about-img.png"} alt="" />
        </div>
        <div className="content">
          <span>why choose us?</span>
          <h3 className="title">what's make our food delicious!</h3>
          <p>our customers are our first periority</p>
          <a href="#" className="btn">
            read more
          </a>
          <div className="icons-container">
            <div className="icons">
              <img src={"./assests/image/serv-1.png"} alt="" />
              <h3>fast delivery</h3>
            </div>
            <div className="icons">
              <img src={"./assests/image/serv-2.png"} alt="" />
              <h3>fresh food</h3>
            </div>
            <div className="icons">
              <img src={"./assets/image/serv-3.png"} alt="" />
              <h3>best quality</h3>
            </div>
            <div className="icons">
              <img src={"./assets/image/serv-4.png"} alt="" />
              <h3>24/7 support</h3>
            </div>
          </div>
        </div>
      </section>
      {/* about section ends */}
      {/* popular section starts  */}
      <section className="popular" id="popular">
        <div className="heading">
          <span>popular food</span>
          <h3>our special dishes</h3>
        </div>
        <div className="box-container">
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <div className="image">
              <img src={"./assests/image/food-1.png"} alt="" />
            </div>
            <div className="content">
              <h3>delicious food</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span> (50) </span>
              </div>
              <div className="price">
                $40.00 <span>$50.00</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <div className="image">
              <img src={"./assests/image/food-2.png"} alt="" />
            </div>
            <div className="content">
              <h3>delicious food</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span> (50) </span>
              </div>
              <div className="price">
                $40.00 <span>$50.00</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <div className="image">
              <img src={"./assests/image/food-3.png"} alt="" />
            </div>
            <div className="content">
              <h3>delicious food</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span> (50) </span>
              </div>
              <div className="price">
                $40.00 <span>$50.00</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <div className="image">
              <img src={"./assests/image/food-4.png"} alt="" />
            </div>
            <div className="content">
              <h3>delicious food</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span> (50) </span>
              </div>
              <div className="price">
                $40.00 <span>$50.00</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <div className="image">
              <img src={"./assests/image/food-5.png"} alt="" />
            </div>
            <div className="content">
              <h3>delicious food</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span> (50) </span>
              </div>
              <div className="price">
                $40.00 <span>$50.00</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <div className="image">
              <img src={"./assests/image/food-6.png"} alt="" />
            </div>
            <div className="content">
              <h3>delicious food</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span> (50) </span>
              </div>
              <div className="price">
                $40.00 <span>$50.00</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <div className="image">
              <img src={"./assests/image/food-7.png"} alt="" />
            </div>
            <div className="content">
              <h3>delicious food</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span> (50) </span>
              </div>
              <div className="price">
                $40.00 <span>$50.00</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <div className="image">
              <img src={"./assests/image/food-8.png"} alt="" />
            </div>
            <div className="content">
              <h3>delicious food</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span> (50) </span>
              </div>
              <div className="price">
                $40.00 <span>$50.00</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* popular section ends */}
      {/* banner section starts  */}
      <section className="banner">
        <div className="row-banner">
          <div className="content">
            <span>double cheese</span>
            <h3>burger</h3>
            <p>with cococola and fries</p>
            <a href="#" className="btn">
              order now
            </a>
          </div>
        </div>
        <div className="grid-banner">
          <div className="grid">
            <img src={"./assests/image/banner-1.png"} alt="" />
            <div className="content">
              <span>special offer</span>
              <h3>upto 50% off</h3>
              <a href="#" className="btn">
                order now
              </a>
            </div>
          </div>
          <div className="grid">
            <img src={"./assests/image/banner-2.png"} alt="" />
            <div className="content center">
              <span>special offer</span>
              <h3>upto 25% extra</h3>
              <a href="#" className="btn">
                order now
              </a>
            </div>
          </div>
          <div className="grid">
            <img src={"./assests/image/banner-3.png"} alt="" />
            <div className="content">
              <span>limited offer</span>
              <h3>100% cashback</h3>
              <a href="#" className="btn">
                order now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* banner section ends */}
      {/* menu section starts  */}
      <section className="menu" id="menu">
        <div className="heading">
          <span>our menu</span>
          <h3>our top dishes</h3>
        </div>
        <div className="box-container">
          <a href="#" className="box">
            <img src={"./assests/image/menu-1.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
          <a href="#" className="box">
            <img src={"./assests/image/menu-2.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
          <a href="#" className="box">
            <img src={"./assests/image/menu-3.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
          <a href="#" className="box">
            <img src={"./assests/image/menu-4.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
          <a href="#" className="box">
            <img src={"./assests/image/menu-5.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
          <a href="#" className="box">
            <img src={"./assests/image/menu-6.png"} alt="" />
            <div className="content">
              <h3>delicious food</h3>
              <div className="price">$40.00</div>
            </div>
          </a>
        </div>
      </section>
      {/* menu section ends */}
      {/* order section starts  */}
      <section className="order" id="order">
        <div className="heading">
          <span>order now</span>
          <h3>fastest home delivery</h3>
        </div>
        <div className="icons-container">
          <div className="icons">
            <img src={"./assests/image/icon-1.png"} alt="" />
            <h3>7:00am to 10:30pm</h3>
          </div>
          <div className="icons">
            <img src={"./assests/image/icon-2.png"} alt="" />
            <h3>+1 31922435533</h3>
          </div>
          <div className="icons">
            <img src={"./assests/image/icon-3.png"} alt="" />
            <h3>mumbai, india - 400104</h3>
          </div>
        </div>
        <form action>
          <div className="flex">
            <div className="inputBox">
              <span>your name</span>
              <input type="text" placeholder="customer's name" name id />
            </div>
            <div className="inputBox">
              <span>your number</span>
              <input type="number" placeholder="customer's number" name id />
            </div>
          </div>
          <div className="flex">
            <div className="inputBox">
              <span>your order</span>
              <input type="text" placeholder="food you want" name id />
            </div>
            <div className="inputBox">
              <span>how much</span>
              <input type="number" placeholder="number or orders" name id />
            </div>
          </div>
          <div className="flex">
            <div className="inputBox">
              <span>your details</span>
              <input type="text" placeholder="your message" name id />
            </div>
            <div className="inputBox">
              <span>pick up time</span>
              <input type="datetime-local" />
            </div>
          </div>
          <div className="flex">
            <div className="inputBox">
              <textarea
                placeholder="your address"
                id
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
            <div className="inputBox">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1634657187694!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <input
            type="submit"
            defaultValue="proceed to order"
            className="btn"
          />
        </form>
      </section>
      {/* order section ends */}
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
              <img src={"./assests/image/blog-1.jpg"} alt="" />
            </div>
            <div className="content">
              <div className="tags">
                <a href="#">
                  {" "}
                  <i className="fas fa-tag" /> food /{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-tag" /> burger /{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-tag" /> pizza
                </a>
              </div>
              <h3>your one and only partner...</h3>
              <p>our blogs you must check for updates.</p>
              <a href="#" className="btn">
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
              <img src={"./assests/image/blog-2.jpg"} alt="" />
            </div>
            <div className="content">
              <div className="tags">
                <a href="#">
                  {" "}
                  <i className="fas fa-tag" /> food /{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-tag" /> burger /{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-tag" /> pizza
                </a>
              </div>
              <h3>why not to eat junk food daily..</h3>
              <p>our blogs you must check for updates.</p>
              <a href="#" className="btn">
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
              <img src={"./assests/image/blog-3.jpg"} alt="" />
            </div>
            <div className="content">
              <div className="tags">
                <a href="#">
                  {" "}
                  <i className="fas fa-tag" /> food /{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-tag" /> burger /{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-tag" /> pizza
                </a>
              </div>
              <h3>Foodie hub goes to wheel o meal...</h3>
              <p>our blogs you must check for updates.</p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* blogs section ends */}
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
            created <span>mr. hritik singh</span> | all rights reserved!{" "}
          </div>
        </div>
      </section>
      {/* footer section ends */}
    </div>
  );
}
