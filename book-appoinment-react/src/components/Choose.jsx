import React from 'react'
import groupOne from '../img/Group 84.png'
import groupTwo from '../img/Group 85.png'
import groupThree from '../img/Budrevich/Group 86.png'
import groupFour from '../img/Budrevich/Group 87.png'

function Choose() {
    const chooseArr = [
        {
            id: 1,
            img: groupOne,
            text: `DIALOGUE BETWEEN CLIENT
            AND CRAFTSMAN`,
        },
        {
            id: 2,
            img: groupTwo,
            text: `DIALOGUE BETWEEN CLIENT
            AND CRAFTSMAN`,
        },
        {
            id: 3,
            img: groupThree,
            text: `DIALOGUE BETWEEN CLIENT
            AND CRAFTSMAN`,
        },
        {
            id: 4,
            img: groupFour,
            text: `DIALOGUE BETWEEN CLIENT
            AND CRAFTSMAN`,
        },
    ]
  return (
    <section className="choose">
    <div className="choose__container container">
        <h2 className="choose__title">
            Why choose us?
        </h2>
        <div className="choose__cards">
            {/* <div className="choose__card">
                <img src={groupOne} alt="banner" className="choose__card__img" />
                <p className="choose__card__text">
                    DIALOGUE BETWEEN CLIENT
                    AND CRAFTSMAN
                </p>
            </div>
            <div className="choose__card">
                <img src={groupTwo} alt="banner" className="choose__card__img" />
                <p className="choose__card__text">
                    DIALOGUE BETWEEN CLIENT
                    AND CRAFTSMAN
                </p>
            </div>
            <div className="choose__card">
                <img src={groupThree} alt="banner" className="choose__card__img" />
                <p className="choose__card__text">
                    DIALOGUE BETWEEN CLIENT
                    AND CRAFTSMAN
                </p>
            </div>
            <div className="choose__card">
                <img src={groupFour} alt="banner" className="choose__card__img" />
                <p className="choose__card__text">
                    DIALOGUE BETWEEN CLIENT
                    AND CRAFTSMAN
                </p>
            </div> */}
            {
                chooseArr.map((chooseItem)=>{
                    return(
                    <div key={chooseItem.id} className="choose__card">
                        <img src={chooseItem.img} alt="banner" className="choose__card__img" />
                        <p className="choose__card__text">
                            {chooseItem.text}
                        </p>
                    </div>
                    )
                })
            }
        </div>
    </div>
</section>
  )
}

export default Choose