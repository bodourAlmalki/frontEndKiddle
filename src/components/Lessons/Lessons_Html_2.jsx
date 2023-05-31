import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_Html_2 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">HTML elements - head, body & title</h1>
        <h3 className="Description">
          This video is about 3 html elements (head,body and title).
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/IaOEAYiGjis"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
            <Link to="/LessonsHtml_1">
              <button className="btn-moove-1">previous</button>
            </Link>
            <Link to="/QuizHtml_2">
              <button className="btn-moove">Next</button>
            </Link>
            <IconBacktoHome/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_Html_2;
