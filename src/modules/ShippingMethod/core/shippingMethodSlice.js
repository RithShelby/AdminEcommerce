import { createSlice } from "@reduxjs/toolkit";

const shippingMethodSlice =  createSlice({
    name: "shippingMethod",
    initialState: {
        listShoppingMethod: [],
        listUpdateShipping: [],
    },
    reducers:{
        setShippingMethod: (state,action) =>{
            state.listShoppingMethod = action.payload;
        },
        setUpdatingShippingMethod: (state,action) =>{
            const upShipping = action.payload;
            state.listUpdateShipping = state.listUpdateShipping.map((ship)=>{
                if(ship.id === ship.id){
                    return upShipping;
                }
                return ship;
            })
        }
    }
});
export const {setShippingMethod,setUpdatingShippingMethod} = shippingMethodSlice.actions;
export default shippingMethodSlice.reducer;