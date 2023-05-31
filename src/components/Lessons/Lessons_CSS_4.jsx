import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_CSS_4 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">
          {' '}
          04 - Add a line to header and border property
        </h1>
        <h3 className="Description">
          In this video we go over how to add line to header element.
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/hCoMjvtsyPA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="buttons">
            <Link to="/LessonsCss_3">
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

export default Lessons_CSS_4;
