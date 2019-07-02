/* eslint-disable react/prop-types */
import React from 'react';
import HeaderChapterTitle from '../../common/HeaderChapterTitle';
import ButtonStart from './ButtonStart';

export default function HeaderKnowledgeCard(props) {
  const { chapter } = props;

  return (
    <div className="c-header-navigation__container header-knowledge-card">
      <HeaderChapterTitle chapter={chapter} />
      <div>
        <ButtonStart />
      </div>
    </div>
  );
}
