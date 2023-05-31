import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_Html_1 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">Introduction to HTML</h1>
        <h3 className="Description">How to create your first website/page.</h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/31adOLTlS00"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
            <Link to="/QuizHtml_1">
              <button className="btn-moove" style={{ marginLeft: '23rem' }}>
                Next
              </button>
            </Link>
            <IconBacktoHome />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_Html_1;
