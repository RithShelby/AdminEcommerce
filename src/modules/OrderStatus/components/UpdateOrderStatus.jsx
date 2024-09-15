import { useParams } from "react-router-dom";
import { useOrderStatus } from "../core/hook";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

const UpdateOrderStatus = ({ id }) => {
  // const { id } = useParams();
  const { updateOrderStatus } = useOrderStatus();
  const { listOrderStatus } = useSelector((state) => state.orderStatus);
  const existOrderStatus = listOrderStatus.find((f) => f.id == id);
  const updateOrderFormik = useFormik({
    initialValues: {
      status: existOrderStatus?.status || "",
    },
    onSubmit: (values) => {
      updateOrderStatus(id, values);
    },
  });
  return (
    <div className="row mt-5 mx-4">
      <form onSubmit={updateOrderFormik.handleSubmit}>
        <input
          name="status"
          value={updateOrderFormik.values.status}
          className="form-control bg-light py-3"
          type="text"
          placeholder="Order Status"
          onChange={updateOrderFormik.handleChange}
        />
        <button type="submit" className="btn bg-success-subtle w-100 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};
export default UpdateOrderStatus;
