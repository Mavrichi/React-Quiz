import React, { useState, useEffect, useContext } from "react";
import Questionaire from "./Questionaire";
//import GameForm from './GameForm';
import { GameContext } from "./GameContext";

const GameLogic = () => {
  const [url, setUrl] = useContext(GameContext);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  console.log("string gol", url);

  // const API_URL ='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';

  useEffect(() => {
    // if ({numberOfQuestions} > 0 ){
    fetch(url.url)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
    //}
  }, []);
  //}

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      //prevent double answers
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setShowAnswers(true);

    // const newIndex = currentIndex + 1;
    // setCurrentIndex(currentIndex +1);
    // if(newIndex >= questions.length)
    // {
    // setGameEnded(true);
    // }
  };
  // currentIndex >= questions.length ? (
  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl text-white font-bold">
          Game ended, your score was: {score}
        </h1>
      ) : (
        <Questionaire
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Loading...</h2>
  );
};
export default GameLogic;
