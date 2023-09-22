import React from 'react'
import cardBannerOne from '../img/cardbanner.jpg'
import cardBannerTwo from '../img/cardbannertwo.jpg'
import cardBannerThree from '../img/cardbannerthree.jpg'
import cardBannerFour from '../img/cardbannerfour.jpg'
import Btn from './Btn'

function Setting() {
    const Arr = [
        {
            id: 1,
            title: 'Solitaire setting',
            img: cardBannerOne,
            text: `The quintessential engagement ring style, the solitaire setting features a single, central stone set upon a simple band. Pure and minimalist, it's a timeless design that sets your diamond or coloured stone centre stage, with no additional flourishes to detract from its beauty. If you are looking for an engagement ring that combines simplicity and elegance, the solitaire setting is a true classNameic.`,
            link: <Btn>view collection</Btn>

        },
        {
            id: 2,
            title: 'Solitaire setting',
            img: cardBannerTwo,
            text: `The quintessential engagement ring style, the solitaire setting features a single, central stone set upon a simple band. Pure and minimalist, it's a timeless design that sets your diamond or coloured stone centre stage, with no additional flourishes to detract from its beauty. If you are looking for an engagement ring that combines simplicity and elegance, the solitaire setting is a true classNameic.`,
            link: <Btn>view collection</Btn>

        },
        {
            id: 3,
            title: 'Solitaire setting',
            img: cardBannerThree,
            text: `The quintessential engagement ring style, the solitaire setting features a single, central stone set upon a simple band. Pure and minimalist, it's a timeless design that sets your diamond or coloured stone centre stage, with no additional flourishes to detract from its beauty. If you are looking for an engagement ring that combines simplicity and elegance, the solitaire setting is a true classNameic.`,
            link: <Btn>view collection</Btn>
        },
        {
            id: 4,
            title: 'Solitaire setting',
            img: cardBannerFour,
            text: `The quintessential engagement ring style, the solitaire setting features a single, central stone set upon a simple band. Pure and minimalist, it's a timeless design that sets your diamond or coloured stone centre stage, with no additional flourishes to detract from its beauty. If you are looking for an engagement ring that combines simplicity and elegance, the solitaire setting is a true classNameic.`,
            link: <Btn>view collection</Btn>

        },
    ]
  return (
    <section className="setting">
            <div className="setting__container container">
                <div className="cards">
                    <p className="card__text">
                        The setting of your engagement ring is one of the most important considerations when shopping for this jewel that will represent the love you share for many years to come. It determines the design and aesthetic more than any other factor while at the same time securing the stones firmly in place.
                        <br />
                        <br />
                        Discover the different types of engagement ring setting at Budrevich, each of which brings a diamond or coloured stone to life in its own unique way.
                    </p>
                    {/* <div className="card">
                        <h2 className="card__title">
                            Solitaire setting
                        </h2>
                        <img src={cardBannerOne} alt="banner" className="card__banner" />
                        <p className="card__text__two">
                            The quintessential engagement ring style, the solitaire setting features a single, central stone set upon a simple band. Pure and minimalist, it's a timeless design that sets your diamond or coloured stone centre stage, with no additional flourishes to detract from its beauty. If you are looking for an engagement ring that combines simplicity and elegance, the solitaire setting is a true classNameic.
                        </p>
                        <a href="#" className="card__link">
                            view collection
                        </a>
                    </div>
                    <div className="card">
                        <h2 className="card__title">
                            Solitaire setting
                        </h2>
                        <img src={cardBannerTwo} alt="banner" className="card__banner" />
                        <p className="card__text__two">
                            The quintessential engagement ring style, the solitaire setting features a single, central stone set upon a simple band. Pure and minimalist, it's a timeless design that sets your diamond or coloured stone centre stage, with no additional flourishes to detract from its beauty. If you are looking for an engagement ring that combines simplicity and elegance, the solitaire setting is a true classNameic.
                        </p>
                        <a href="#" className="card__link">
                            view collection
                        </a>
                    </div>
                    <div className="card">
                        <h2 className="card__title">
                            Solitaire setting
                        </h2>
                        <img src={cardBannerThree} alt="banner" className="card__banner" />
                        <p className="card__text__two">
                            The quintessential engagement ring style, the solitaire setting features a single, central stone set upon a simple band. Pure and minimalist, it's a timeless design that sets your diamond or coloured stone centre stage, with no additional flourishes to detract from its beauty. If you are looking for an engagement ring that combines simplicity and elegance, the solitaire setting is a true classNameic.
                        </p>
                        <a href="#" className="card__link">
                            view collection
                        </a>
                    </div>
                    <div className="card">
                        <h2 className="card__title">
                            Solitaire setting
                        </h2>
                        <img src={cardBannerFour} alt="banner" className="card__banner" />
                        <p className="card__text__two">
                            The quintessential engagement ring style, the solitaire setting features a single, central stone set upon a simple band. Pure and minimalist, it's a timeless design that sets your diamond or coloured stone centre stage, with no additional flourishes to detract from its beauty. If you are looking for an engagement ring that combines simplicity and elegance, the solitaire setting is a true classNameic.
                        </p>
                        <a href="#" className="card__link">
                            view collection
                        </a>
                    </div> */}
                    {
                        Arr.map((item)=>{
                            return(
                                <div key={item.id} className="card">
                                <h2 className="card__title">
                                    {item.title}
                                </h2>
                                <img src={item.img} alt="banner" className="card__banner" />
                                <p className="card__text__two">
                                    {item.text}
                                </p>
                                <a href="#" className="card__link">
                                    {item.link}
                                </a>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
  )
}

export default Setting