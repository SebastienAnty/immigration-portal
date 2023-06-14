import React from "react";

const Result = ({ result, answers }) => {
  const previousAnswers = answers.length > 0 && (
    <div>
      <h2 className="result">Your answers:</h2>
      <ul className="previous-answers">
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      {previousAnswers}
      <h2 className="final-result">Your final result:</h2>
      <div className="result-list">
        <li>{result}</li>
      </div>
    </div>
  );
};

export default Result;
