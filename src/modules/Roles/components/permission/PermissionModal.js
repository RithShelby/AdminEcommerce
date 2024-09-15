// import { useSelector } from "react-redux";
// import { useRoles } from "../../core/hook";
// import { useEffect } from "react";

// const PermissionModal = () => {
//   const {
//     detail: { role, loading, permissions },
//   } = useSelector((state) => state.roles);
//   //   const { listRole } = useSelector((state) => state.roles);
//   const { onUpdatePermission, onTogglePermission, getRoleById } = useRoles();

//   const onSubmit = () => {
//     const payload = {
//       roleId: role.id,
//       permissions: permissions.map((p) => ({
//         permissionId: p.permissionId,
//         status: !!p.status,
//       })),
//     };
//     onUpdatePermission(payload);
//   };
//   useEffect(() => {
//     getRoleById();
//   }, []);

//   return (
//     <div
//       data-backdrop="false"
//       className="modal fade"
//       id="permissionModal"
//       tabIndex="-1"
//       role="dialog"
//       aria-labelledby="permissionModalLabel"
//       aria-hidden="true"
//     >
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="permissionModalLabel">
//               Permission
//             </h5>
//           </div>
//           <div className="modal-body">
//             <div>
//               {loading ? (
//                 <div className="d-flex justify-content-center align-items-center w-100 h-100">
//                   <div className="spinner-border" role="status" />
//                 </div>
//               ) : (
//                 <>
//                   <h6 className="fw-bold">{role?.name}</h6>
//                   <table>
//                     <tbody>
//                       {permissions.map((permission, i) => {
//                         return (
//                           <tr key={i}>
//                             <td>
//                               <input
//                                 onChange={() => onTogglePermission(permission)}
//                                 checked={!!permission.status}
//                                 className=""
//                                 type="checkbox"
//                               />
//                             </td>
//                             <td>{permission.name}</td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </>
//               )}
//             </div>

//             <div className="float-end">
//               <button
//                 id="close-modal"
//                 type="button"
//                 className="btn btn-secondary me-3"
//                 data-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button onClick={onSubmit} className="btn btn-primary">
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { PermissionModal };
