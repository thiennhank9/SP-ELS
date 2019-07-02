import React from 'react';
import HeadExplain from './HeadExplain';
import ListQuestion from './ListQuestion';

const QUESTIONS = [
  {
    questionPrompt:
      '<p> <p>Diabetes mellitus is a disorder of carbohydrate metabolism. What are the long-term consequences of diabetes mellitus?</p> </p>',
    questionChoices: {
      CHOICE_000:
        'A. The shift in insulin:glucagon balance leads to unopposed lipolysis and fatty acid oxidation in the liver ',
      CHOICE_001: 'B. Plasma lipoproteins are raised due to excessive dietary fat ',
      CHOICE_002: 'C. Macrovascular disease gives rise to peripheral neuropathy ',
      CHOICE_003: 'D. Microvascular disease can cause peripheral vascular disease ',
      CHOICE_004: 'E. Macrovascular disease gives rise to diabetic retinopathy '
    }
  }
];

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
