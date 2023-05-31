import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_Html_4 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">HTML Tags - underline, bold, italics</h1>
        <h3 className="Description">
          HTML Tags - underline, bold, italics. 3 tags about HTML. There is more
          than 3 tags.
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/nHa9rsP90Hk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
            <Link to="/LessonsHtml_3">
              <button className="btn-moove-1">previous</button>
            </Link>
            <Link to="/QuizHtml_4">
              <button className="btn-moove">Next</button>
            </Link>
            <IconBacktoHome/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_Html_4;
