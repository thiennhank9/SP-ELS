/* eslint-disable react/prop-types */
import React from 'react';
import { ELSIcon } from '../../common';
import OnTestNotification from './OnTestNotification';

const ICON_FOOTERS = [
  {
    icon: 'thumbs-up',
    text: 'I know this'
  },
  {
    icon: 'bookmark',
    text: 'Bookmark'
  },
  {
    icon: 'hand',
    text: 'Raise hand'
  }
];

export default function ListCard(props) {
  const { cards } = props;
  const total = cards.length;

  return (
    <div className="list-card">
      {cards.map((card, index) => (
        <Card card={card} key={index} total={total} />
      ))}
    </div>
  );
}

function Card(props) {
  const {
    total,
    card: { index, question, answer, bookPage, willBeOnTest }
  } = props;
  const textIndex = `${index} of ${total}`;
  const textBookPage = `Book Page ${bookPage}`;
  const isLastCard = index === total;
  const isFirstCard = index === 1;

  return (
    <div className="card">
      <div className="card-index">
        {!isFirstCard && (
          <div className="icon-move-page">
            <ELSIcon name="chevron-up" size="1x" align="middle" />
          </div>
        )}
        <div>{textIndex}</div>
        {!isLastCard && (
          <div className="icon-move-page">
            <ELSIcon name="chevron-down" size="1x" align="middle" />
          </div>
        )}
      </div>
      <div className="card-box-text-container">
        <div className="card-box-text">
          {willBeOnTest ? (
            <div className="notification-container">
              <OnTestNotification />
            </div>
          ) : null}
          <h1 className="card-question">{question.full}</h1>
          <p className="card-answer">{answer}</p>
          <div className="card-text-book-page">{textBookPage}</div>
        </div>
        <CardIconsFooter iconsFooter={ICON_FOOTERS} />
      </div>
    </div>
  );
}

function CardIconsFooter(props) {
  const { iconsFooter } = props;
  return (
    <div className="card-icons-footer">
      {iconsFooter.map((iconFooter, index) => (
        <span key={index}>
          <span className="card-icon">
            {/* <ELSIcon name="chevron-down" size="1x" align="middle" /> */}
            <ELSIcon name={iconFooter.icon} align="middle" />
          </span>
          <span className="card-icon-text">{iconFooter.text}</span>
        </span>
      ))}
    </div>
  );
}
