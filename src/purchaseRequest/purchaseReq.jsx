import React from "react";
import './purchaseReq.css'


function PurchaseRequest() {
  return (
    <>
      <div className="Purchase-request">
        <div className="purchase-req-top .table-btn-colors">
          <h2>Request No : 06</h2>
          <p>#pending</p>
        </div>
        <div className="purchase-request-cards">
          <div className="purchase-request-card">
            <div className="purchase-details">
              <div className="pur-col">
                {" "}
                <p>Creation Date:</p>
              </div>
              <div className="pur-col">
                {" "}
                <p>25 Sep, 2023</p>
              </div>
            </div>

            <div className="purchase-details">
              <div className="pur-col">
                {" "}
                <p>Request Type:</p>
              </div>
              <div className="pur-col">
                {" "}
                <p>Product Type</p>
              </div>
            </div>

            <div className="purchase-details">
              <div className="pur-col">
                {" "}
                <p>Priority</p>{" "}
              </div>
              <div className="pur-col">
                <div className="purchase-span">
                  <img src="icons/Group 1000004324.svg" alt="" />
                  <p>High</p>
                </div>
              </div>
            </div>
          </div>

          <div className="purchase-request-card">
            <div className="purchase-details">
              <p>Required Delivery Date:</p>
              <p>25 Sep, 2023</p>
            </div>

            <div className="purchase-details">
              <p>Department:</p>
              <p>Finance Department</p>
            </div>

            <div className="purchase-details">
              <p>Location:</p>
              <p>South Africa</p>
            </div>
          </div>
        </div>

        <div className="Requester-cards">
          <div className="Requester-details">
            <h2>Requester Details</h2>

            <div className="requester-card">
              <div className="requester-left">
                <img src="./images/assets/Ellipse 177.svg" alt="" />
              </div>
              <div className="requester-right">
                <p>Justin Septimus</p>
                <p>Justinseptimus@synectiks.com</p>
                <p>Request Cost: $200</p>
              </div>
            </div>
          </div>
          <div className="Requester-details">
            <h2>Attach Documents</h2>

            <div className="requester-card pdf-father">
              <div className="pdf">
                <div className="pdf-left">
                  <img src="./images/assets/Frame.svg" alt="" />
                  <div className="pdf-name">
                    <p>Committe_Approval.pdf</p>
                    <p>200kb</p>
                  </div>
                </div>
                <div className="pdf-right">
                  <a href="">Click to view</a>
                </div>
              </div>

              <div className="pdf">
                <div className="pdf-left">
                  <img src="./images/assets/Frame.svg" alt="" />
                  <div className="pdf-name">
                    <p>Committe_Approval.pdf</p>
                    <p>200kb</p>
                  </div>
                </div>
                <div className="pdf-right">
                  <a href="">Click to view</a>
                </div>
              </div>

              <div className="pdf">
                <div className="pdf-left">
                  <img src="./images/assets/Frame.svg" alt="" />
                  <div className="pdf-name">
                    <p>Committe_Approval.pdf</p>
                    <p>200kb</p>
                  </div>
                </div>
                <div className="pdf-right">
                  <a href="">Click to view</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseRequest;