/* eslint-disable react/prop-types */
import React from 'react';
import { ELSIcon } from '../../common';
import CorrectFlag from './CorrectFlag';

export default function ListRetrieval(props) {
  const { listRetrieval } = props;

  return (
    <div className="list-retrieval">
      {listRetrieval.map((retrieval, index) => {
        return <Retrieval key={index} retrieval={retrieval} />;
      })}
    </div>
  );
}

function Retrieval(props) {
  const {
    retrieval: { question, isSelected }
  } = props;
  return (
    <div className="retrieval">
      {isSelected && (
        <div className="retrieval-circle-selected">
          <CorrectFlag isCorrect />
        </div>
      )}
      <div className="retrieval-expand">
        <ELSIcon name="enlarge" size="1x1o2" />
      </div>

      <div>{question.type}</div>
      <div className="retrieval-question-rest">{question.rest}</div>
    </div>
  );
}
