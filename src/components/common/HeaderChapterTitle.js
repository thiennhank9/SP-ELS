import React from 'react';
import { ELSIcon } from './index';

export default function HeaderChapterTitle(props) {
  // eslint-disable-next-line react/prop-types
  const { number, name, totalCards } = props.chapter;

  return (
    <div className="header-chapter">
      <div>
        <ELSIcon name="close" color="n7" size="3o4" align="top" />
      </div>
      <div className="header-chapter-title">
        <h4>
          <b>Chapter {number} </b>
          &nbsp; {name}
        </h4>
        <div>{totalCards} cards</div>
      </div>
    </div>
  );
}
