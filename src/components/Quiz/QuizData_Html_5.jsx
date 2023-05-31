export const QuizData_Html_5 = {
  questions: [
    {
      question: 'Which HTML tag is used to make text hyperlink?',
      choices: ['<u>', '<b>', '<a>', '<br>'],

      type: 'MCQs',
      correctAnswer: '<a>',
    },
    {
      question: 'Which HTML element is used to define the image in a webpage',
      choices: ['<image>', '<imeg>', '<img>', '<br>'],
      type: 'MCQs',
      correctAnswer: '<img>',
    },
    {
      question: 'Which attribute is used to be  after <a>?',
      choices: ['href', 'src', '<i>', 'rcs'],
      type: 'MCQs',
      correctAnswer: 'href',
    },
    {
      question: 'Which attribute is used to be  after <img>?',
      choices: ['href', 'src', '<i>', 'rcs'],
      type: 'MCQs',
      correctAnswer: 'src',
    },
  ],
};

export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
