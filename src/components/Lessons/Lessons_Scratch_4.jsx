import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';
import IconBacktoHome from '../iconBacktoHome/iconBacktoHome';

const Lessons_Scratch_4 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title"> 04 How to Get the Best out of This Course</h1>
        <h3 className="Description">
          Programming for Kids and Beginners: Learn to Code in Scratch 3.0
          Scratch Basics Full Course
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/1PP5pg0h-f8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
          <Link to="/LessonsScratch_3">
              <button className="btn-moove-1"  >previous</button>
            </Link>
            <Link to="/QuizScratch_4">
              <button className="btn-moove">Next</button>
            </Link>
            <IconBacktoHome/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_Scratch_4;
