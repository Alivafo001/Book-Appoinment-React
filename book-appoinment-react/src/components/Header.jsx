import React from 'react'

function Header() {
  return (
    <header className="header">
    <div className="header__container">
        <div className="header__top">
            <div className="header__top__container container">
                <ul className="header__top__list">
                    <li className="header__top__item">
                        <a href="#" className="header__top__link">
                            book an appointment
                        </a>
                    </li>
                    <li className="header__top__item">
                        <a href="#" className="header__top__link">
                            5 Year After Sales Service
                        </a>
                    </li>
                    <li className="header__top__item">
                        <a href="#" className="header__top__link">
                            +44 020 7430 1138
                        </a>
                    </li>
                </ul>
            </div>
            </div>
            <div className="header__bottom__bot">
                <div className="header__bottom container">
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    engagement rings
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    wedding rings
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    earrings
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    guides & articles
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    design process
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    reviews
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    contact us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
    </div>
</header>
  )
}

export default Header;