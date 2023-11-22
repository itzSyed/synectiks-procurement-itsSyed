import React from "react";
import './statusBtn.css'

const StatusBtn = () => {
  return (
    <>
      <button className="on-hold">On Hold</button>
      <button className="approved">Approved</button>
      <button className="pending">Pending</button>
      <button className="reject">Reject</button>
    </>
  );
};

export default StatusBtn;
