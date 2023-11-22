import React from 'react';
import './resolveBtn.css';

const ResolveBtn = () => {
  return (
    <>
    <div className="resolveBtn">
    <div className="btns">
    <p className="resolve">
      
      <img src="./images/assets/card-icon/resolve-icon.svg" alt=""/>
      Resolve
    </p>
    <button className="replyBtn">
      <img src="./images/assets/card-icon/replay.svg" alt=""/>
      Reply
    </button>
  </div>
  </div>
    </>
  )
}

export default ResolveBtn;