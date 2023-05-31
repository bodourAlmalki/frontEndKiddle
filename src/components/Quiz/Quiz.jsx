import { useState } from 'react';
import { resultInitalState } from './QuizData_Html_1.jsx';
import { Link, useNavigate } from 'react-router-dom';

import './Quiz.scss';
import AnswerTimer from '../AnswerTimer/AnswerTimer.jsx';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);
  const navigate = useNavigate();
  const path = window.location.pathname;
  const lessonPath = path.substring(0, path.indexOf('_'));
  const lessonNumber = path.split('_')[1];
  console.log(lessonPath, 'dsdds');
  const { question, choices, correctAnswer } = questions[currentQuestion];
  const onAnwswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const onContinue = () => {
    if (lessonPath === '/QuizHtml') {
      navigate(`/LessonsHtml_${parseInt(lessonNumber) + 1}`);
    } else if (lessonPath === '/QuizJs') {
      navigate(`/LessonsJavaScript_${parseInt(lessonNumber) + 1}`);
    } else if (lessonPath === '/QuizCss') {
      navigate(`/LessonsCss_${parseInt(lessonNumber) + 1}`);
    } else if (lessonPath === '/QuizScratch') {
      navigate(`/LessonsScratch_${parseInt(lessonNumber) + 1}`);
    }

    console.log('Continue to next Lesson...');
  };
  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null);
    setShowAnswerTimer(false);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  };

  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
  };

  const handleTimeUp = () => {
    setAnswer(false);
    onClickNext(false);
  };

  return (
    <div className="body-quiz">
      <div className="quiz-container-1">
        {!showResult ? (
          <>
            {showAnswerTimer && (
              <AnswerTimer duration={10} onTimeUp={handleTimeUp} />
            )}
            <span className="active-question-no">{currentQuestion + 1}</span>
            <span className="total-question">/{questions.length}</span>
            <h2 className="h2">{question}</h2>
            <ul className="ul">
              {choices.map((choice, index) => (
                <li
                  onClick={() => onAnwswerClick(choice, index)}
                  key={choice}
                  className={answerIdx === index ? 'selected-answer' : null}
                >
                  {choice}
                </li>
              ))}
            </ul>
            <div className="footer">
              <button
                onClick={() => onClickNext(answer)}
                disabled={answerIdx === null}
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <div className="result">
            <h3 className="h3">Result</h3>
            <p className="p">
              Total Questions: <span>{questions.length}</span>
            </p>
            <p className="p">
              Total Score: <span>{result.score}</span>
            </p>
            <p className="p">
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p className="p">
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={onTryAgain}>Try again</button>{' '}
            <button onClick={onContinue}>Continue</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
