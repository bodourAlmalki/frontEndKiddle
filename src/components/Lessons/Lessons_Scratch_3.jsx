import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_Scratch_3 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title"> 03 Creating Clones and Motion</h1>
        <h3 className="Description">Creating Clones and Motion</h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/RW9JAgGm50Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
          <Link to="/LessonsScratch_2">
              <button className="btn-moove-1"  >previous</button>
            </Link>
            <Link to="/QuizScratch_3">
              <button className="btn-moove">Next</button>
            </Link>
            <IconBacktoHome/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_Scratch_3;
