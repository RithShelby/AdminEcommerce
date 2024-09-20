import Swal from "sweetalert2";


const useSweetAlert = () => {
   const SuccessAlert = ({title,text})=>{
       Swal.fire({
           title: title,
           text: text,
           icon: "success"
       });
   };
    const ErrorAlert = ()=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    };
    const ConfirmDelete = ()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Delete Successfully!!",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }
    return {ErrorAlert,SuccessAlert,ConfirmDelete}
};

export  {useSweetAlert};