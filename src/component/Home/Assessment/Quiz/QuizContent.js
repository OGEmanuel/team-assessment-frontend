import { useState } from 'react';

import nextId from 'react-id-generator';

import Pagination from './Pagination';
import Questions from './Questions';

const QUESTIONS = [
  {
    id: nextId(),
    number: 1,
    question:
      'Lorem ipsum dolor sit amet consectetur. Amet urna nulla faucibus id a aliquam eget accumsan. Diam urna porttitor ullamcorper a.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 2,
    question:
      'Lorem ipsum dolor sit amet consectetur. Mi aliquam quam nulla arcu integer eu. Aliquet lectus varius neque dignissim enim.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 3,
    question:
      'Lorem ipsum dolor sit amet consectetur. Tincidunt tellus placerat nunc mauris ut leo. Scelerisque vitae amet vitae sit porta.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 4,
    question:
      'Lorem ipsum dolor sit amet consectetur. Mi aliquam quam nulla arcu integer eu. Aliquet lectus varius neque dignissim enim.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 5,
    question:
      'Lorem ipsum dolor sit amet consectetur. Amet urna nulla faucibus id a aliquam eget accumsan. Diam urna porttitor ullamcorper a.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 6,
    question:
      'Lorem ipsum dolor sit amet consectetur. Tincidunt tellus placerat nunc mauris ut leo. Scelerisque vitae amet vitae sit porta.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 7,
    question:
      'Lorem ipsum dolor sit amet consectetur. Tincidunt tellus placerat nunc mauris ut leo. Scelerisque vitae amet vitae sit porta.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 8,
    question:
      'Lorem ipsum dolor sit amet consectetur. Amet urna nulla faucibus id a aliquam eget accumsan. Diam urna porttitor ullamcorper a.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 9,
    question:
      'Lorem ipsum dolor sit amet consectetur. Mi aliquam quam nulla arcu integer eu. Aliquet lectus varius neque dignissim enim.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 10,
    question:
      'Lorem ipsum dolor sit amet consectetur. Amet urna nulla faucibus id a aliquam eget accumsan. Diam urna porttitor ullamcorper a.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 11,
    question:
      'Lorem ipsum dolor sit amet consectetur. Mi aliquam quam nulla arcu integer eu. Aliquet lectus varius neque dignissim enim.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 12,
    question:
      'Lorem ipsum dolor sit amet consectetur. Tincidunt tellus placerat nunc mauris ut leo. Scelerisque vitae amet vitae sit porta.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 13,
    question:
      'Lorem ipsum dolor sit amet consectetur. Mi aliquam quam nulla arcu integer eu. Aliquet lectus varius neque dignissim enim.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 14,
    question:
      'Lorem ipsum dolor sit amet consectetur. Amet urna nulla faucibus id a aliquam eget accumsan. Diam urna porttitor ullamcorper a.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 15,
    question:
      'Lorem ipsum dolor sit amet consectetur. Tincidunt tellus placerat nunc mauris ut leo. Scelerisque vitae amet vitae sit porta.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 16,
    question:
      'Lorem ipsum dolor sit amet consectetur. Tincidunt tellus placerat nunc mauris ut leo. Scelerisque vitae amet vitae sit porta.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 17,
    question:
      'Lorem ipsum dolor sit amet consectetur. Amet urna nulla faucibus id a aliquam eget accumsan. Diam urna porttitor ullamcorper a.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
  {
    id: nextId(),
    number: 18,
    question:
      'Lorem ipsum dolor sit amet consectetur. Mi aliquam quam nulla arcu integer eu. Aliquet lectus varius neque dignissim enim.',
    options: [
      {
        id: nextId(),
        a: 'Option A',
        b: 'Option B',
        c: 'Option C',
        d: 'Option D',
      },
    ],
  },
];

const questionsPerPage = 3;

const QuizContent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const numOfTotalPages = Math.ceil(QUESTIONS.length / questionsPerPage);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;

  const visibleQuestions = QUESTIONS.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  return (
    <>
      <Pagination
        numOfPages={numOfTotalPages}
        questions={QUESTIONS}
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
