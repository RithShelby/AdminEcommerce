import axios from "axios";

const reqGetShippingMethod = () => {
    return axios.get("shipping-method");
};
const reqCreateShippingMethod = (payload) => {
    return axios.post("shipping-method", payload);
};
// const requpdateShippingMethod = (id,payload) => {
//     return axios.put(`shipping-method ${id}`,payload);
// };
const reqDeleteShippingMethod = (id) => {
    return axios.delete(`shipping-method/${id}`); // Corrected axios URL
};
const reqUpdateShippingMethod = ( id,payload) => {
    return axios.put(`shipping-method/${id}`,payload);
}
export {  reqGetShippingMethod, reqCreateShippingMethod , reqDeleteShippingMethod ,reqUpdateShippingMethod};