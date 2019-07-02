/* eslint-disable react/prop-types */
import React from 'react';
import { ELSIcon } from '../../common';

export default function StepFooter(props) {
  const { nextSection } = props;

  return (
    <div className="step-footer-container">
      {nextSection && (
        <div className="step-footer">
          <div>Next Section</div>
          <div className="step-navigate">
            {nextSection}{' '}
            <div>
              <ELSIcon name="chevron-right" size="1x1o2" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
