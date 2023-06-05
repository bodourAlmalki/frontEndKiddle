import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_JavaScript_1 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">
          JavaScript Tutorial for KIDS!
          <br/>  Simple Commands
        </h1>
        <h3 className="Description">
          An easy JavaScript for kids, or just beginning developers to learn
          JavaScript in a breeze.
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/NfoWYGclboA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
            <Link to="/QuizJs_1" >
              <button className="btn-moove-s" >Next</button>
            </Link>
            <IconBacktoHome/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_JavaScript_1;
