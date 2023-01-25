import { useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';

import Pagination from './Pagination';
import Questions from './Questions';

const questionsPerPage = 3;

const QuizContent = () => {
  const questions = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);

  const numOfTotalPages = Math.ceil(questions.length / questionsPerPage);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;

  const visibleQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  return (
    <>
      <Pagination
        numOfPages={numOfTotalPages}
        questions={questions}
        questPerPage={questionsPerPage}
        curPage={currentPage}
        setCurPage={setCurrentPage}
      />
      <hr className="w-screen" />
      <Questions
        numOfPages={numOfTotalPages}
        questions={visibleQuestions}
        curPage={currentPage}
        setCurPage={setCurrentPage}
      />
    </>
  );
};

export default QuizContent;

export const loader = async () => {
  const response = await fetch('http://localhost:4000/questions');

  if (!response.ok) {
    throw json({ message: 'Could not fetch questions.' }, { status: 500 });
  } else {
    return response;
  }
};
