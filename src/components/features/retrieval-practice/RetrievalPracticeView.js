/* eslint-disable react/prop-types */
import React from 'react';
import HeaderRetrieval from './HeaderRetrieval';
import BlockSeperate from './BlockSeperate';
import CardExplain from './CardExplain';
import ListCard from './ListCard';
import RetrievalPracticeSection from './RetrievalPracticeSection';
import ReviewQuestionsSection from './ReviewQuestionsSection';
import StepFooter from './StepFooter';

const CARDS = [
  {
    index: 1,
    question: {
      full: 'What is an image receptor (IR)',
      type: 'What is...',
      rest: 'an image receptor (IR)'
    },
    answer: 'A device called an image receptor (IR) intercepts the e-ray photons that are able to exit the patient.1',
    bookPage: 62,
    willBeOnTest: false
  },
  {
    index: 2,
    question: {
      full: 'What is an image receptor (IR) 2',
      type: 'What is...',
      rest: 'an image receptor (IR) 2'
    },
    answer: 'A device called an image receptor (IR) intercepts the e-ray photons that are able to exit the patient.2',
    bookPage: 62,
    willBeOnTest: true
  }
];

function RetrievalPracticeView(props) {
  const {
    chapter,
    chapterSection: { cards = [], reviewQuestions = [] }
  } = props;

  return (
    <div>
      <HeaderRetrieval chapter={chapter} />
      <div className="retrieval-body">
        <BlockSeperate bgColor="#8b9bc8" />
        <CardExplain />
        <ListCard cards={cards} />
        <BlockSeperate bgColor="#75B9AE" />
        <RetrievalPracticeSection cards={cards} />
        <BlockSeperate bgColor="#B9AF60" />
        <ReviewQuestionsSection reviewQuestions={reviewQuestions} />
        <StepFooter nextSection="Image Receptor System" />
      </div>
    </div>
  );
}

export default RetrievalPracticeView;
