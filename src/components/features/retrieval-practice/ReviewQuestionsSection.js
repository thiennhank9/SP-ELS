import React from 'react';
import HeadExplain from './HeadExplain';
import ListQuestion from './ListQuestion';

export default function ReviewQuestionsSection(props) {
  const {reviewQuestions} = props;

  return (
    <div>
      <HeadExplain
        title="Retrieval Questions"
        subtitle="1 questions"
        text="Review questions will quiz you on the key information from the chapter."
      />
      <ListQuestion questions={reviewQuestions} />
    </div>
  );
}
