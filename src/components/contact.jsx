import React from "react";

export const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        background: "#f9f9f9",
        padding: "60px 0",
        color: "#222",
      }}
    >
      <div className="container text-center">
        <div className="section-title">
          <h2 style={{ color: "#333" }}>Contact</h2>
          <p style={{ color: "#555" }}> 
            Reach out to us for any inquiries or information. <br/>
            <b>   This salt is imported to you by Hannibal export. </b>
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px 30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            maxWidth: "500px",
            margin: "0 auto",
            color: "#222",
          }}
        >
          <h3
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#222",
            }}
          >
            Nino Nidhal Zouari
          </h3>
          {/* <p style={{ margin: 0, fontWeight: "600", color: "#444" }}>CFO</p> */}
          <p style={{ marginBottom: "20px", color: "#555" }}>
            North America &amp; The Caribbean
          </p>

          <hr
            style={{
              width: "60px",
              margin: "20px auto",
              borderColor: "#007bff",
            }}
          />

          {/* <p style={{ color: "#333" }}>
            <i className="fa fa-envelope-o" style={{ marginRight: "10px" }}></i>
            <a
              href="mailto:ninotunisia@gmail.com"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              ninotunisia@gmail.com
            </a>
          </p> */}
          <p style={{ color: "#333" }}>
            <i className="fa fa-phone" style={{ marginRight: "10px" }}></i>
            <a
              href="tel:+16104620005"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              +1 610 462 0005
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
