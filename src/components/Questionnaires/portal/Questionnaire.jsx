import React, { useEffect, useState } from "react";
import { questions } from "./questionnaireQuestions";
import Result from "./Results";
import Question from "./Questions";
import "./questionnaire.css";

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [prevQuestion, setPrevQuestion] = useState(null);
  const [isRestarted, setIsRestarted] = useState(false);
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

  useEffect(() => {
    if (isRestarted) {
      setCurrentQuestion(0);
      setPrevQuestion(null);
      setAnswers([]);
      setIsRestarted(false);
    }
  }, [isRestarted]);

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

  const restartQuestionnaire = () => {
    setIsRestarted(true);
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="questionnaire">
      {currentQuestionData.result !== undefined ? (
        <Result
          result={currentQuestionData.result}
          answers={answers}
          restartQuestionnaire={restartQuestionnaire}
          questions={questions}
        />
      ) : (
        <Question
          question={currentQuestionData}
          handleAnswer={handleAnswer}
          goToPrevQuestion={currentQuestion > 0 ? goToPrevQuestion : undefined}
        />
      )}
    </div>
  );
};

export default Questionnaire;
