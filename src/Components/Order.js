import React from "react";

export default function Order() {
  return (
    <>
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
              {/* <iframe
                className="map"
                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1634657187694!5m2!1sen!2sin"}
                allowFullScreen      loading="lazy"
              /> */}
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
    </>
  );
}
