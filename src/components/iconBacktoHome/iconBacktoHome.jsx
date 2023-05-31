import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './iconBacktoHome.css';

export default function IconBacktoHome() {
  return (
    <div className="icon-back-container">
      <Link to="/" className="link">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          size="2x"
          className="icon-back"
          style={{ color: '#00aded' }}
        />{' '}
        <p className="p-icon">Back to Home</p>
      </Link>
    </div>
  );
}
