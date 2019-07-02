/* eslint-disable react/prop-types */
import React from 'react';

export default function ListKnowledgeCardsExplain(props) {
  const { knowledgeCards } = props;

  return (
    <div className="list-knowledge-cards-explain">
      {knowledgeCards.map((knowledgeCard, index) => (
        <div key={index} className="knowledge-card">
          <div className="knowledge-card-image">{knowledgeCard.image}</div>
          <div className="knowledge-card-text">
            <p>
              <b>{knowledgeCard.boldText}</b>
              {knowledgeCard.explains}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
