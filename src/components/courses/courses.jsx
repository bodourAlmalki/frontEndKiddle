import React from 'react';
import { Container } from 'react-bootstrap';
import EnrollModal from '../Modal/Modal';
import Owl from '../owl/Owl';
import './courses.css';

export default function Courses() {
  const userId = sessionStorage.getItem('_id');
  return (
    <>
      {!userId ? (
        <div className='bigdiv'>
          <h1 className="notloggedin">
            {' '}
            Hi Genuious programmer... <br/> Please sign up <br />
            in case you didn't sign up <br />
            or log in in case you already have signed up
            <br /> to access the courses{' '}
          </h1>
        </div>
      ) : (
        <>
          <section className="hedr">
            <div className="txt_header">
              <article className="span">
                <span>
                  Welcome to our amazing Kids' Courses page! <br />
                  Are you ready to become a coding superstar?
                  <br /> Get ready to dive into the wonderful world of
                  programming with our fun and interactive courses on Scratch,
                  HTML, CSS, and JavaScript.
                </span>
              </article>
              <div className="owl">
                <Owl />
              </div>
            </div>
          </section>
          <Container>
            <div className="wrapper">
              <section className="one-1">
                <div class=" card-border">
                  <div class="card-bg">
                    <div class="container-logo">
                      <div class="logo"></div>
                      <div class="logo-inside">
                        <div class="first"></div>
                        <div class="second"></div>
                      </div>
                    </div>
                    <div id="blur-area"></div>
                    <div class="marquee">
                      <div class="marquee__inner" aria-hidden="true">
                        <span class="viper">
                          {' '}
                          SCRATCH SCRATCH SCRATCH SCRATCH{' '}
                        </span>
                        <span class="viper">
                          {' '}
                          SCRATCH SCRATCH SCRATCH SCRATCH{' '}
                        </span>
                        <span class="viper">
                          {' '}
                          SCRATCH SCRATCH SCRATCH SCRATCH{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="mist-container">
                    <div class="mist"></div>
                  </div>
                  <strong id="text-scratch">SCRATCH </strong>
                </div>

                <div className="html-txt">
                  <p>
                    {' '}
                    In our Scratch course, you'll learn how to create your very
                    own games, stories, and animations using colorful blocks.
                    Get creative and bring your ideas to life with this
                    beginner-friendly programming language.
                  </p>
                  <br />
                  <br />
                  <EnrollModal lesson="scratch" />
                </div>
              </section>

              <section className="two-2">
                <div className="html-txt">
                  Next up, we have HTML, the language that powers the web! In
                  our HTML course, you'll discover how to build your own web
                  pages. Learn the basics of structuring content, adding
                  headings, paragraphs, images, and more. Get ready to become a
                  web wizard!
                  <br />
                  <br />
                  <EnrollModal lesson="html" />
                </div>
                <div class="card-border">
                  <div class="card-bg">
                    <div class="container-logo">
                      <div class="logo"></div>
                      <div class="logo-inside">
                        <div class="first"></div>
                        <div class="second"></div>
                      </div>
                    </div>
                    <div id="blur-area"></div>
                    <div class="marquee">
                      <div class="marquee__inner" aria-hidden="true">
                        <span class="viper"> HTML HTML HTML HTML</span>
                        <span class="viper"> HTML HTML HTML HTML</span>
                        <span class="viper"> HTML HTML HTML HTML</span>
                      </div>
                    </div>
                  </div>
                  <div class="mist-container">
                    <div class="mist"></div>
                  </div>
                  <strong id="text-Html">HTML</strong>
                </div>
              </section>

              <div className="row-two">
                <section className="three-3">
                  <div class="card-border">
                    <div class="card-bg">
                      <div class="container-logo">
                        <div class="logo"></div>
                        <div class="logo-inside">
                          <div class="first"></div>
                          <div class="second"></div>
                        </div>
                      </div>
                      <div id="blur-area"></div>
                      <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                          <span class="viper"> CSS CSS CSS CSS</span>
                          <span class="viper"> CSS CSS CSS CSS</span>
                          <span class="viper"> CSS CSS CSS CSS</span>
                        </div>
                      </div>
                    </div>
                    <div class="mist-container">
                      <div class="mist"></div>
                    </div>
                    <strong id="text-css">CSS</strong>
                  </div>
                  <div className="html-txt">
                    Once you've mastered HTML, it's time to level up with CSS.
                    In our CSS course, you'll learn how to make your web pages
                    look stylish and eye-catching. Discover how to change
                    colors, fonts, layouts, and add cool effects to impress your
                    friends and family.
                    <br />
                    <br />
                    <EnrollModal lesson="css" />
                  </div>
                </section>

                <section className="four-4">
                  <div className="html-txt">
                    Last but not least, we have JavaScript, the language that
                    adds interactivity to websites. In our JavaScript course,
                    you'll learn how to create dynamic web elements, add
                    animations, build games, and make your websites come alive.
                    <br />
                    <br />
                    <EnrollModal lesson="js" />
                  </div>
                  <div class="card-border">
                    <div class="card-bg">
                      <div class="container-logo">
                        <div class="logo"></div>
                        <div class="logo-inside">
                          <div class="first"></div>
                          <div class="second"></div>
                        </div>
                      </div>
                      <div id="blur-area"></div>
                      <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                          <span class="viper"> JS JS JS JS </span>
                          <span class="viper"> JS JS JS JS </span>
                          <span class="viper"> JS JS JS JS </span>
                        </div>
                      </div>
                    </div>
                    <div class="mist-container">
                      <div class="mist"></div>
                    </div>
                    <strong id="text-js">
                      {' '}
                      JAVA <br />
                      SCRIPT
                    </strong>
                  </div>
                </section>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
}
