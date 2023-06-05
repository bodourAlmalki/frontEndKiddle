import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Coursespage from './pages/coursesPage.jsx';
import HomePage from './pages/HomePage';
import LessonsHtml_1 from './pages/Lessons-page/LessonsHtml_1.jsx';
import LessonsHtml_2 from './pages/Lessons-page/LessonsHtml_2.jsx';
import LessonsHtml_3 from './pages/Lessons-page/LessonsHtml_3.jsx';
import LessonsHtml_4 from './pages/Lessons-page/LessonsHtml_4.jsx';
import LessonsHtml_5 from './pages/Lessons-page/LessonsHtml_5.jsx';
import QuizHtml_1 from './pages/Quiz-page/QuizHtml-1.jsx';
import QuizHtml_2 from './pages/Quiz-page/QuizHtml-2.jsx';
import QuizHtml_3 from './pages/Quiz-page/QuizHtml-3.jsx';
import QuizHtml_4 from './pages/Quiz-page/QuizHtml-4.jsx';
import QuizHtml_5 from './pages/Quiz-page/QuizHtml-5.jsx';
import LessonsScratch_1 from './pages/Lessons-page/LessonsScratch_1.jsx';
import LessonsScratch_2 from './pages/Lessons-page/LessonsScratch_2.jsx';
import LessonsScratch_3 from './pages/Lessons-page/LessonsScratch_3.jsx';
import LessonsScratch_4 from './pages/Lessons-page/LessonsScratch_4.jsx';
import LessonsScratch_5 from './pages/Lessons-page/LessonsScratch_5.jsx';
import QuizScratch_1 from './pages/Quiz-page/QuizScratch-1.jsx';
import QuizScratch_2 from './pages/Quiz-page/QuizScratch-2.jsx';
import QuizScratch_3 from './pages/Quiz-page/QuizScratch-3.jsx';
import QuizScratch_4 from './pages/Quiz-page/QuizScratch-4.jsx';
import QuizScratch_5 from './pages/Quiz-page/QuizScratch-5.jsx';
import LessonsCss_1 from './pages/Lessons-page/LessonsCss_1.jsx';
import LessonsCss_2 from './pages/Lessons-page/LessonsCss_2.jsx';
import LessonsCss_3 from './pages/Lessons-page/LessonsCss_3.jsx';
import LessonsCss_4 from './pages/Lessons-page/LessonsCss_4.jsx';
import LessonsCss_5 from './pages/Lessons-page/LessonsCss_5.jsx';
import LessonsJavaScript_1 from './pages/Lessons-page/LessonsJavaScript_1.jsx';
import LessonsJavaScript_2 from './pages/Lessons-page/LessonsJavaScript_2.jsx';
import LessonsJavaScript_3 from './pages/Lessons-page/LessonsJavaScript_3.jsx';
import LessonsJavaScript_5 from './pages/Lessons-page/LessonsJavaScript_5.jsx';
import LessonsJavaScript_4 from './pages/Lessons-page/LessonsJavaScript_4.jsx';
import QuizJs_1 from './pages/Quiz-page/QuizJs-1.jsx';
import QuizJs_2 from './pages/Quiz-page/QuizJs-2.jsx';
import QuizJs_3 from './pages/Quiz-page/QuizJs-3.jsx';
import QuizJs_4 from './pages/Quiz-page/QuizJs-4.jsx';
import QuizJs_5 from './pages/Quiz-page/QuizJs-5.jsx';
import QuizCss_1 from './pages/Quiz-page/QuizCss-1.jsx';
import QuizCss_2 from './pages/Quiz-page/QuizCss-2.jsx';
import QuizCss_3 from './pages/Quiz-page/QuizCss-3.jsx';
import QuizCss_4 from './pages/Quiz-page/QuizCss-4.jsx';
import QuizCss_5 from './pages/Quiz-page/QuizCss-5.jsx';
import Signup from './components/signup/Signup.jsx';
import Login from './components/login/Login.jsx';
import About from './components/About/About.jsx';
import AboutPage from './pages/About.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Coursespage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* lesson html */}
          <Route path="/LessonsHtml_1" element={<LessonsHtml_1 />} />
          <Route path="/LessonsHtml_2" element={<LessonsHtml_2 />} />
          <Route path="/LessonsHtml_3" element={<LessonsHtml_3 />} />
          <Route path="/LessonsHtml_4" element={<LessonsHtml_4 />} />
          <Route path="/LessonsHtml_5" element={<LessonsHtml_5 />} />
          {/* Quiz html */}
          <Route path="/QuizHtml_1" element={<QuizHtml_1 />} />
          <Route path="/QuizHtml_2" element={<QuizHtml_2 />} />
          <Route path="/QuizHtml_3" element={<QuizHtml_3 />} />
          <Route path="/QuizHtml_4" element={<QuizHtml_4 />} />
          <Route path="/QuizHtml_5" element={<QuizHtml_5 />} />
          {/* lesson scratch */}
          <Route path="/LessonsScratch_1" element={<LessonsScratch_1 />} />
          <Route path="/LessonsScratch_2" element={<LessonsScratch_2 />} />
          <Route path="/LessonsScratch_3" element={<LessonsScratch_3 />} />
          <Route path="/LessonsScratch_4" element={<LessonsScratch_4 />} />
          <Route path="/LessonsScratch_5" element={<LessonsScratch_5 />} />
          {/* quiz scratch */}
          <Route path="/QuizScratch_1" element={<QuizScratch_1 />} />
          <Route path="/QuizScratch_2" element={<QuizScratch_2 />} />
          <Route path="/QuizScratch_3" element={<QuizScratch_3 />} />
          <Route path="/QuizScratch_4" element={<QuizScratch_4 />} />
          <Route path="/QuizScratch_5" element={<QuizScratch_5 />} />

          {/* lesson css  */}
          <Route path="/LessonsCss_1" element={<LessonsCss_1 />} />
          <Route path="/LessonsCss_2" element={<LessonsCss_2 />} />
          <Route path="/LessonsCss_3" element={<LessonsCss_3 />} />
          <Route path="/LessonsCss_4" element={<LessonsCss_4 />} />
          <Route path="/LessonsCss_5" element={<LessonsCss_5 />} />
          {/* quiz css */}
          <Route path="/QuizCss_1" element={<QuizCss_1 />} />
          <Route path="/QuizCss_2" element={<QuizCss_2 />} />
          <Route path="/QuizCss_3" element={<QuizCss_3 />} />
          <Route path="/QuizCss_4" element={<QuizCss_4 />} />
          <Route path="/QuizCss_5" element={<QuizCss_5 />} />

          {/*  lesson js*/}
          <Route
            path="/LessonsJavaScript_1"
            element={<LessonsJavaScript_1 />}
          />
          <Route
            path="/LessonsJavaScript_2"
            element={<LessonsJavaScript_2 />}
          />
          <Route
            path="/LessonsJavaScript_3"
            element={<LessonsJavaScript_3 />}
          />
          <Route
            path="/LessonsJavaScript_4"
            element={<LessonsJavaScript_4 />}
          />
          <Route
            path="/LessonsJavaScript_5"
            element={<LessonsJavaScript_5 />}
          />
          {/* quiz js */}
          <Route path="/QuizJs_1" element={<QuizJs_1 />} />
          <Route path="/QuizJs_2" element={<QuizJs_2 />} />
          <Route path="/QuizJs_3" element={<QuizJs_3 />} />
          <Route path="/QuizJs_4" element={<QuizJs_4 />} />
          <Route path="/QuizJs_5" element={<QuizJs_5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
