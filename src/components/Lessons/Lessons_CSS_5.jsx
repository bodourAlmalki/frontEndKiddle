import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_CSS_5 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">05 - Using Classes in CSS</h1>
        <h3 className="Description">
          In this video we go over how classes works in CSS.
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/u4dLB9NP3IA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
            <Link to="/LessonsCss_4">
              <button className="btn-moove-1">previous</button>
            </Link>
            <Link to="/QuizCss_4">
              <button className="btn-moove">Next</button>
            </Link>
            <IconBacktoHome/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_CSS_5;
