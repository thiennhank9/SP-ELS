/* eslint-disable react/prop-types */
import React from 'react';
import { ELSIcon } from '../../common';
import SherpathSteps from './SherpathSteps';
import HeaderChapterTitle from '../../common/HeaderChapterTitle';

function HeaderRetrieval(props) {
  const { chapter, sectionNumber } = props;
  const steps = chapter.sections.map((section) => section.name);

  return (
    <div className="c-header-navigation__container c-sticky">
      <HeaderChapterTitle chapter={chapter} />
      <div>
        <SherpathSteps steps={steps} activeIndex={sectionNumber} />
      </div>
      <div className="speaker-container">
        <ELSIcon name="speaker" customClass="step-speaker" />
        &nbsp;
        <div>Play Audio</div>
      </div>
    </div>
  );
}

export default HeaderRetrieval;
