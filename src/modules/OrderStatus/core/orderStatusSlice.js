import { createSlice } from "@reduxjs/toolkit";

const OrderStatus = createSlice({
    name: "orderStatus",
    initialState: {
        listOrderStatus: [],
        listUpdateOrderStatus: [],
    },
    reducers: {
        setOrderStatus: (state,action) =>{
            state.listOrderStatus = action.payload;
        },
        setUpdateOrderStatus: (state,action) => {
            const upOrder = action.payload;
            state.listUpdateOrderStatus = state.listOrderStatus.map((order)=>{
                if(order.id === upOrder.id){
                    return upOrder;
                }
                return order;
            })
        }
    }
});
export const { setOrderStatus,setUpdateOrderStatus } = OrderStatus.actions;
export default OrderStatus.reducer;