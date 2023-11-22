import React from 'react';
// import priorityImg from '@assets/priority1.png';

import './priority.css'

const Priority = () => {
  return (
    <div>
      <div className="prio">
        <img src="./images/assets/priority1.png" alt="" />
        <h4 className="medium-head">Medium</h4>
      </div>

      <div className="prio">
        <img src="./images/assets/high-prio.png" alt="" />
        <h4 className="high-head">High</h4>
      </div>

      <div className="prio">
        <img src="./images/assets/low-prio.png" alt="" />
        <h4 className="low-head">Low</h4>
      </div>
    </div>
  )
}

export default Priority