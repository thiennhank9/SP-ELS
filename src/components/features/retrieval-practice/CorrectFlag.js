/* eslint-disable react/prop-types */
import React from 'react';
import { ELSIcon } from '../../common';

export default function CorrectFlag(props) {
  const { isCorrect } = props;

  return (
    isCorrect && (
      <div className="correct-flag">
        <ELSIcon name="checkmark" size="1x" />
      </div>
    )
  );
}
