import React from "react";
import { useNavigate } from "react-router-dom";

const FamilyResults = ({
  result,
  answers,
  restartQuestionnaire,
  familyQuestions,
}) => {
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

  const navigation = useNavigate();

  const redirect = familyQuestions.find(
    (question) => question.result === result
  )?.redirect;

  console.log(redirect);

  const redirectToUrl = () => {
    navigation(redirect);
  };

  return (
    <>
      <div>
        {previousAnswers}
        <h2 className="final-result">Your final result:</h2>
        <div>
          <ul>
            {result.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="start-over-container">
          <button className="start-over-button" onClick={restartQuestionnaire}>
            Start Over
          </button>
        </div>
        {redirect && (
          <button className="start-over-button" onClick={redirectToUrl}>
            Redirect
          </button>
        )}
      </div>
    </>
  );
};

export default FamilyResults;
