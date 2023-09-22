import React from "react";
import shopOne from "../img/shopone.jpg";
import shopTwo from "../img/shoptwo.jpg";
import shopThree from "../img/shopthree.jpg";

function Shop() {
  const shopArr = [
    {
      id: 1,
      img: shopOne,
      text: `earrings`,
    },
    {
      id: 2,
      img: shopTwo,
      text: `wedding rings`,
    },
    {
      id: 3,
      img: shopThree,
      text: `engagement rings`,
    },
  ];
  return (
    <section className="shop">
      <div className="shop__container container">
        <h2 className="shop__title">shop by category</h2>
        <div className="shop__cards">
          {/* <div className="shop__card">
            <img
              src={shopOne}
              alt="shop banner"
              className="shop__card__banner"
            />
            <p className="shop__card__text">earrings</p>
          </div>
          <div className="shop__card">
            <img
              src={shopTwo}
              alt="shop banner"
              className="shop__card__banner"
            />
            <p className="shop__card__text">wedding rings</p>
          </div>
          <div className="shop__card">
            <img
              src={shopThree}
              alt="shop banner"
              className="shop__card__banner"
            />
            <p className="shop__card__text">engagement rings</p>
          </div> */}
          {shopArr.map((shopItem) => {
            return (
              <div key={shopItem.id} className="shop__card">
                <img
                  src={shopItem.img}
                  alt="shop banner"
                  className="shop__card__banner"
                />
                <p className="shop__card__text">{shopItem.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Shop;
