/* eslint-disable react/prop-types */
import React from 'react';

export default function ListDiagramKnowledgeCard(props) {
  const { diagrams } = props;

  return (
    <div className="list-diagram-knowledge-card">
      {diagrams.map((diagram, index) => {
        const { name, knowledgeCards, minuteRetrievalPractice, totalReviewQuestions } = diagram;
        const textKnowledge = `${knowledgeCards} Knowledge Cards`;
        const textRetrieval = `${minuteRetrievalPractice} Minute Retrieval Practice`;
        const textReview = `${totalReviewQuestions} Review Questions`;

        return (
          <div key={index}>
            <h2 className="diagram-title">{name}</h2>
            <div className="diagram-container">
              <DiagramRow text={textKnowledge} borderColor="#C4CCE3" />
              <DiagramRow text={textRetrieval} borderColor="#BDDED8" />
              <DiagramRow text={textReview} borderColor="#DCD7AE" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DiagramRow(props) {
  const { text, borderColor } = props;

  return (
    <div className="diagram-row">
      <div style={{ borderLeftColor: borderColor, borderBottomColor: borderColor }} className="diagram-icon" />
      <div className="diagram-text">{text}</div>
    </div>
  );
}
