import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export type QuestionType = {
  id: number;
  type: "multiple-choice" | "essay" | "listening";
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  exampleAnswer?: string;
};

interface QuizQuestionProps {
  question: QuestionType;
  onAnswer: (answer: string) => void;
  currentAnswer: string;
  number: number;
  totalQuestions: number;
}

const QuizQuestion = ({
  question,
  onAnswer,
  currentAnswer,
  number,
  totalQuestions,
}: QuizQuestionProps) => {
  const [localAnswer, setLocalAnswer] = useState<string>(currentAnswer || "");

  useEffect(() => {
    setLocalAnswer(currentAnswer || "");
  }, [question.id, currentAnswer]);

  const handleMultipleChoiceChange = (value: string) => {
    setLocalAnswer(value);
    onAnswer(value);
  };

  const handleEssayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalAnswer(e.target.value);
    onAnswer(e.target.value);
  };

  const renderQuestionContent = () => {
    switch (question.type) {
      case "multiple-choice":
        return (
          <RadioGroup
            value={localAnswer}
            onValueChange={handleMultipleChoiceChange}
            className="space-y-3 mt-4"
          >
            {question.options?.map((option, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50"
              >
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      case "essay":
        return (
          <div className="mt-4">
            <Textarea
              placeholder="Ketik jawaban Anda berdasarkan teks soal..."
              value={localAnswer}
              onChange={handleEssayChange}
              className="min-h-[120px]"
            />
          </div>
        );
      case "listening":
        return (
          <div className="mt-4">
            {question.options ? (
              <RadioGroup
                value={localAnswer}
                onValueChange={handleMultipleChoiceChange}
                className="space-y-3 mt-4"
              >
                {question.options?.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50"
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <Textarea
                placeholder="Ketik jawaban Anda berdasarkan teks soal..."
                value={localAnswer}
                onChange={handleEssayChange}
                className="min-h-[120px]"
              />
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-brand-blue text-white text-sm font-medium px-3 py-1 rounded-full">
          {question.type === "multiple-choice"
            ? "Pilihan Ganda"
            : question.type === "essay"
            ? "Essay"
            : "Listening"}
        </span>
        <span className="text-gray-500">
          Soal {number} dari {totalQuestions}
        </span>
      </div>

      <h3 className="text-lg font-medium mb-4">{question.question}</h3>

      {renderQuestionContent()}
    </div>
  );
};

export default QuizQuestion;
