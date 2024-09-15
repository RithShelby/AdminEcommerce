import { useDispatch } from "react-redux";
import { setOrderStatus, setUpdateOrderStatus } from "./orderStatusSlice"
import { reqCreateOrderStatus, reqDeleteOrderStatus, reqGetOrderStatus, reqUpdateOrderStatus } from "./request"
import {  useNavigate } from "react-router-dom";

const useOrderStatus = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const getOrderStatus = () =>{
        reqGetOrderStatus().then((res) => {
            dispatch(setOrderStatus(res.data.data));
        });
    };
    const createOrderStatus = (payload) => {
        return reqCreateOrderStatus(payload).then((res) =>{
            getOrderStatus();
            alert("Succes Create Order Status");
            navigate("order-status");
            console.log(res.data.data);
        }).catch((err) => console.log(err))
    };
    const updateOrderStatus = (id, payload) => {
        return reqUpdateOrderStatus(id, payload)
        .then((res) => {
            dispatch(setUpdateOrderStatus(res.data.data));
            alert("Succes Update Order Status");
            navigate("/order-status");
        }).catch((err) => console.log(err));
    };
    const deleteOrderStatus = (id) => {
        return reqDeleteOrderStatus(id)
        .then(() => {
            alert("Success deletes Order Status");
            window.location.href = "/order-status";
        }).catch((err) => console.error(err));
    };
    return{
        getOrderStatus, createOrderStatus, updateOrderStatus, deleteOrderStatus
    };
};
export { useOrderStatus };