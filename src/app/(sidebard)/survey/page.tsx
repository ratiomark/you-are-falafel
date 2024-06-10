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
// import cloudImage from 'public/cloudv2.svg';
import cloudImage from 'public/cloudImage.png';
import falafelResult from 'public/falafelResult.webp';

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

// font-family: "ZT Chintzy";
// font-size: 50px;
// font-style: normal;
// font-weight: 900;
// line-height: 120%; /* 60px */
// letter-spacing: -2px;
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
    <div className=" flex w-full flex-col justify-center 	 ">
      <div className="flex flex-col items-center justify-center gap-10 pb-20 text-center">
        {/* <h3 className="font-zt text-[50px] leading-[120%]  tracking-[-2px]">Question №{currentQuestionIndex + 1}</h3> */}
        <h2 className="font-libre text-[35px] leading-[120%] tracking-[-0.7px]">Question {currentQuestionIndex + 1}</h2>
        <h1 className="font-zt text-[50px] leading-[120%]  tracking-[-2px]">{questionData.question}</h1>
        {/* <h1 className="text-center font-zt text-6xl">{questionData.question}</h1> */}
      </div>

      <ul className="relative grid grid-cols-2 gap-x-5 gap-y-8 ">
        {questionData.answers.map((answer, index) => (
          <li
            className="relative bg-background font-libre text-3xl font-normal tracking-[-0.7px]"
            key={index}
          >
            <Link
              className={cn(
                'flex min-w-full items-center justify-center rounded-full border-2 border-primary p-5',
                index === currentAnswer ? 'bg-[#FF2F85]' : 'text-primary',
              )}
              href={`?state=${handleAnswer(index, answer)}`}
            >
              {index + 1}. {answer}
            </Link>
            {index === 2 && (
              <Image
                src={cloudImage}
                alt="cloud"
                // className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full transform"
                className="absolute bottom-[-200%] right-[-60px] w-[15vw] "
              />
            )}
          </li>
        ))}
        {/* <Image
          src={cloudImage}
          alt="cloud"
          className="absolute bottom-[-65%] left-[33%] w-[15vw]"
        /> */}
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
  // if (currentQuestionIndex === 0) {
  if (currentQuestionIndex === questions.length) {
    return (
      <div className="flex h-full w-full items-center justify-center p-20">
        <Image
          src={falafelResult}
          alt="falafelResult"
          // className='absolute bottom-[-65%] left-[33%] w-[15vw]'
        />
      </div>
    );
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
    <div className="flex h-full w-full grow flex-col  items-center justify-between  pt-[12vh]">
      {/* <Link href={'/survey'}>Заново</Link> */}
      <QuestionComponent
        state={state}
        questionData={questions[currentQuestionIndex]}
        // key={index}
      />
      <div className="z-20 flex  w-full items-center justify-center gap-6 pb-[2vw] ">
        <Link
          href={`?state=${goToPreviousQuestion(currentQuestionIndex - 1)}`}
          className={cn(currentQuestionIndex === 0 ? 'text-muted-foreground' : 'text-green-500')}
        >
          <Image
            alt="<="
            src={prevArrow}
            className="rounded-full bg-background"
          />
        </Link>
        <div className="flex items-center justify-center gap-6">
          <p className="min-w-[40px] text-center font-libre text-3xl font-normal">
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
            className="rounded-full bg-background"
          />
        </Link>
      </div>
    </div>
  );
}
