import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';


const About = () => {
  return (
    <Container>
      <div className="about-container">
        <main>
          <section className="about_sec">
            <h2 className="about_h1">About Us</h2>
            <p className="about_sologon">
              Welcome to Kids Coding Website, where learning programming is fun!
            </p>
            <p className="about_p">
              We offer interactive courses and resources to help kids learn
              HTML, Scratch, CSS, and JavaScript.
            </p>
            <p className="about_p">
              Our mission is to make coding education accessible and engaging
              for children of all ages.
            </p>
          </section>

          <section className="about_sec">
            <h2 className="about_h2">Watch Our Introduction Video</h2>
            <div className="Wrapper-iframe">
              <div className="container-iframe">
                <iframe
                  src="https://www.youtube.com/embed/j-3eArinB7E"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>

          <section className="about_sec">
            <h2 className="about_h2">Test Your Knowledge with Quizzes</h2>
            <p className="about_p">
              We believe in active learning, and that's why we provide
              interactive quizzes to reinforce what you've learned.
            </p>
            <p className="about_p">
              <ul>
                <li>After enrolling in a course that interests you.</li>
                <li>you will begin by watching a tutorial.</li>
                <li>
                  After each tutorial, you will have the opportunity to take a
                  quiz related to the material you just learned.
                </li>
                <li>
                  These quizzes are designed to test your knowledge and provide
                  a fun and educational experience.
                </li>
              </ul>
            </p>
            <p className="about_p">
              Join our courses and put your skills to the test!
            </p>
          </section>
        </main>
      </div>
    </Container>
  );
};

export default About;
