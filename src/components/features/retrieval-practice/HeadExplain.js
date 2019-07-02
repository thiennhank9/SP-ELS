/* eslint-disable react/prop-types */
import React from 'react';

export default function HeadExplain(props) {
  const { title, subtitle, text } = props;

  return (
    <div className="head-explain-container">
      <h1 className="head-explain-title">{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
      <div className="head-explain">
        <div className="image-cards" />
        <p className="head-explain-text">{text}</p>
      </div>
      <div />
    </div>
  );
}
