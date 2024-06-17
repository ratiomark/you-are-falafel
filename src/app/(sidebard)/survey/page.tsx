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
import cloud from 'public/cloud.svg';
import cloud2 from 'public/cloud2.svg';
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
const handleBlur = event => {
  event.currentTarget.blur();
};
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
    window && window.blur();
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
    <div className=" flex w-full flex-col items-stretch justify-stretch ">
      <div className="flex flex-col items-center justify-stretch gap-7 pb-5 text-center md:pb-7 xl:gap-[30px] xl:pb-[30px] 2xl:gap-[40px] 2xl:pb-14">
        {/* <div className=" flex w-full flex-col justify-center 	 md:items-stretch md:justify-stretch ">
      <div className="flex flex-col items-center justify-center gap-7 pb-5 text-center md:justify-stretch md:pb-7 xl:gap-[30px] xl:pb-[30px] 2xl:gap-[40px] 2xl:pb-14"> */}
        <h2 className="font-libre text-[22px] leading-[120%] md:text-[26px] 2xl:text-[35px] 2xl:tracking-[-0.7px]">Question {currentQuestionIndex + 1}</h2>
        <h1 className="font-zt text-[30px] tracking-[-2.4px] md:text-[34px] md:leading-[120%] md:tracking-[-2px] xl:text-[37px] 2xl:text-[50px]">
          {questionData.question}
        </h1>
        {/* <h1 className="text-center font-zt text-6xl">{questionData.question}</h1> */}
      </div>

      <ul className="relative grid w-full gap-y-2.5  md:grid-cols-2  md:gap-x-5 md:gap-y-5 xl:gap-x-5 xl:gap-y-5 2xl:gap-y-8">
        {questionData.answers.map((answer, index) => (
          <li
            className="relative  w-full bg-background font-libre text-[22px] font-normal leading-[120%] tracking-[-0.7px] md:w-full md:text-[26px] 2xl:text-3xl"
            key={answer}
          >
            <Link
              className={cn(
                'flex min-w-full items-center justify-center rounded-full border-2 border-primary p-[15px] transition-all hover:bg-[#FF2F85] 2xl:p-5',

                index === currentAnswer ? 'bg-[#FF2F85]' : 'text-primary',
              )}
              key={answer}
              href={`?state=${handleAnswer(index, answer)}`}
            >
              {index + 1}. {answer}
            </Link>
            {/* {index === 2 && (
              <Image
                src={cloudImage}
                alt="cloud"
                // className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full transform"
                className="absolute bottom-[-200%] right-[-60px] w-[15vw] "
              />
            )} */}
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
      <>
        {/* <Image
          src={falafelResult}
          alt="falafelResult"
          className="w-[70%] "
          // className='absolute bottom-[-65%] left-[33%] w-[15vw]'
        /> */}
        <div className="flex flex-col  items-center justify-center p-20">
          <Image
            src={falafelResult}
            alt="falafelResult"
            // width={700}
            className="h-[70vh] w-auto"
            // className='absolute bottom-[-65%] left-[33%] w-[15vw]'
          />
        </div>
      </>
    );
  }

  const goToPreviousQuestion = (index: number) => {
    window && window.blur();
    const activeElement = document.activeElement;
    activeElement && activeElement.blur();
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
    window && window.blur();
    const activeElement = document.activeElement;
    activeElement && activeElement.blur();
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
    <div className="flex h-full w-full grow flex-col  items-center justify-around md:h-[calc(100vh_-_var(--header-height)_-_30px_-_19vh)] md:justify-start  xl:h-[calc(100vh_-_var(--header-height)_-_30px_-_19vh)] xl:items-stretch ">
      {/* <div className="flex h-full w-full grow flex-col  items-center justify-between  pb-[90px] pt-[12vh]"> */}
      {/* <Link href={'/survey'}>Заново</Link> */}
      <div className="flex w-full flex-col items-center justify-center gap-5 md:h-full  md:justify-between md:gap-0 md:pb-[5.5vh] md:pt-[19vh] xl:pb-[4.8vh] xl:pt-[19vh] 2xl:pb-[4vh]">
        <QuestionComponent
          state={state}
          questionData={questions[currentQuestionIndex]}
          // key={index}
        />
        {/* 0.19 */}
        {/* 0.054 */}
        <div className="z-20 flex  w-full items-center justify-center gap-2.5 xl:gap-5 ">
          <Link
            href={`?state=${goToPreviousQuestion(currentQuestionIndex - 1)}`}
            onMouseDown={handleBlur}
            onTouchStart={handleBlur}
            onClick={handleBlur}

            // className={cn(currentQuestionIndex === 0 ? 'text-muted-foreground' : 'bg-[#FFA41C]')}
          >
            <Image
              alt="<="
              src={prevArrow}
              className={cn(
                'w-[56px] rounded-full bg-background transition-all md:w-[61px] 2xl:w-[82px]',
                currentQuestionIndex === 0 ? 'text-muted-foreground' : 'betterhover:hover:bg-[#FFA41C]',
              )}
              onMouseDown={handleBlur}
              onTouchStart={handleBlur}
              onClick={handleBlur}
            />
          </Link>
          <div className="flex items-center justify-center gap-6">
            <p className="xl:win-w-[35px] min-w-[28px] text-center font-libre text-[22px] font-normal leading-[120%] xl:text-[26px] 2xl:min-w-[40px] 2xl:text-3xl">
              {currentQuestionIndex + 1}/{questions.length}
            </p>
          </div>
          <Link
            href={`?state=${goToNextQuestion(currentQuestionIndex + 1)}`}
            onMouseDown={handleBlur}
            onTouchStart={handleBlur}
            onClick={handleBlur}
            // className={cn(
            //   currentQuestionIndex === questions.length - 1 || currentQuestionIndex >= state.answers.length ? 'text-muted-foreground' : 'bg-[#FFA41C]',
            // )}
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
              onMouseDown={handleBlur}
              onTouchStart={handleBlur}
              onClick={handleBlur}
              // className="w-[56px] rounded-full bg-background md:w-[61px] 2xl:w-[82px]"
            />
          </Link>
        </div>
      </div>
      {/* <Image
        src={cloud}
        alt="cloud"
        className="absolute left-[73vw] top-0 w-[33vw] md:hidden"
      />
      <Image
        src={cloud}
        alt="cloud"
        className="absolute left-[65vw] top-[44vh] hidden w-[24vw] md:block"
      />
      <Image
        src={cloud2}
        alt="cloud"
        className="absolute right-[78vw] top-[1vh] w-[33vw] "
      /> */}
    </div>
  );
}
// 'use client';
// import { PageTitleAndDescription } from '@/shared/components/PageTitleAndDescription';
// import { DesignForm } from './DesignForm';
// import { ComingSoon } from '@/shared/components/ComingSoon/ComingSoon';
// import { redirect, useSearchParams } from 'next/navigation';
// import Link from 'next/link';
// import { cn } from '@/shared/utils/cn';
// import { Button } from '@/shared/ui/button';
// import Image from 'next/image';
// import nextArrow from 'public/nextArrow.svg';
// import prevArrow from 'public/previousArrow.svg';
// // import cloudImage from 'public/cloudv2.svg';
// import cloudImage from 'public/cloudImage.png';
// import falafelResult from 'public/falafelResult.webp';

// interface SurveyAnswer {
//   questionIndex: number;
//   answer: number | undefined; // Индекс выбранного ответа, undefined - не ответил
//   answerText?: string;
// }

// interface SurveyState {
//   currentQuestionIndex: number;
//   answers: SurveyAnswer[];
// }
// export const serializeStateToBase64 = (state: SurveyState): string => {
//   const json = JSON.stringify(state);
//   return btoa(encodeURIComponent(json)); // кодирование в base64 после кодирования URI компонентов
// };

// export const deserializeStateFromBase64 = (base64: string): SurveyState => {
//   const json = decodeURIComponent(atob(base64)); // декодирование из base64, затем декодирование URI компонентов
//   return JSON.parse(json);
// };
// const initialState: SurveyState = {
//   currentQuestionIndex: 0,
//   answers: [],
// };

// interface QuestionProps {
//   questionData: {
//     question: string;
//     answers: string[];
//   };
//   currentAnswerIndex: number | undefined;
//   questionIndex: number;
// }

// interface QuestionProps2 {
//   state: SurveyState;
//   questionData: {
//     question: string;
//     answers: string[];
//   };
// }

// // font-family: "ZT Chintzy";
// // font-size: 50px;
// // font-style: normal;
// // font-weight: 900;
// // line-height: 120%; /* 60px */
// // letter-spacing: -2px;
// const QuestionComponent: React.FC<QuestionProps2> = ({ state, questionData }) => {
//   const currentQuestionIndex = state.currentQuestionIndex;
//   const currentAnswer = state.answers[currentQuestionIndex]?.answer;
//   const handleAnswer = (index: number, answer: string) => {
//     const newState: SurveyState = {
//       currentQuestionIndex: currentQuestionIndex + 1,
//       answers: [
//         ...state.answers.slice(0, currentQuestionIndex),
//         { questionIndex: currentQuestionIndex, answer: index, answerText: answer },
//         ...state.answers.slice(currentQuestionIndex + 1),
//       ],
//     };
//     console.log('newState', newState); // Проверка состояния перед сериализацией
//     return serializeStateToBase64(newState);
//   };
//   return (
//     <div className=" flex w-full flex-col justify-center 	 ">
//       <div className="flex flex-col items-center justify-center gap-10 pb-20 text-center">
//         {/* <h3 className="font-zt text-[50px] leading-[120%]  tracking-[-2px]">Question №{currentQuestionIndex + 1}</h3> */}
//         <h2 className="font-libre text-[35px] leading-[120%] tracking-[-0.7px]">Question {currentQuestionIndex + 1}</h2>
//         <h1 className="font-zt text-[50px] leading-[120%]  tracking-[-2px]">{questionData.question}</h1>
//         {/* <h1 className="text-center font-zt text-6xl">{questionData.question}</h1> */}
//       </div>

//       <ul className="relative grid grid-cols-2 gap-x-5 gap-y-8 ">
//         {questionData.answers.map((answer, index) => (
//           <li
//             className="relative bg-background font-libre text-3xl font-normal tracking-[-0.7px]"
//             key={index}
//           >
//             <Link
//               className={cn(
//                 'flex min-w-full items-center justify-center rounded-full border-2 border-primary p-5',
//                 index === currentAnswer ? 'bg-[#FF2F85]' : 'text-primary',
//               )}
//               href={`?state=${handleAnswer(index, answer)}`}
//             >
//               {index + 1}. {answer}
//             </Link>
//             {index === 2 && (
//               <Image
//                 src={cloudImage}
//                 alt="cloud"
//                 // className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full transform"
//                 className="absolute bottom-[-200%] right-[-60px] w-[15vw] "
//               />
//             )}
//           </li>
//         ))}
//         {/* <Image
//           src={cloudImage}
//           alt="cloud"
//           className="absolute bottom-[-65%] left-[33%] w-[15vw]"
//         /> */}
//       </ul>
//     </div>
//   );
// };
// const questions = [
//   { question: 'Which drink best describes your current mood?', answers: ['Tequila', 'Vodka', 'Rum', 'Whiskey'] },
//   { question: 'What animal do you like to watch?', answers: ['Cat', 'Dog', 'Bird', 'Fish'] },
//   { question: 'What is your favorite color?', answers: ['Red', 'Green', 'Blue', 'Yellow'] },
// ];
// // export default function SurveyPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
// // const currentState = searchParams.state;
// export default function SurveyPage() {
//   const searchParams = useSearchParams();
//   const currentState = searchParams.get('state');
//   console.log('currentState', currentState);
//   if (!currentState) {
//     // setSearchParams();
//     redirect(`/survey?state=${serializeStateToBase64(initialState)}`);
//   }
//   const state = deserializeStateFromBase64(currentState);
//   const currentQuestionIndex = state.currentQuestionIndex;
//   const currentAnswer = state.answers[currentQuestionIndex]?.answer;
//   console.log('current question Index', currentQuestionIndex);
//   console.log('currentAnswer', currentAnswer);
//   // if (currentQuestionIndex === 0) {
//   if (currentQuestionIndex === questions.length) {
//     return (
//       <>
//         {/* <Image
//           src={falafelResult}
//           alt="falafelResult"
//           className="w-[70%] "
//           // className='absolute bottom-[-65%] left-[33%] w-[15vw]'
//         /> */}
//         <div className="flex flex-col  items-center justify-center p-20">
//           <Image
//             src={falafelResult}
//             alt="falafelResult"
//             // width={700}
//             className="h-[70vh] w-auto"
//             // className='absolute bottom-[-65%] left-[33%] w-[15vw]'
//           />
//         </div>
//       </>
//     );
//   }

//   const goToPreviousQuestion = (index: number) => {
//     if (index < 0) {
//       return serializeStateToBase64(state);
//     }
//     console.log('goToQuestion', state);
//     const newState = {
//       ...state,
//       currentQuestionIndex: index,
//     };
//     console.log('newState', newState);
//     return serializeStateToBase64(newState);
//   };
//   const goToNextQuestion = (index: number) => {
//     if (currentQuestionIndex >= state.answers.length) {
//       return serializeStateToBase64(state);
//     }
//     const newState = {
//       ...state,
//       currentQuestionIndex: index,
//     };
//     console.log('newState', newState);
//     return serializeStateToBase64(newState);
//   };

//   console.log('currentQuestionIndex', currentQuestionIndex, state.answers.length);

//   return (
//     <div className="flex h-full w-full grow flex-col  items-center justify-between  pt-[12vh]">
//       {/* <Link href={'/survey'}>Заново</Link> */}
//       <QuestionComponent
//         state={state}
//         questionData={questions[currentQuestionIndex]}
//         // key={index}
//       />
//       <div className="z-20 flex  w-full items-center justify-center gap-6 pb-[2vw] ">
//         <Link
//           href={`?state=${goToPreviousQuestion(currentQuestionIndex - 1)}`}
//           className={cn(currentQuestionIndex === 0 ? 'text-muted-foreground' : 'text-green-500')}
//         >
//           <Image
//             alt="<="
//             src={prevArrow}
//             className="rounded-full bg-background"
//           />
//         </Link>
//         <div className="flex items-center justify-center gap-6">
//           <p className="min-w-[40px] text-center font-libre text-3xl font-normal">
//             {currentQuestionIndex + 1}/{questions.length}
//           </p>
//         </div>
//         <Link
//           href={`?state=${goToNextQuestion(currentQuestionIndex + 1)}`}
//           className={cn(
//             currentQuestionIndex === questions.length - 1 || currentQuestionIndex >= state.answers.length ? 'text-muted-foreground' : 'text-green-500',
//           )}
//         >
//           <Image
//             alt="=>"
//             src={nextArrow}
//             className="rounded-full bg-background"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// }
