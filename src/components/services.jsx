// import React from "react";

// export const Services = (props) => {
//   return (
//     <div id="services" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2>Our Services</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//             dapibus leonec.
//           </p>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4">
//                   {" "}
//                   <i className={d.icon}></i>
//                   <div className="service-desc">
//                     <h3>{d.name}</h3>
//                     <p>{d.text}</p>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";

export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <p>
             <strong> Event Space Rental (Weddings, Receptions, Seminars, Parties) </strong> 
            </p>
            <p>
              <strong> Outdoor Area Access for open-air gatherings</strong><br />
              
            </p>
            <p>
              <strong>Decoration & Setup Support</strong><br />
             
            </p>
            <p>
              For details, pricing, or to book your date, please contact us at <strong>+216 99 750 305</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
