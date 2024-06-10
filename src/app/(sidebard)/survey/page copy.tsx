'use client';
import { PageTitleAndDescription } from '@/shared/components/PageTitleAndDescription';
import { DesignForm } from './DesignForm';
import { ComingSoon } from '@/shared/components/ComingSoon/ComingSoon';
import { redirect, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/shared/utils/cn';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import nextArrow from 'public/nextArrow.svg';
import prevArrow from 'public/previousArrow.svg';
import cloudImage from 'public/cloudImage.png';

interface SurveyAnswer {
  questionIndex: number;
  answer: number | undefined; // Индекс выбранного ответа, undefined - не ответил
  answerText?: string;
}

interface SurveyState {
  currentQuestionIndex: number;
  answers: SurveyAnswer[];
}
export const serializeStateToBase64 = (state: SurveyState): string => {
  const json = JSON.stringify(state);
  return btoa(encodeURIComponent(json)); // кодирование в base64 после кодирования URI компонентов
};

export const deserializeStateFromBase64 = (base64: string): SurveyState => {
  const json = decodeURIComponent(atob(base64)); // декодирование из base64, затем декодирование URI компонентов
  return JSON.parse(json);
};
const initialState: SurveyState = {
  currentQuestionIndex: 0,
  answers: [],
};

interface QuestionProps {
  questionData: {
    question: string;
    answers: string[];
  };
  currentAnswerIndex: number | undefined;
  questionIndex: number;
}

interface QuestionProps2 {
  state: SurveyState;
  questionData: {
    question: string;
    answers: string[];
  };
}
const QuestionComponent: React.FC<QuestionProps2> = ({ state, questionData }) => {
  const currentQuestionIndex = state.currentQuestionIndex;
  const currentAnswer = state.answers[currentQuestionIndex]?.answer;
  const handleAnswer = (index: number, answer: string) => {
    const newState: SurveyState = {
      currentQuestionIndex: currentQuestionIndex + 1,
      answers: [
        ...state.answers.slice(0, currentQuestionIndex),
        { questionIndex: currentQuestionIndex, answer: index, answerText: answer },
        ...state.answers.slice(currentQuestionIndex + 1),
      ],
    };
    console.log('newState', newState); // Проверка состояния перед сериализацией
    return serializeStateToBase64(newState);
  };
  return (
    <div className=" flex w-full flex-col justify-center 	">
      <div className="flex flex-col items-center justify-center pb-20">
        <h1 className="text-center font-zt text-6xl">{questionData.question}</h1>
      </div>
      <ul className="relative grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-1">
        {/* <ul className="grid w-full grid-cols-[minmax(240px,auto)_1fr]  gap-4"> */}
        {/* <ul className="grid w-full grid-cols-[minmax(1fr_1fr)] gap-4"> */}
        {questionData.answers.map((answer, index) => (
          <li
            className="bg-background font-libre text-3xl font-normal"
            key={index}
          >
            <Link
              className={cn(
                'flex min-w-full items-center justify-center rounded-full border-2 border-black p-5 leading-9',
                index === currentAnswer ? 'bg-primary  text-secondary' : 'text-black',
              )}
              href={`?state=${handleAnswer(index, answer)}`}
            >
              {index + 1}. {answer}
            </Link>
          </li>
        ))}
        <Image
          src={cloudImage}
          alt="cloud"
          className="absolute bottom-[-65%] left-[33%] "
        />
      </ul>
    </div>
  );
};
const questions = [
  { question: 'Which drink best describes your current mood?', answers: ['Tequila', 'Vodka', 'Rum', 'Whiskey'] },
  { question: 'What animal do you like to watch?', answers: ['Cat', 'Dog', 'Bird', 'Fish'] },
  { question: 'What is your favorite color?', answers: ['Red', 'Green', 'Blue', 'Yellow'] },
];
// export default function SurveyPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
// const currentState = searchParams.state;
export default function SurveyPage() {
  const searchParams = useSearchParams();
  const currentState = searchParams.get('state');
  console.log('currentState', currentState);
  if (!currentState) {
    // setSearchParams();
    redirect(`/survey?state=${serializeStateToBase64(initialState)}`);
  }
  const state = deserializeStateFromBase64(currentState);
  const currentQuestionIndex = state.currentQuestionIndex;
  const currentAnswer = state.answers[currentQuestionIndex]?.answer;
  console.log('current question Index', currentQuestionIndex);
  console.log('currentAnswer', currentAnswer);
  if (currentQuestionIndex === questions.length) {
    return <div>End of survey</div>;
  }

  const goToPreviousQuestion = (index: number) => {
    if (index < 0) {
      return serializeStateToBase64(state);
    }
    console.log('goToQuestion', state);
    const newState = {
      ...state,
      currentQuestionIndex: index,
    };
    console.log('newState', newState);
    return serializeStateToBase64(newState);
  };
  const goToNextQuestion = (index: number) => {
    if (currentQuestionIndex >= state.answers.length) {
      return serializeStateToBase64(state);
    }
    const newState = {
      ...state,
      currentQuestionIndex: index,
    };
    console.log('newState', newState);
    return serializeStateToBase64(newState);
  };

  console.log('currentQuestionIndex', currentQuestionIndex, state.answers.length);

  return (
    <div className="flex h-full min-h-[calc(100vh_-_var(--header-height)_-_20px)] w-full flex-col  items-center justify-between border-2 border-red-500 pt-[230px]">
      {/* <Link href={'/survey'}>Заново</Link> */}
      <QuestionComponent
        state={state}
        questionData={questions[currentQuestionIndex]}
        // key={index}
      />
      <div className="flex items-center justify-center gap-6 ">
        <Link
          href={`?state=${goToPreviousQuestion(currentQuestionIndex - 1)}`}
          className={cn(currentQuestionIndex === 0 ? 'text-muted-foreground' : 'text-green-500')}
        >
          <Image
            alt="<="
            src={prevArrow}
          />
        </Link>
        <div className="flex items-center justify-center gap-6">
          <p className="min-w-[30px] text-center font-libre text-3xl font-normal">
            {currentQuestionIndex + 1}/{questions.length}
          </p>
        </div>
        <Link
          href={`?state=${goToNextQuestion(currentQuestionIndex + 1)}`}
          className={cn(
            currentQuestionIndex === questions.length - 1 || currentQuestionIndex >= state.answers.length ? 'text-muted-foreground' : 'text-green-500',
          )}
        >
          <Image
            alt="=>"
            src={nextArrow}
          />
        </Link>
      </div>
    </div>
  );
}
