'use client';
import { redirect, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';
import Link from 'next/link';
import { cn } from '@/shared/utils/cn';
import Image from 'next/image';
import nextArrow from 'public/nextArrow.svg';
import prevArrow from 'public/previousArrow.svg';
import cloud2 from 'public/cloud2.svg';
import YellowStar from 'public/YellowStar20.svg';
import Transition from '@/shared/components/Transition';
import { AnimatePresence } from 'framer-motion';
interface SurveyAnswer {
  questionIndex: number;
  answer: { value: string; text: string } | undefined;
}

interface SurveyState {
  currentQuestionIndex: number;
  answers: SurveyAnswer[];
}

export const serializeStateToBase64 = (state: SurveyState): string => {
  const json = JSON.stringify(state);
  return btoa(encodeURIComponent(json));
};

export const deserializeStateFromBase64 = (base64: string): SurveyState => {
  const json = decodeURIComponent(atob(base64));
  return JSON.parse(json);
};

const initialState: SurveyState = {
  currentQuestionIndex: 0,
  answers: [],
};

interface QuestionProps {
  state: SurveyState;
  questionData: {
    question: string;
    answers: Array<{ value: string; text: string }>;
  };
}

interface Answer {
  value: string;
  text: string;
}

function determineResult(answers: Answer[]): string {
  // Объект для подсчета количества каждого типа ответов
  const counts: { [key: string]: number } = { K: 0, A: 0, D: 0, P: 0, H: 0 };

  // Подсчет количества каждого типа ответов
  answers.forEach(answer => {
    if (counts.hasOwnProperty(answer.value)) {
      counts[answer.value]++;
    }
  });

  // Находим максимальное количество
  const maxCount = Math.max(...Object.values(counts));

  // Находим все типы с максимальным количеством
  const maxTypes = Object.keys(counts).filter(key => counts[key] === maxCount);

  // Если есть только один тип с максимальным количеством, возвращаем соответствующий результат
  if (maxTypes.length === 1) {
    switch (maxTypes[0]) {
      case 'K':
        return 'king';
      case 'A':
        return 'angel';
      case 'D':
        return 'demon';
      case 'P':
        return 'alien';
      case 'H':
        return 'artist';
    }
  }

  // Если нет уникального максимума или все типы встречаются одинаковое количество раз, возвращаем 'sushi'
  return 'sushi';
}

function getResultUrl(answers: Answer[]): string {
  const result = determineResult(answers);
  return `/result/${result}`;
}

// Функция для перенаправления пользователя на страницу результата
function redirectToResult(answers: Answer[]): void {
  const url = getResultUrl(answers);
  // Предполагается, что у вас есть доступ к функции redirect
  redirect(url);
}

const QuestionComponent: React.FC<QuestionProps> = ({ state, questionData }) => {
  const currentQuestionIndex = state.currentQuestionIndex;
  const currentAnswer = state.answers[currentQuestionIndex]?.answer;

  const handleAnswer = (answer: { value: string; text: string }) => {
    window && window.blur();
    const newState: SurveyState = {
      currentQuestionIndex: currentQuestionIndex + 1,
      answers: [
        ...state.answers.slice(0, currentQuestionIndex),
        { questionIndex: currentQuestionIndex, answer },
        ...state.answers.slice(currentQuestionIndex + 1),
      ],
    };
    console.log('newState', newState);
    posthog.capture('answer event', { property: answer });
    return serializeStateToBase64(newState);
  };

  return (
    <Transition className="flex w-full flex-col items-stretch justify-stretch">
      {/* <div className="flex w-full flex-col items-stretch justify-stretch"> */}
      <div className="flex flex-col items-center justify-stretch gap-5 pb-5 text-center md:pb-7 xl:gap-[30px] xl:pb-[30px] 2xl:gap-[40px] 2xl:pb-14">
        <h2 className="font-libre text-[22px] leading-[120%] md:text-[26px] 2xl:text-[35px] 2xl:tracking-[-0.7px]">Question {currentQuestionIndex + 1}</h2>
        <h1 className="font-zt text-[30px] leading-[90%] tracking-[-2.4px] md:text-[34px] md:leading-[120%] md:tracking-[-2px] xl:text-[37px] 2xl:text-[50px]">
          {questionData.question}
        </h1>
      </div>

      <ul className="relative z-[6] grid w-full gap-y-2.5 md:grid-cols-2 md:gap-x-5 md:gap-y-5 xl:gap-x-5 xl:gap-y-5 2xl:gap-y-8">
        {questionData.answers.map((answer, index) => (
          <li
            className="relative z-[6] w-full bg-transparent text-center font-libre text-[22px] font-normal leading-[120%] tracking-[-0.7px] md:w-full md:text-[26px] 2xl:text-3xl"
            key={answer.value}
          >
            <Link
              className={cn(
                ' flex min-w-full items-center justify-center rounded-full border-2 border-primary p-[15px] transition-all hover:bg-[#FF2F85] 2xl:p-5',
                answer.value === currentAnswer?.value ? 'bg-[#FF2F85]' : 'text-primary',
              )}
              href={`?state=${handleAnswer(answer)}`}
            >
              {answer.text}
            </Link>
            {/* {index === 1 && (
              <Image
                src={YellowStar}
                alt="cloud2"
                // className="absolute left-[15vw] top-[67vh] hidden w-[29vw] max-w-[320px] xl:block 2xl:hidden"
                className="absolute top-[0px] right-[-2px] z-[7] md:hidden w-[19px]"
              />
            )} */}
            {index === 2 && (
              <Image
                src={cloud2}
                alt="cloud2"
                // className="absolute left-[15vw] top-[67vh] hidden w-[29vw] max-w-[320px] xl:block 2xl:hidden"
                className="absolute bottom-[-100px] right-[-20px] z-[7] hidden w-[15vw] max-w-[225px] xl:block 2xl:bottom-[-130px] 2xl:max-w-[297px]"
              />
            )}
          </li>
        ))}
      </ul>
      {/* </div> */}
    </Transition>
  );
};

const questions = [
  {
    question: 'Who do you love the most?',
    answers: [
      { value: 'K', text: 'Myself, of course!' },
      { value: 'A', text: 'I love everyone!' },
      { value: 'D', text: 'I hate everyone.' },
      { value: 'P', text: "Cats! They're so cute and smart!" },
    ],
  },
  {
    question: 'What would you do if your slippers started talking to you?',
    answers: [
      { value: 'P', text: "Ask them which planet they're from!" },
      { value: 'H', text: 'Convince them to perform a duet with me!' },
      { value: 'K', text: 'Order them to massage my feet!' },
      { value: 'D', text: 'Go on a crime spree with them!' },
    ],
  },
  {
    question: 'If you could choose any profession, what would you be?',
    answers: [
      { value: 'H', text: 'A unicorn trainer!' },
      { value: 'D', text: 'A professional villain!' },
      { value: 'A', text: 'A nanny for baby pandas!' },
      { value: 'K', text: 'A king ruling the world!' },
    ],
  },
  {
    question: 'What new holiday would you invent?',
    answers: [
      { value: 'A', text: 'Hugs and Compliments Day!' },
      { value: 'K', text: 'A day of worship for me.' },
      { value: 'P', text: 'Space Exploration Day.' },
      { value: 'H', text: 'A day when everyone speaks in rhymes!' },
    ],
  },
  {
    question: 'Do you like this test?',
    answers: [
      { value: 'D', text: "I don't know, I just like pressing buttons!" },
      { value: 'P', text: "Yes, but I'd prefer a test on galaxy knowledge!" },
      { value: 'A', text: "Yes, it's the best thing that's ever happened to me!" },
      { value: 'H', text: "Yes, it's a real creative adventure!" },
    ],
  },
];

export default function SurveyPage() {
  const searchParams = useSearchParams();
  const currentState = searchParams.get('state');
  // console.log('currentState', currentState);
  if (!currentState) {
    redirect(`/survey?state=${serializeStateToBase64(initialState)}`);
  }
  const state = deserializeStateFromBase64(currentState);
  const currentQuestionIndex = state.currentQuestionIndex;
  // const currentAnswer = state.answers[currentQuestionIndex]?.answer;
  // console.log('current question Index', currentQuestionIndex);
  // console.log('currentAnswer', currentAnswer);
  if (currentQuestionIndex === questions.length) {
    const userAnswers = state.answers.map(a => a.answer).filter((a): a is Answer => a !== undefined);
    redirectToResult(userAnswers);
    return null; // Возвращаем null, так как будет выполнен редирект
  }

  const goToPreviousQuestion = (index: number) => {
    if (index < 0) {
      return serializeStateToBase64(state);
    }
    // console.log('goToQuestion', state);
    const newState = {
      ...state,
      currentQuestionIndex: index,
    };
    // console.log('newState', newState);
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
    // console.log('newState', newState);
    return serializeStateToBase64(newState);
  };

  console.log('currentQuestionIndex', currentQuestionIndex, state.answers.length);

  return (
    // <div className="flex h-full w-full grow flex-col items-center justify-around md:h-[calc(100vh_-_var(--header-height)_-_30px_-_19vh)] md:justify-start xl:h-[calc(100vh_-_var(--header-height)_-_30px_-_19vh)] xl:items-stretch">
    <div className="z-[6] flex   w-full   grow flex-col items-center justify-around pt-[100px] md:h-[calc(100vh_-_var(--header-height)_-_30px)] md:justify-start xl:h-[calc(100vh_-_var(--header-height)_-_30px)] xl:items-stretch">
      <div className="flex w-full flex-col items-center justify-center gap-5  md:h-full md:justify-between md:gap-0 md:pb-[5.5vh] md:pt-[19vh] xl:pb-[4.8vh] xl:pt-[19vh] 2xl:pb-[4vh]">
        <AnimatePresence mode="wait">
          <QuestionComponent
            key={currentQuestionIndex}
            state={state}
            questionData={questions[currentQuestionIndex]}
          />
        </AnimatePresence>
        {/* <QuestionComponent
            state={state}
            questionData={questions[currentQuestionIndex]}
          /> */}
        <div className="z-20 flex w-full items-center justify-center gap-2.5 xl:gap-5">
          <Link href={`?state=${goToPreviousQuestion(currentQuestionIndex - 1)}`}>
            <Image
              alt="<="
              src={prevArrow}
              className={cn(
                'w-[56px] rounded-full bg-background transition-all md:w-[61px] 2xl:w-[82px]',
                currentQuestionIndex === 0 ? 'text-muted-foreground' : 'betterhover:hover:bg-[#FFA41C]',
              )}
            />
          </Link>
          <div className="flex items-center justify-center gap-6">
            <p className="xl:win-w-[35px] min-w-[28px] text-center font-libre text-[22px] font-normal leading-[120%] xl:text-[26px] 2xl:min-w-[40px] 2xl:text-3xl">
              {currentQuestionIndex + 1}/{questions.length}
            </p>
          </div>
          <Link
            className="rounded-full"
            href={`?state=${goToNextQuestion(currentQuestionIndex + 1)}`}
          >
            <Image
              alt="=>"
              src={nextArrow}
              className={cn(
                'w-[56px] rounded-full bg-background md:w-[61px] 2xl:w-[82px]',
                currentQuestionIndex === questions.length - 1 || currentQuestionIndex >= state.answers.length
                  ? 'text-muted-foreground'
                  : 'betterhover:hover:bg-[#FFA41C]',
              )}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
