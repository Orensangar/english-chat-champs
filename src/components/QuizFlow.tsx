import React, { useState } from "react";
import { getLevelQuestions } from "@/data/quizData";
import { QuestionType } from "./QuizQuestion";

const QUESTION_COUNT = 10; // jumlah soal per sesi

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const levels = ["Junior", "Intermediate", "Expert"];

type Answer = string | string[];

type Result = {
  correct: number;
  total: number;
  details: { question: string; correct: boolean; userAnswer: Answer; correctAnswer: Answer }[];
};

const QuizFlow: React.FC = () => {
  const [step, setStep] = useState<"select" | "quiz" | "result">("select");
  const [level, setLevel] = useState<string>("");
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<Result | null>(null);

  // Mulai quiz: pilih level dan acak soal
  const startQuiz = (selectedLevel: string) => {
    const allQuestions = getLevelQuestions(selectedLevel);
    const randomQuestions = shuffle(allQuestions).slice(0, QUESTION_COUNT);
    setLevel(selectedLevel);
    setQuestions(randomQuestions);
    setAnswers(Array(randomQuestions.length).fill(""));
    setStep("quiz");
    setResult(null);
  };

  // Handle jawaban user
  const handleAnswer = (idx: number, value: Answer) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
  };

  // Submit quiz
  const submitQuiz = () => {
    let correct = 0;
    const details = questions.map((q, idx) => {
      let isCorrect = false;
      if (q.type === "multiple-choice" || q.type === "listening") {
        isCorrect = answers[idx] === q.correctAnswer || (Array.isArray(q.correctAnswer) && q.correctAnswer.includes(answers[idx] as string));
      } else if (q.type === "essay") {
        if (Array.isArray(q.correctAnswer)) {
          const userAns = (answers[idx] as string).toLowerCase();
          isCorrect = q.correctAnswer.some((k) => userAns.includes(k.toLowerCase()));
        } else {
          isCorrect = (answers[idx] as string).toLowerCase().includes((q.correctAnswer as string).toLowerCase());
        }
      }
      if (isCorrect) correct++;
      return {
        question: q.question,
        correct: isCorrect,
        userAnswer: answers[idx],
        correctAnswer: q.correctAnswer,
      };
    });
    setResult({ correct, total: questions.length, details });
    setStep("result");
  };

  // Ulangi quiz (acak ulang)
  const retryQuiz = () => {
    startQuiz(level);
  };

  // Pilih level
  if (step === "select") {
    return (
      <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
        <h2>Pilih Level Quiz</h2>
        {levels.map((lvl) => (
          <button key={lvl} style={{ margin: 8, padding: 12 }} onClick={() => startQuiz(lvl.toLowerCase())}>
            {lvl}
          </button>
        ))}
      </div>
    );
  }

  // Kerjakan soal
  if (step === "quiz") {
    return (
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2>Level: {level.charAt(0).toUpperCase() + level.slice(1)}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitQuiz();
          }}
        >
          {questions.map((q, idx) => (
            <div key={q.id} style={{ marginBottom: 24, padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
              <div style={{ marginBottom: 8 }}>
                <b>Soal {idx + 1}:</b> {q.question}
              </div>
              {q.type === "multiple-choice" || q.type === "listening" ? (
                <div>
                  {q.options?.map((opt) => (
                    <label key={opt} style={{ display: "block", marginBottom: 4 }}>
                      <input
                        type="radio"
                        name={`q${idx}`}
                        value={opt}
                        checked={answers[idx] === opt}
                        onChange={() => handleAnswer(idx, opt)}
                        required
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              ) : (
                <textarea
                  rows={2}
                  style={{ width: "100%" }}
                  value={answers[idx] as string}
                  onChange={(e) => handleAnswer(idx, e.target.value)}
                  required
                />
              )}
            </div>
          ))}
          <button type="submit" style={{ padding: 12, fontWeight: "bold" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }

  // Lihat hasil
  if (step === "result" && result) {
    return (
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2>Hasil Quiz</h2>
        <p>
          Skor: <b>{result.correct}</b> dari <b>{result.total}</b>
        </p>
        <div style={{ textAlign: "left", margin: "0 auto", maxWidth: 600 }}>
          {result.details.map((d, i) => (
            <div key={i} style={{ marginBottom: 12, background: d.correct ? "#e0ffe0" : "#ffe0e0", padding: 8, borderRadius: 6 }}>
              <div><b>Soal {i + 1}:</b> {d.question}</div>
              <div>Jawaban kamu: <b>{Array.isArray(d.userAnswer) ? d.userAnswer.join(", ") : d.userAnswer}</b></div>
              <div>Jawaban benar: <b>{Array.isArray(d.correctAnswer) ? d.correctAnswer.join(", ") : d.correctAnswer}</b></div>
              <div>{d.correct ? "✅ Benar" : "❌ Salah"}</div>
            </div>
          ))}
        </div>
        <button style={{ margin: 12, padding: 12 }} onClick={retryQuiz}>
          Ulangi Quiz (Soal Acak Lagi)
        </button>
        <button style={{ margin: 12, padding: 12 }} onClick={() => setStep("select")}>Pilih Level Lain</button>
      </div>
    );
  }

  return null;
};

export default QuizFlow; 