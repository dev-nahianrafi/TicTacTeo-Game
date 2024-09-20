/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const Btn = ({ style, content, onClick, disabled }) => {
  return (
    <button className={style} onClick={onClick} disabled={disabled}>
      {content}  {/* Displaying the content prop */}
    </button>
  );
}

export default Btn;
