import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer__container container">
            <div className="footer__cards">
                <div className="footer__card">
                    <h2 className="footer__card__title">
                        BUDREVICH FINE JEWELLERY STUDIO
                    </h2>
                    <p className="footer__card__text">
                        14 Arundel House, 43 Kirby Street, 
                        Hatton Garden, London, EC1N 8TE
                        United Kingdom
                    </p>
                          <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__card__link__text">
                                    info@budrevich.co.uk
                                </a>
                                </li>
                                <li className="footer__item">
                                <a href="#" className="footer__card__link__text">
                                    Ph.: +44 020 7430 1138
                                </a>
                              </li>
                          </ul>
                </div>
            </div>
    </div>
</footer>
  )
}

export default Footer