import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_CSS_1 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title"> 01 - Introduction to CSS</h1>
        <h3 className="Description">
          In this video we go over the basic structure of CSS. This series will
          cover all the latest concepts including CSS3.
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/qKoajPPWpmo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
            <Link to="/QuizCss_2">
              <button className="btn-moove-s">Next</button>
            </Link>
            <IconBacktoHome />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_CSS_1;
