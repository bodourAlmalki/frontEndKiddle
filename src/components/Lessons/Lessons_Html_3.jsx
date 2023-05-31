import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_Html_3 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">HTML Tags - h1, h2, h3, h4, p, br</h1>
        <h3 className="Description">
          This video is about 6 more HTML tags - Heading 1, Heading 2, Heading
          3, Heading 4, Paragraph, and Break
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/uRlw6LQBPfA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
          <Link to="/LessonsHtml_2">

              <button className="btn-moove-1">previous</button>
         </Link>
            <Link to="/QuizHtml_3">
              <button className="btn-moove">Next</button>
            </Link>
            <IconBacktoHome/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_Html_3;
