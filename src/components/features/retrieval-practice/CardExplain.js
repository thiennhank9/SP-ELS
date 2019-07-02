/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import OnTestNotification from './OnTestNotification';
import HeadExplain from './HeadExplain';

const TEXT_CARD_EXPLAIN =
  'Cards contain the most important information from the chapter.' +
  '\n For each card, you can link back to the corresponding textbook page for more information';

const ICON_EXPLAINS = [
  {
    component: OnTestNotification,
    text: 'Pay special attention to these cards as your instructor has indicated they will be on the test!'
  },
  {
    icon: 'book-mark',
    text: 'Bookmark cards you want to return to at a later time'
  },
  { icon: 'raise', text: 'Raise your hand on any card where you have a question for the instructor' },
  {
    icon: 'like',
    text:
      'Mark how confident you are that you know each card. This will help create sets of cards for you to review bases on how well you know them'
  }
];

export default function CardExplain() {
  return (
    <div className="card-explain-container">
      <HeadExplain title="Card" text={TEXT_CARD_EXPLAIN} />
      <CardExplainIcons cardExplains={ICON_EXPLAINS} />
    </div>
  );
}

function CardExplainIcons(props) {
  const { cardExplains } = props;

  return (
    <div className="card-explain-icons">
      {cardExplains.map((cardExplain, index) => {
        const { icon, component, text } = cardExplain;

        return (
          <div key={index} className="card-explain-icon-row">
            <div className="card-icon-left">
              <OnTestNotification />
            </div>
            <div className="card-text-right">{text}</div>
          </div>
        );
      })}
    </div>
  );
}
