import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_Scratch_5 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title"> 05 Pong Intro and the Game Mechanics</h1>
        <h3 className="Description">Pong Intro and the Game Mechanics</h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/rKf77zLfS0o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
          <Link to="/LessonsScratch_4">
              <button className="btn-moove-1"  >previous</button>
            </Link>
            <Link to="/QuizScratch_5">
              <button className="btn-moove">Next</button>
            </Link>
            <IconBacktoHome/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_Scratch_5;
