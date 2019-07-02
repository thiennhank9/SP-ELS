/* eslint-disable react/prop-types */
import React from 'react';
import HeaderRetrieval from './HeaderRetrieval';
import BlockSeperate from './BlockSeperate';
import CardExplain from './CardExplain';
import ListCard from './ListCard';
import RetrievalPracticeSection from './RetrievalPracticeSection';
import ReviewQuestionsSection from './ReviewQuestionsSection';
import StepFooter from './StepFooter';

function RetrievalPracticeView(props) {
  const {
    chapter,
    chapterSection: { id = 0, cards = [], reviewQuestions = [] }
  } = props;

  return (
    <div>
      <HeaderRetrieval chapter={chapter} sectionNumber={id} />
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
