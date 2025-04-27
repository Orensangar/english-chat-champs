
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizQuestion, { QuestionType } from "@/components/QuizQuestion";
import { getLevelQuestions } from "@/data/quizData";

const Quiz = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!level || !["junior", "intermediate", "expert"].includes(level)) {
      toast.error("Level tidak valid!");
      navigate("/level-selection");
      return;
    }

    try {
      const levelQuestions = getLevelQuestions(level);
      if (levelQuestions.length === 0) {
        toast.error("Soal tidak ditemukan untuk level ini!");
        navigate("/level-selection");
        return;
      }
      setQuestions(levelQuestions);
    } catch (error) {
      console.error("Error loading questions:", error);
      toast.error("Terjadi kesalahan saat memuat soal");
      navigate("/level-selection");
    } finally {
      setLoading(false);
    }
  }, [level, navigate]);

  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex].id]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const unansweredCount = questions.filter(
      (q) => !answers[q.id] || answers[q.id].trim() === ""
    ).length;

    if (unansweredCount > 0) {
      const confirmSubmit = window.confirm(
        `Ada ${unansweredCount} soal yang belum dijawab. Yakin ingin mengumpulkan?`
      );
      if (!confirmSubmit) return;
    }

    // Store answers in sessionStorage for results page
    sessionStorage.setItem("quiz_answers", JSON.stringify(answers));
    sessionStorage.setItem("quiz_questions", JSON.stringify(questions));
    sessionStorage.setItem("quiz_level", level || "");

    // Navigate to results page
    navigate("/results");
  };

  const progress = Math.round(
    (Object.keys(answers).length / questions.length) * 100
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-brand-blue border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-xl">Memuat soal...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 capitalize">
                Level {level}
              </h1>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">
                  Soal terjawab: {Object.keys(answers).length} dari{" "}
                  {questions.length}
                </span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {questions.length > 0 && (
              <QuizQuestion
                question={questions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                currentAnswer={answers[questions[currentQuestionIndex].id] || ""}
                number={currentQuestionIndex + 1}
                totalQuestions={questions.length}
              />
            )}

            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                Sebelumnya
              </Button>

              <div className="flex space-x-2">
                {currentQuestionIndex === questions.length - 1 ? (
                  <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                    Selesai & Lihat Hasil
                  </Button>
                ) : (
                  <Button onClick={handleNext}>Selanjutnya</Button>
                )}
              </div>
            </div>

            <Card className="mt-8 p-4 bg-white">
              <p className="font-medium">Navigasi Cepat:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm border
                      ${
                        currentQuestionIndex === index
                          ? "bg-brand-blue text-white"
                          : answers[questions[index].id]
                          ? "bg-green-100 text-green-800 border-green-300"
                          : "bg-gray-100"
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                  Selesai & Lihat Hasil
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
