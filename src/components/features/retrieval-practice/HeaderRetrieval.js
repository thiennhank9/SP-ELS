/* eslint-disable react/prop-types */
import React from 'react';
import { ELSIcon } from '../../common';
import SherpathSteps from './SherpathSteps';
import HeaderChapterTitle from '../../common/HeaderChapterTitle';

const SHERPATH_STEPS = [
  { number: 1, name: 'Image Production' },
  { number: 2, name: 'Image Receptor Systems' },
  { number: 3, name: 'Image Quality Factors' },
  { number: 4, name: 'Fluoroscopic Imaging' }
];

const ACTIVE_INDEX = 0;

function HeaderRetrieval(props) {
  const { chapter } = props;

  return (
    <div className="c-header-navigation__container c-sticky">
      <HeaderChapterTitle chapter={chapter} />
      <div>
        <SherpathSteps steps={SHERPATH_STEPS} activeIndex={ACTIVE_INDEX} />
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
