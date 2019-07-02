import React from 'react';
import ListKnowledgeCardsExplain from './ListKnowledgeCardsExplain';

const CARDS_EXPLAIN = [
  {
    image: 'image 1',
    boldText: 'Cards',
    explains: ' contain key information in bite-sized peices'
  },
  {
    image: 'image 2',
    boldText: 'Retrieval Practice',
    explains: ' helps you extract and cement the information'
  },
  {
    image: 'image 3',
    boldText: 'Review Questions',
    explains: ' help you gauge your understanding'
  }
];

export default function KnowledgeCardExplain() {
  return (
    <div className="knowledge-card-explain">
      <h1>Knowledge Cards</h1>
      <p className="knowledge-card-explain-text">
        Knowledge Cards are the most important concepts from the book chapter, selected by your instructor and built to
        help you retrain the material usng proven cognitive strategies
      </p>
      <ListKnowledgeCardsExplain knowledgeCards={CARDS_EXPLAIN} />
    </div>
  );
}
