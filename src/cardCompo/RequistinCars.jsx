import React from "react";

function RequisitionsCards(data) {
  const styles = {
    reqCard: {
      width: "280px",
      height: "116px",
      flexShrink: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      background: "#FFF",
      gap: "20px",
    },
    reqCardHeading: {
      color: "var(--Text, #030229)",
      fontFamily: "Nunito",
      fontSize: "1.375rem",
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: "normal",
    },
    reqCardBody: {
      color: "var(--Text, #030229)",
      fontFamily: "Nunito",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    reqRight: {
      gap: "10px",
      flexDirection: "column",
      display: "flex",
      alignItems: "start",
    },
    reqLeftImg: {
      width: "60.87px",
      height: "60px",
      flexShrink: 0,
    },

  };

  return (
    <>
        <div style={styles.reqCard} className="req-card">
          <div className="req-left">
            <img style={styles.reqLeftImg} src={data.img} alt="" />
          </div>

          <div style={styles.reqCardHeading} className="req-right">
            <h2 style={styles.reqCardHeading}>{data.numbers}</h2>
            <p style={styles.reqCardBody}>{data.req}</p>
          </div>
        </div>

    </>
  );
}

export default RequisitionsCards;