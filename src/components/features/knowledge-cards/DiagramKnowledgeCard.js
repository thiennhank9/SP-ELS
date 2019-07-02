/* eslint-disable react/prop-types */
import React from 'react';
import ListDiagramKnowledgeCard from './ListDiagramKnowledgeCard';

export default function DiagramKnowledgeCard(props) {
  const {
    chapter: { number, name, bookPages, sections }
  } = props;
  const titleChapter = `Chapter ${number} ${name}`;
  const titleBookPages = `Book Pages ${bookPages}`;

  return (
    <div className="diagram-knowledge-card">
      <h3 className="text-knowledge-cards">KNOWLEDGE CARDS</h3>
      <h1>{titleChapter}</h1>
      <ListDiagramKnowledgeCard diagrams={sections} />
      <h4 className="text-book-pages-bottom">{titleBookPages}</h4>
    </div>
  );
}
