// import React from "react";
// import { productsDropdown } from "./SidebarData";

// const SidebarDropdown = () => {
//   return (
//     <div class="accordion" id="accordionExample">
//       <div class="accordion-item">
//         <h2 class="accordion-header" id="headingOne">
//           <button
//             style={{ outline: "none" }}
//             class="toggleBtn accordion-button border-0"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapseOne"
//             aria-expanded="true"
//             aria-controls="collapseOne"
//           >
//             Produces
//           </button>
//         </h2>
//         <div
//           id="collapseOne"
//           class="accordion-collapse collapse show"
//           aria-labelledby="headingOne"
//           data-bs-parent="#accordionExample"
//         >
//           <div class="accordion-body">
//             {productsDropdown.map((product, index) => {
//               return (
//                 <li
//                   onClick={() => {
//                     window.location.pathname = product.path;
//                   }}
//                 >
//                   {product.title}
//                 </li>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarDropdown;

