import axios from "axios";

const reqGetOrderStatus = () =>{
    return axios.get("order-status");
};
const reqCreateOrderStatus = (payload) =>{
    return axios.post("order-status", payload);
};
const reqUpdateOrderStatus = (id,payload) => {
    return axios.put(`order-status/${id}`,payload);
}
const reqDeleteOrderStatus = (id) => {
    return axios.delete(`order-status/${id}`);
}
export{ reqGetOrderStatus, reqCreateOrderStatus, reqUpdateOrderStatus, reqDeleteOrderStatus };