import React from "react";

const Question = ({ question, handleAnswer, goToPrevQuestion }) => {
  return (
    <div>
      <div className="questionnaire-container">
        <h2 className="question">{question.text}</h2>
      </div>
      <div className="options">
        {question.options &&
          question.options.map((option, index) => (
            <button
              key={index}
              className="option"
              onClick={() => handleAnswer(option.nextQuestion, option.text)}
            >
              {option.text}
            </button>
          ))}
      </div>
      {goToPrevQuestion && (
        <button className="back-button" onClick={goToPrevQuestion}>
          Back
        </button>
      )}
    </div>
  );
};

export default Question;
