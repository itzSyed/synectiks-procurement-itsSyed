// OrderTable.js

import React from 'react';
import './orderLine.css'; // Import your global CSS file

const OrderTable = () => {
  return (
    <table className="order-table">
      <div className="order-header">
        <div className="order-col">
          <p className="h-color">Line</p>
        </div>
        <div className="order-col">
          <p>Name</p>
        </div>
        <div className="order-col">
          <p>Category</p>
        </div>
        <div className="order-col">
          <p>Quantity</p>
        </div>
        <div className="order-col">
          <p>Unit</p>
        </div>
        <div className="order-col">
          <p>Price</p>
        </div>
        <div className="order-col">
          <p>Total Cost</p>
        </div>
        <div className="order-col">
          <p>Status</p>
        </div>
      </div>
      <div className="body-row">
        <div className="order-body order-first-row">
          <div className="order-col">
            <p>01</p>
          </div>
          <div className="order-col">
            <p>Headphones</p>
          </div>
          <div className="order-col">
            <p>Tech</p>
          </div>
          <div className="order-col">
            <p>05</p>
          </div>
          <div className="order-col">
            <p>each</p>
          </div>
          <div className="order-col">
            <p>$150</p>
          </div>
          <div className="order-col">
            <p>$750</p>
          </div>
          <div className="order-col">
            <p className="order-status">Pending</p>
          </div>
        </div>
        <div className="order-body">
          <div className="order-col">
            <p>02</p>
          </div>
          <div className="order-col">
            <p>Headphones</p>
          </div>
          <div className="order-col">
            <p>Tech</p>
          </div>
          <div className="order-col">
            <p>05</p>
          </div>
          <div className="order-col">
            <p>each</p>
          </div>
          <div className="order-col">
            <p>$150</p>
          </div>
          <div className="order-col">
            <p>$750</p>
          </div>
          <div className="order-col">
            <p className="order-status">Pending</p>
          </div>
        </div>
      </div>
    </table>
  );
};

export default OrderTable;
