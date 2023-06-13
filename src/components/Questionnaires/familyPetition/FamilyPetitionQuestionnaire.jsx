import React, { useEffect, useState } from "react";
import { familyQuestions } from "./familyQuestionnaire";
import FamilyResults from "./FamilyResults";
import FamilyQuestions from "./FamilyQuestions";

const FamilyPetitionQuestionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [prevQuestion, setPrevQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const storedQuestionIndex = localStorage.getItem("currentQuestionIndex");
    if (storedQuestionIndex !== null) {
      setCurrentQuestion(parseInt(storedQuestionIndex, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentQuestionIndex", currentQuestion.toString());
  }, [currentQuestion]);

  const handleAnswer = (nextQuestion, answer) => {
    setAnswers([...answers, answer]);
    setPrevQuestion(currentQuestion);
    setCurrentQuestion(nextQuestion);
  };

  const goToPrevQuestion = () => {
    if (prevQuestion !== null) {
      setAnswers(answers.slice(0, -1));
      setCurrentQuestion(prevQuestion);
      setPrevQuestion(null);
    }
  };

  const renderQuestion = () => {
    const question = familyQuestions[currentQuestion];
    return (
      <FamilyQuestions
        question={question}
        handleAnswer={handleAnswer}
        goToPrevQuestion={currentQuestion > 0 ? goToPrevQuestion : null}
      />
    );
  };

  const renderResult = () => {
    const result = result[currentQuestion - 1];
    return <FamilyResults result={result} answers={answers} />;
  };

  return (
    <div className="questionnaire">
      {currentQuestion < familyQuestions.length
        ? renderQuestion()
        : renderResult()}
    </div>
  );
};

export default FamilyPetitionQuestionnaire;
