import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_Scratch_1 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">
          {' '}
          01 Welcome to Scratch Creating an Account and Getting Started
        </h1>
        <h3 className="Description">
          Welcome to Scratch Creating an Account and Getting Started
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/Rxoppbm-y8k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
            <Link to="/QuizScratch_1">
              <button className="btn-moove-s">Next</button>
            </Link>
            <IconBacktoHome />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_Scratch_1;
