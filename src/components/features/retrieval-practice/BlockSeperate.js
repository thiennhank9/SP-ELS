/* eslint-disable react/prop-types */
import React from 'react';

export default function BlockSeperate(props) {
  const { bgColor } = props;
  return <div style={{ backgroundColor: bgColor }} className="block-seperate" />;
}
