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
            
            <b> Have questions or ready to book your event? We’re here to help! </b>
            
            
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
            Dar Tanfouset
          </h3>
          {/* <p style={{ margin: 0, fontWeight: "600", color: "#444" }}>CFO</p> */}
          <p style={{ marginBottom: "20px", color: "#555" }}>
            <b>Location:</b> Boumhal, near Azur City
            <b>Phone:</b>  +216 99 750 305
            <b>Instagram</b>: <a href="https://www.instagram.com/Dar_tanfouset" target="_blank">Dar_tanfouset</a>
            <b>Facebook</b>: <a href="https://www.instagram.com/Dar_tanfouset" target="_blank">Dar Tanfouset</a>
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
              href="tel:+216 99 750 305"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              +216 99 750 305
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
