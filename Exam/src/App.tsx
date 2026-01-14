import { useState } from "react";

import "./App.css";

function App() {
  const [step, setStep] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
  {
    text: "Кой следва в редицата: 2, 4, 8, 16, ?",
    answers: ["18", "32", "24"],
    correctAnswer: 1,
  },
  {
    text: "Ако всички котки са животни и всички животни дишат, кое твърдение е вярно?",
    answers: [
      "Всички котки дишат",
      "Някои животни не дишат",
      "Котките не са животни",
    ],
    correctAnswer: 0,
  },
  {
    text: "Намерете липсващата фигура в редицата: ○, △, ○, △, ?",
    answers: ["○", "△", "□"],
    correctAnswer: 0,
  },
  {
    text: "Кое число е следващото в редицата: 1, 1, 2, 3, 5, ?",
    answers: ["8", "7", "6"],
    correctAnswer: 0,
  },
];


  const startQuiz = () => {
    setStep("question");
    setCurrentQuestionIndex(0);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep("end");
    }
  };

  const restartQuiz = () => {
    setStep("start");
    setCurrentQuestionIndex(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {step === "start" && (
        <div>
          <h1>Добре дошли в логическия тест!</h1>
          <button
            onClick={startQuiz}
            style={{
              fontSize: "16px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Започни теста
          </button>
        </div>
      )}

      {step === "question" && (
        <div>
          <h2>Въпрос {currentQuestionIndex + 1}:</h2>
          <p>{questions[currentQuestionIndex].text}</p>
          <div>
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <button
                key={index}
                onClick={nextQuestion}
                style={{
                  fontSize: "16px",
                  padding: "10px 20px",
                  margin: "5px",
                  cursor: "pointer",
                }}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "end" && (
        <div>
          <h1>Тестът е завършен!</h1>
          <button
            onClick={restartQuiz}
            style={{
              fontSize: "16px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Започни отначало
          </button>
        </div>
      )}
    </div>
  );
}

export default App;