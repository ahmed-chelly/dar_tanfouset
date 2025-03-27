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
              We supply high-quality natural salt sourced from the Djerid region in Southern Tunisia.
              Our products are available in bulk and suitable for both domestic and international buyers.
            </p>
            <p>
              <strong>Rock Salt for Snow Removal</strong><br />
              Perfect for melting snow and ice on roads, sidewalks, and parking areas. Effective, eco-conscious, and available in large quantities.
            </p>
            <p>
              <strong>Salt for Swimming Pools</strong><br />
              Purified salt ideal for saltwater pool systems. Clean, mineral-rich, and gentle on skin and surfaces.
            </p>
            <p>
              For more details, pricing, or to place an order, please contact us at <strong>+1 610 462 0005</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
