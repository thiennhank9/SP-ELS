import React from 'react';
import HeadExplain from './HeadExplain';
import ListRetrieval from './ListRetrieval';

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
