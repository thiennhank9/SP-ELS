import React from 'react';
import HeadExplain from './HeadExplain';
import ListRetrieval from './ListRetrieval';

const LIST_RETRIEVAL = [
  {
    questionType: 'What is...',
    questionRest: 'an image receptor(IR)?',
    isSelected: true
  },
  {
    questionType: 'What are the...',
    questionRest: 'four requirements for the production of x-rays?'
  },
  {
    questionType: 'What is...',
    questionRest: 'an image receptor(IR)?',
    isSelected: true
  },
  {
    questionType: 'What are the...',
    questionRest: 'four requirements for the production of x-rays?'
  },
  {
    questionType: 'What is...',
    questionRest: 'an image receptor(IR)?',
    isSelected: true
  },
  {
    questionType: 'What are the...',
    questionRest: 'four requirements for the production of x-rays?'
  },
  {
    questionType: 'What is...',
    questionRest: 'an image receptor(IR)?',
    isSelected: true
  },
  {
    questionType: 'What are the...',
    questionRest: 'four requirements for the production of x-rays?'
  },
  {
    questionType: 'What is...',
    questionRest: 'an image receptor(IR)?',
    isSelected: true
  },
  {
    questionType: 'What are the...',
    questionRest: 'four requirements for the production of x-rays?'
  },
  {
    questionType: 'What is...',
    questionRest: 'an image receptor(IR)?',
    isSelected: true
  },
  {
    questionType: 'What are the...',
    questionRest: 'four requirements for the production of x-rays?'
  },
  {
    questionType: 'What is...',
    questionRest: 'an image receptor(IR)?',
    isSelected: true
  },
  {
    questionType: 'What are the...',
    questionRest: 'four requirements for the production of x-rays?'
  },
  {
    questionType: 'What is...',
    questionRest: 'an image receptor(IR)?',
    isSelected: true
  },
  {
    questionType: 'What are the...',
    questionRest: 'four requirements for the production of x-rays?'
  }
];

export default function RetrievalPracticeSection(props) {
  const { cards } = props;

  return (
    <div>
      <HeadExplain
        title="Retrieval Practice"
        subtitle="5 mins"
        text="Retrieval Practice hekps build your retention of the material by recalling information in your own words"
      />
      <ListRetrieval listRetrieval={cards} />
    </div>
  );
}
