import React, { useState } from 'react'
import {FaTrash} from 'react-icons/fa'

const SingleItem = ({id, name, desc, removeItem, isChecked, editItem}) => {
  console.log(isChecked);
  return (
    <article className="task">
      <input
        type="checkbox"
        className="check"
        checked={!isChecked}
        onChange={() => editItem(id)}
      />
      <div className="txt">
        <h3 style={{ textDecoration: !isChecked && 'line-through' }}>
          <strong>Task: {name}</strong>
        </h3>
        <p>{isChecked && `Description: ${desc}`}</p>
      </div>
      <button className="btn" type="button" onClick={() => removeItem(id)}>
        <FaTrash className="trash" />
      </button>
    </article>
  );
}

export default SingleItem
