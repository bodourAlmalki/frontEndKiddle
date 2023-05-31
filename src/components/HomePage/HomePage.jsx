import React from 'react';
import './HomePage.css';
import firstImage from '../../Assets/first-image.png';
import secondImage from '../../Assets/second-image.png';

import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import CardCourse from '../card/card';
import { Link } from 'react-router-dom';
import Cube from '../Cube/Cube';

export default function HomePageComponent() {
  return (
    <Container>
      <section className="one">
        <div className="p-btn">
          <p className="txt">
            Learn Programming <br />
            in a Fun Way!
          </p>

          <Link to="/courses">
            <button className="btn-blue">Get Started</button>
          </Link>
        </div>
        <motion.div
          className="img_div"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            className="imeg-1"
            src={firstImage}
            alt="this is the first one"
          />
        </motion.div>
      </section>
      <section className="two">
        <motion.div
          className="img_div"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            className="imeg-2"
            src={secondImage}
            alt="this is the second one"
          />
        </motion.div>
        <div className="p-btn">
          <p className="txt-2">
            Discover the exciting world <br />
            of coding and unleash <br />
            your creativity.
          </p>
        </div>
      </section>

      <section className="three">
        <h2 className="txt-three">Watch and Learn</h2>
        <div className="Wrapper-iframe">
          <div className="container-iframe">
            <iframe
              src="https://www.youtube.com/embed/g1J4181W8ss"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Introductory Video"
              className="responsive-iframe"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="four">
        <h2 className="four_h2">Explore Our Courses:</h2>
        <CardCourse />
        <Link to="/courses">
          <button className="btn-blue-2">Learn More</button>
        </Link>
      </section>
      {/* <Cube /> */}
    </Container>
  );
}
