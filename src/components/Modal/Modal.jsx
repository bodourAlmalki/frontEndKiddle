import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import './Modal.css';

Modal.setAppElement('#root');

const EnrollModal = ({lesson}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleEnrollHtml = () => {
    if(lesson === 'html'){
      navigate('/LessonsHtml_1');
    } else if(lesson === 'js'){
      navigate('/LessonsJavaScript_1');
    }else if(lesson === 'css'){
      navigate('/LessonsCss_1');
    }else if(lesson === 'scratch'){
      navigate('/LessonsScratch_1');
    }
    console.log('Enrolling in the course...');
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal} className="btn-yellow">
        Enroll
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal-overlay"
      >
        <div className="modal-content-1">
          <h2>Confirmation</h2>
          <p>Are you sure you want to enroll in this course?</p>
          <div>
            <button onClick={handleEnrollHtml}>Yes, enroll</button>

            <button onClick={closeModal}>No</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EnrollModal;
