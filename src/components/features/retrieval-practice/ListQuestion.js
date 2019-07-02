/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { ELSSingleBestAnswer, ELSButton } from '../../common';

export default function ListQuestion(props) {
  const { questions } = props;
  return (
    <div className="list-question">
      {questions.map((question, index) => (
        <QuestionView key={index} question={question} />
      ))}
    </div>
  );
}

function QuestionView(props) {
  const {
    question: { questionPrompt, questionChoices }
  } = props;
  return (
    <div className="question">
      <ELSSingleBestAnswer
        questionPrompt={questionPrompt}
        questionChoices={questionChoices}
        //     questionFeedbacks={answerResponse.qtiData ? answerResponse.qtiData.feedback : {}}
        //     textReference={answerResponse.qtiData ? answerResponse.qtiData.textReference[0] : ''}
        //     correctAnswer={answerResponse.qtiData ? answerResponse.qtiData.correctResponse[0] : ''}
        //     onSelectAnswer={onSelectAnswer}
        //     answerCorrectnessText={answerCorrectnessText}
        //     selectedAnswer={selectedAnswer}
        //     learningPointText={messages.LEARNING_POINT}
        //     learningPointContent={learningPointContent}
      />
      <div className="question-footer-buttons">
        <Fragment>
          <ELSButton
            id="confidence"
            size="small"
            text="Confident"
            //    isDisabled={!isAnswerSelected}
            name="confidence"
            //    onClick={() => submitAnswer(true)}
          />
          <span className="u-els-margin-left" />
          <ELSButton
            id="not_sure"
            size="small"
            text="Not sure"
            //   isDisabled={!isAnswerSelected}
            name="not_sure"
            //   onClick={() => submitAnswer(false)}
          />
        </Fragment>
      </div>
    </div>
  );
}
