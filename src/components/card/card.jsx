import React from 'react';
import './card.css';
export default function CardCourse() {
  const handleCardHover = (event) => {
    const card = event.currentTarget;
    const front = card.querySelector('.front');
    const back = card.querySelector('.back');
    front.classList.toggle('rotate');
    back.classList.toggle('rotate');
  };

  return (
    <div>
      <div className="wrapper">
        <div className="cols">
          <div
            className="col"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardHover}
          >
            <div className="container_card">
              <div className="front">
                <div className="inner">
                  <p>Course 1</p>
                  <span>SCRATCH</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Introduction to Scratch Coding <br />
                    (Ages 7-9)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardHover}
          >
            <div className="container_card">
              <div className="front">
                <div className="inner">
                  <p>Course 2</p>
                  <span>HTML</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Web Development with HTML
                    <br /> (Ages 10-12)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardHover}
          >
            <div className="container_card">
              <div className="front">
                <div className="inner">
                  <p>Course 3:</p>
                  <span>CSS</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Web Development with CSS <br />
                    (Above 10-12)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardHover}
          >
            <div className="container_card">
              <div className="front">
                <div className="inner">
                  <p>Course 4:</p>
                  <span>JAVA SCRIPT</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Web Development with JS JAVA SCRIPT
                    <br /> (Above 10-12)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
