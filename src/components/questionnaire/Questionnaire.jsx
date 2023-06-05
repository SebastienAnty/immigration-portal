import React, { useState } from "react";
import "./questionnaire.css";

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      text: "Do you prefer indoor or outdoor activities?",
      options: [
        { text: "Indoor", nextQuestion: 1 },
        { text: "Outdoor", nextQuestion: 2 },
      ],
    },
    {
      text: "Which indoor activity do you enjoy the most?",
      options: [
        { text: "Reading", nextQuestion: 3 },
        { text: "Playing video games", nextQuestion: 4 },
      ],
    },
    {
      text: "Which outdoor activity do you prefer?",
      options: [
        { text: "Hiking", nextQuestion: 5 },
        { text: "Cycling", nextQuestion: 6 },
      ],
    },
    {
      text: "What genre of books do you like?",
      options: [
        { text: "Fiction", nextQuestion: 7 },
        { text: "Non-fiction", nextQuestion: 8 },
      ],
    },
    {
      text: "What type of video games do you enjoy?",
      options: [
        { text: "Action", nextQuestion: 9 },
        { text: "Strategy", nextQuestion: 10 },
      ],
    },
    { text: "You enjoy hiking!", result: "Hiking" },
    { text: "You enjoy cycling!", result: "Cycling" },
    { text: "You enjoy reading fiction books!", result: "Reading Fiction" },
    {
      text: "You enjoy reading non-fiction books!",
      result: "Reading Non-Fiction",
    },
    { text: "You enjoy playing action video games!", result: "Action Games" },
    {
      text: "You enjoy playing strategy video games!",
      result: "Strategy Games",
    },
  ];

  const handleAnswer = (nextQuestion, answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(nextQuestion);
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    return (
      <div>
        <h2 className="question">{question.text}</h2>
        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="option"
              onClick={() => handleAnswer(option.nextQuestion, option.text)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const result = questions[currentQuestion].result;
    return <h2 className="result">Your result: {result}</h2>;
  };

  return (
    <div className="questionnaire">
      <h1 className="heading">Decision Tree Questionnaire</h1>
      {currentQuestion < questions.length ? renderQuestion() : renderResult()}
    </div>
  );
};

export default Questionnaire;
