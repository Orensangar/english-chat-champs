
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QuestionType } from "@/components/QuizQuestion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Results = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [level, setLevel] = useState("");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve data from sessionStorage
    const storedAnswers = sessionStorage.getItem("quiz_answers");
    const storedQuestions = sessionStorage.getItem("quiz_questions");
    const storedLevel = sessionStorage.getItem("quiz_level");

    if (!storedAnswers || !storedQuestions || !storedLevel) {
      navigate("/level-selection");
      return;
    }

    const parsedAnswers = JSON.parse(storedAnswers);
    const parsedQuestions = JSON.parse(storedQuestions);
    
    setAnswers(parsedAnswers);
    setQuestions(parsedQuestions);
    setLevel(storedLevel);

    // Calculate score
    const totalScore = calculateScore(parsedQuestions, parsedAnswers);
    setScore(totalScore);
    
    setLoading(false);
  }, [navigate]);

  const calculateScore = (questions: QuestionType[], answers: Record<number, string>) => {
    let correct = 0;

    questions.forEach((question) => {
      const userAnswer = answers[question.id] || "";
      
      if (question.type === "multiple-choice" || question.type === "listening") {
        if (Array.isArray(question.correctAnswer)) {
          if (question.correctAnswer.includes(userAnswer)) {
            correct++;
          }
        } else {
          if (userAnswer === question.correctAnswer) {
            correct++;
          }
        }
      } else if (question.type === "essay") {
        // For essay, we'll consider partial credit by checking if key terms are present
        if (Array.isArray(question.correctAnswer)) {
          const keyTerms = question.correctAnswer;
          const userAnswerLower = userAnswer.toLowerCase();
          
          // Give points if the user mentioned at least 1/3 of the key terms
          const minTerms = Math.max(1, Math.floor(keyTerms.length / 3));
          const matchedTerms = keyTerms.filter(term => 
            userAnswerLower.includes(term.toLowerCase())
          );
          
          if (matchedTerms.length >= minTerms) {
            correct++;
          }
        } else {
          const userAnswerLower = userAnswer.toLowerCase();
          const correctAnswerLower = question.correctAnswer.toLowerCase();
          
          // Simple string comparison for now - could be enhanced with NLP techniques
          if (userAnswerLower.includes(correctAnswerLower) || 
              correctAnswerLower.includes(userAnswerLower)) {
            correct++;
          }
        }
      }
    });

    // Convert to percentage and round to nearest integer
    return Math.round((correct / questions.length) * 100);
  };

  // Group questions by type
  const multipleChoiceQuestions = questions.filter(q => q.type === "multiple-choice");
  const essayQuestions = questions.filter(q => q.type === "essay");
  const listeningQuestions = questions.filter(q => q.type === "listening");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-brand-blue border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-xl">Menghitung hasil...</p>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getResultMessage = (score: number) => {
    if (score >= 80) {
      return "Selamat! Kamu berhasil menguasai level ini dengan sangat baik.";
    } else if (score >= 60) {
      return "Bagus! Kamu sudah cukup menguasai level ini, tapi masih ada ruang untuk perbaikan.";
    } else {
      return "Jangan menyerah! Coba pelajari materinya lagi dan ulangi quiz untuk meningkatkan pemahamanmu.";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
                Hasil Quiz Level {level.charAt(0).toUpperCase() + level.slice(1)}
              </h1>
              
              <div className="flex flex-col items-center mb-8">
                <div className="w-36 h-36 rounded-full border-8 border-blue-100 flex items-center justify-center my-4">
                  <span className={`text-4xl font-bold ${getScoreColor(score)}`}>{score}%</span>
                </div>
                <p className="text-lg text-center max-w-md">
                  {getResultMessage(score)}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-md text-center">
                  <p className="text-gray-600">Jumlah Soal</p>
                  <p className="text-2xl font-bold">{questions.length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-md text-center">
                  <p className="text-gray-600">Jawaban Benar</p>
                  <p className="text-2xl font-bold text-green-600">
                    {Math.round((score / 100) * questions.length)}
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-md text-center">
                  <p className="text-gray-600">Jawaban Salah</p>
                  <p className="text-2xl font-bold text-red-600">
                    {questions.length - Math.round((score / 100) * questions.length)}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center gap-4 flex-wrap">
                <Link to={`/quiz/${level}`}>
                  <Button variant="outline">Ulangi Quiz</Button>
                </Link>
                <Link to="/level-selection">
                  <Button>Coba Level Lain</Button>
                </Link>
              </div>
            </Card>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Detail Jawaban</h2>
              
              <Tabs defaultValue="multiple-choice">
                <TabsList className="mb-6">
                  <TabsTrigger value="multiple-choice">
                    Pilihan Ganda ({multipleChoiceQuestions.length})
                  </TabsTrigger>
                  <TabsTrigger value="essay">
                    Essay ({essayQuestions.length})
                  </TabsTrigger>
                  <TabsTrigger value="listening">
                    Listening ({listeningQuestions.length})
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="multiple-choice">
                  <div className="space-y-6">
                    {multipleChoiceQuestions.map((question, index) => (
                      <Card key={question.id} className="p-4">
                        <div className="mb-2">
                          <span className="text-sm text-gray-500">Soal {index + 1}</span>
                        </div>
                        <p className="font-medium mb-3">{question.question}</p>
                        
                        <div className="space-y-2 mb-4">
                          {question.options?.map((option, optionIndex) => {
                            const isUserAnswer = answers[question.id] === option;
                            const isCorrectAnswer = Array.isArray(question.correctAnswer) 
                              ? question.correctAnswer.includes(option) 
                              : question.correctAnswer === option;
                            
                            let bgColor = "bg-white";
                            if (isUserAnswer && isCorrectAnswer) bgColor = "bg-green-100";
                            else if (isUserAnswer) bgColor = "bg-red-100";
                            else if (isCorrectAnswer) bgColor = "bg-green-50";
                            
                            return (
                              <div
                                key={optionIndex}
                                className={`p-3 rounded-md border ${bgColor}`}
                              >
                                <div className="flex items-center">
                                  <span className="mr-2">{String.fromCharCode(65 + optionIndex)}.</span>
                                  <span>{option}</span>
                                  {isUserAnswer && isCorrectAnswer && (
                                    <span className="ml-auto text-green-600">✓ Jawaban Anda (Benar)</span>
                                  )}
                                  {isUserAnswer && !isCorrectAnswer && (
                                    <span className="ml-auto text-red-600">✗ Jawaban Anda (Salah)</span>
                                  )}
                                  {!isUserAnswer && isCorrectAnswer && (
                                    <span className="ml-auto text-green-600">✓ Jawaban Benar</span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="essay">
                  <div className="space-y-6">
                    {essayQuestions.map((question, index) => (
                      <Card key={question.id} className="p-4">
                        <div className="mb-2">
                          <span className="text-sm text-gray-500">Soal {index + 1}</span>
                        </div>
                        <p className="font-medium mb-3">{question.question}</p>
                        
                        <div className="mb-4">
                          <p className="text-sm font-medium mb-1">Jawaban Anda:</p>
                          <div className="p-3 rounded-md bg-gray-50 min-h-[60px]">
                            {answers[question.id] || <span className="text-gray-400 italic">Tidak dijawab</span>}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-1">Contoh Jawaban Benar:</p>
                          <div className="p-3 rounded-md bg-green-50 text-green-800">
                            {question.exampleAnswer || (
                              Array.isArray(question.correctAnswer) 
                                ? question.correctAnswer.join(", ") 
                                : question.correctAnswer
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="listening">
                  <div className="space-y-6">
                    {listeningQuestions.map((question, index) => (
                      <Card key={question.id} className="p-4">
                        <div className="mb-2">
                          <span className="text-sm text-gray-500">Soal {index + 1}</span>
                        </div>
                        <p className="font-medium mb-3">{question.question}</p>
                        
                        {question.videoId && (
                          <div className="aspect-video mb-4">
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${question.videoId}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        )}
                        
                        {question.options ? (
                          <div className="space-y-2 mb-4">
                            {question.options.map((option, optionIndex) => {
                              const isUserAnswer = answers[question.id] === option;
                              const isCorrectAnswer = Array.isArray(question.correctAnswer) 
                                ? question.correctAnswer.includes(option) 
                                : question.correctAnswer === option;
                              
                              let bgColor = "bg-white";
                              if (isUserAnswer && isCorrectAnswer) bgColor = "bg-green-100";
                              else if (isUserAnswer) bgColor = "bg-red-100";
                              else if (isCorrectAnswer) bgColor = "bg-green-50";
                              
                              return (
                                <div
                                  key={optionIndex}
                                  className={`p-3 rounded-md border ${bgColor}`}
                                >
                                  <div className="flex items-center">
                                    <span className="mr-2">{String.fromCharCode(65 + optionIndex)}.</span>
                                    <span>{option}</span>
                                    {isUserAnswer && isCorrectAnswer && (
                                      <span className="ml-auto text-green-600">✓ Jawaban Anda (Benar)</span>
                                    )}
                                    {isUserAnswer && !isCorrectAnswer && (
                                      <span className="ml-auto text-red-600">✗ Jawaban Anda (Salah)</span>
                                    )}
                                    {!isUserAnswer && isCorrectAnswer && (
                                      <span className="ml-auto text-green-600">✓ Jawaban Benar</span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div>
                            <div className="mb-4">
                              <p className="text-sm font-medium mb-1">Jawaban Anda:</p>
                              <div className="p-3 rounded-md bg-gray-50 min-h-[60px]">
                                {answers[question.id] || <span className="text-gray-400 italic">Tidak dijawab</span>}
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-sm font-medium mb-1">Contoh Jawaban Benar:</p>
                              <div className="p-3 rounded-md bg-green-50 text-green-800">
                                {question.exampleAnswer || (
                                  Array.isArray(question.correctAnswer) 
                                    ? question.correctAnswer.join(", ") 
                                    : question.correctAnswer
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
