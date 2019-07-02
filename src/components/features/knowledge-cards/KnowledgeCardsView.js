/* eslint-disable react/prop-types */
import React from 'react';
import HeaderKnowledgeCard from './HeaderKnowledegeCard';
import KnowledgeCardExplain from './KnowledgeCardExplain';
import DiagramKnowledgeCard from './DiagramKnowledgeCard';
import KnowledgeCardFooter from './KnowledgeCardFooter';

export default function KnowledgeCardsView(props) {
  const { chapter } = props;

  return (
    <div className="knowledge-card-content">
      <HeaderKnowledgeCard chapter={chapter} />
      <KnowledgeCardExplain />
      <DiagramKnowledgeCard chapter={chapter} />
      <KnowledgeCardFooter />
    </div>
  );
}
