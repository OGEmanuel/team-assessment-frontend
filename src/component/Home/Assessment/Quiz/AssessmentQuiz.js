// import { json, useLoaderData } from 'react-router-dom';

import QuizContent from './QuizContent';
import Timer from './Timer';

const AssessmentQuiz = () => {
  // const quiz = useLoaderData();

  return (
    <>
      <Timer />
      <QuizContent />
    </>
  );
};

export default AssessmentQuiz;

// const loadAssessmentQuiz = async () => {
//   const response = await fetch('http://localhost:4000/questions');

//   if (!response.ok) {
//     throw json({ message: 'Coould not fetch questions.' }, { status: 500 });
//   } else {
//     const resData = await response.json();
//     return resData;
//   }
// };
