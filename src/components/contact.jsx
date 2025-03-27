// import { useState } from "react";
// import emailjs from "emailjs-com";
// import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };
// export const Contact = (props) => {
//   const [{ name, email, message }, setState] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };
//   const clearState = () => setState({ ...initialState });
  
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name, email, message);
    
//     {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
//     emailjs
//       .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
//       .then(
//         (result) => {
//           console.log(result.text);
//           clearState();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };
//   return (
//     <div>
//       <div id="contact">
//         <div className="container">
//           <div className="col-md-8">
//             <div className="row">
//               <div className="section-title">
//                 <h2>Get In Touch</h2>
//                 <p>
//                   Please fill out the form below to send us an email and we will
//                   get back to you as soon as possible.
//                 </p>
//               </div>
//               <form name="sentMessage" validate onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className="form-control"
//                         placeholder="Name"
//                         required
//                         onChange={handleChange}
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         placeholder="Email"
//                         required
//                         onChange={handleChange}
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     name="message"
//                     id="message"
//                     className="form-control"
//                     rows="4"
//                     placeholder="Message"
//                     required
//                     onChange={handleChange}
//                   ></textarea>
//                   <p className="help-block text-danger"></p>
//                 </div>
//                 <div id="success"></div>
//                 <button type="submit" className="btn btn-custom btn-lg">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="col-md-3 col-md-offset-1 contact-info">
//             <div className="contact-item">
//               <h3>Contact Info</h3>
//               <p>
//                 <span>
//                   <i className="fa fa-map-marker"></i> Address
//                 </span>
//                 {props.data ? props.data.address : "loading"}
//               </p>
//             </div>
//             <div className="contact-item">
//               <p>
//                 <span>
//                   <i className="fa fa-phone"></i> Phone
//                 </span>{" "}
//                 {props.data ? props.data.phone : "loading"}
//               </p>
//             </div>
//             <div className="contact-item">
//               <p>
//                 <span>
//                   <i className="fa fa-envelope-o"></i> Email
//                 </span>{" "}
//                 {props.data ? props.data.email : "loading"}
//               </p>
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="row">
//               <div className="social">
//                 <ul>
//                   <li>
//                     <a href={props.data ? props.data.facebook : "/"}>
//                       <i className="fa fa-facebook"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.twitter : "/"}>
//                       <i className="fa fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.youtube : "/"}>
//                       <i className="fa fa-youtube"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";

export const Contact = () => {
  return (
    <div id="contact" style={{ backgroundColor: "#f7f7f7", color: "#333", padding: "60px 0" }}>
      <div className="container text-center">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Reach out to us for any inquiries or information.</p>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <h3 style={{ fontWeight: "bold", marginBottom: "5px" }}>Nino Nidhal Zouari</h3>
          <p style={{ margin: 0, fontWeight: "600" }}>CFO</p>
          <p style={{ marginBottom: "20px" }}>North America &amp; The Caribbean</p>

          <hr style={{ width: "60px", margin: "20px auto" }} />

          <p>
            <i className="fa fa-envelope-o" style={{ marginRight: "10px" }}></i>
            <a href="mailto:ninotunisia@gmail.com" style={{ color: "#333", textDecoration: "none" }}>
              ninotunisia@gmail.com
            </a>
          </p>
          <p>
            <i className="fa fa-phone" style={{ marginRight: "10px" }}></i>
            <a href="tel:+16104620005" style={{ color: "#333", textDecoration: "none" }}>
              +1 610 462 0005
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
