import React from "react";
import './requisationTable.css'

function RequisitionsTable(data) {
  const tableStyles = {
    table: {
      width: "80%",
      flexShrink: 0,
      padding: "15px",
      paddingLeft: "0px",
      // backgroundColor: "#FFF",
      filter: "drop-shadow(0px 10px 13px rgba(17, 38, 146, 0.05))",
    },
    th: {
      textAlign: "center",
      alignItems: "center",
      color: "var(--fonts-primary-variant, #6E6893)",
      fontFamily: "Lexend",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "1rem",
      width: "200px",
    },
    td: {
      textAlign: "center",
      color: "var(--fonts-primary, #25213B)",
      fontFamily: "Lexend",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 400,
      height: "20px",
      width: "200px",
      lineHeight: "1.5rem",
      // border: "1px solid",
    },
    tdFlex: {
      display: "flex",
      justifyContent:"center",
      gap: "23px",
    },
    tdFlexImg: {
      display: "flex",
      width: "36px",
      height: "36px",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
    },
    tdFlexP: {
      color: "var(--fonts-primary, #25213B)",
      fontFamily: "Lexend",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },
    tr: {
      height: "60px",
      flexShrink: 0,
    },
    img: {
      width: "36px",
      height: "36px",
    },
    holdData: {},
    tdEnd: {
      width: "40px",
      alignItems: "center",
      color: "var(--fonts-primary-variant, #6E6893)",
      fontFamily: "Lexend",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "1rem",
      textAlign: "center",
    },
    tdWidth: {

    },
  };

  return (
    <table style={tableStyles.table}>
      <thead>
        <tr>
          <th style={tableStyles.th}>Name</th>
          <th style={tableStyles.th}>Location</th>
          <th style={tableStyles.th}>Creation Date</th>
          <th className="td-padding" style={tableStyles.th}>
            Total Cost
          </th>
          <th style={tableStyles.th}>Priority</th>
          <th style={tableStyles.th}>Status</th>
          <th className="action-con td-end" style={tableStyles.tdEnd}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td } >
            <div className="td-flex"><img src="./images/assets/priority1.png" alt="" />
            <p className="mediumIcon" >Medium</p></div>
            
          </td>
          <td className="Hold-data" style={tableStyles.td}>
          <button className="on-hold">on hold</button>
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img className="showMore" src="./images/assets/threeDot.svg" alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
        <td style={tableStyles.td}>
            <div className="td-flex">
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg" alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              {" "}
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg" alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              {" "}
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg" alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              {" "}
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg"alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              {" "}
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg"alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              {" "}
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg"alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              {" "}
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg"alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              {" "}
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg" alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              {" "}
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg" alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              {" "}
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg" alt="" />{" "}
          </td>
        </tr>

        <tr style={tableStyles.tr}>
          <td style={tableStyles.td}>
            <div className="td-flex">
              {" "}
              <img
                src="./images/assets/Ellipse 177.svg"
                alt="Avatsar 1"
                style={tableStyles.img}
              />
              <p style={tableStyles.tdFlexP}>Justin Septimus</p>
            </div>
          </td>
          <td style={tableStyles.td}>Bouvet Island</td>
          <td style={tableStyles.td}>06/07/2023</td>
          <td style={tableStyles.td}>$299.14</td>
          <td style={tableStyles.td}>
            <p style={tableStyles.tdFlexP}>Medium</p>
          </td>
          <td className="Hold-data" style={tableStyles.td}>
            On Hold
          </td>
          <td className="action-column" style={tableStyles.tdEnd}>
            <img src="./images/assets/threeDot.svg" alt="" />{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default RequisitionsTable;


{/* <div className="prio">
    <img src="../assets/priority1.png" alt="" />
    <h4 className="medium-head">Medium</h4>
</div>

<div className="prio">
    <img src="../assets/high-prio.png" alt="" />
    <h4 className="high-head">High</h4>
</div>

<div className="prio">
    <img src="../assets/low-prio.png" alt="" />
    <h4 className="low-head">Low</h4>
</div> */}