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
      const newPrevQuestion = prevQuestion - 1 >= 0 ? prevQuestion - 1 : null;
      setAnswers(answers.slice(0, -1));
      setCurrentQuestion(prevQuestion);
      setPrevQuestion(newPrevQuestion);
    }
  };

  const currentQuestionData = familyQuestions[currentQuestion];

  const renderQuestion = () => {
    return (
      <FamilyQuestions
        question={currentQuestionData}
        handleAnswer={handleAnswer}
        goToPrevQuestion={currentQuestion > 0 ? goToPrevQuestion : null}
      />
    );
  };

  const renderResult = () => {
    if (currentQuestionData && currentQuestionData.result !== undefined) {
      return (
        <FamilyResults result={currentQuestionData.result} answers={answers} />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="questionnaire">
      {currentQuestionData.result !== undefined ? (
        <FamilyResults result={currentQuestionData.result} answers={answers} />
      ) : (
        <FamilyQuestions
          question={currentQuestionData}
          handleAnswer={handleAnswer}
          goToPrevQuestion={currentQuestion > 0 ? goToPrevQuestion : undefined}
        />
      )}
    </div>
  );
};

export default FamilyPetitionQuestionnaire;
