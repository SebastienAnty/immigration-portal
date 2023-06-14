import React from "react";

const FamilyResults = ({ result, answers }) => {
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
      {result.map((item, index) => (
        <div key={index} className="result-list">
          <li>{item}</li>
        </div>
      ))}
    </div>
  );
};

export default FamilyResults;
