import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_CSS_2 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">02 - Changing font type, color, and size</h1>
        <h3 className="Description">
          In this video we go over changing the font type, size, and color.
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="httpshttps://www.youtube.com/watch?v=UO0ZPL8yMpU://www.youtube.com/embed/UO0ZPL8yMpU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
            <Link to="/LessonsCss_2">
              <button className="btn-moove-1">previous</button>
            </Link>
            <Link to="/QuizCss_2">
              <button className="btn-moove">Next</button>
            </Link>
            <IconBacktoHome/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_CSS_2;
