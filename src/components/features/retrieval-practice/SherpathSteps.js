/* eslint-disable react/prop-types */
import React from 'react';
import cx from 'classnames';

function SherpathSteps(props) {
  const { steps, activeIndex } = props;

  return (
    <div className="steps-container">
      {steps.map((step, index) => {
        const isLastStep = index === steps.length - 1;

        return (
          <div key={`SherpathSteps-index-${index}`} className="step-with-line">
            <Step number={step.number} name={step.name} isActive={index === activeIndex} />
            {!isLastStep ? <div className="step-line" /> : null}
          </div>
        );
      })}
    </div>
  );
}

function Step(props) {
  const { number, name, isActive = false } = props;

  return (
    <div
      className={cx('step', {
        '--active': isActive
      })}
    >
      <div className="step-circle">{number}</div>
      <div>{name}</div>
    </div>
  );
}
export default SherpathSteps;
