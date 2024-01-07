import { createSlice } from '@reduxjs/toolkit';

interface CartState {
    colour: string;
    name: string;
    price: number;
    qty: number;
}

const initialState: CartState[] = []

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addCart(state, {payload}) {
            const obj = state.find(val => val.name == payload.name)
            
            if(obj){
                ++obj.qty
                obj.price = obj.price*obj.qty;
                // console.log("Price Object", obj.price);
            
                const newState = state.filter(val => val.name !== obj.name)
                state = [...newState, obj]
                return
            }

            state.push(payload);
        },
        deleteCart(state, action) {
            return state.filter(val => val.name !== action.payload)
        },
        productInc(state){
            //const qtyState = state.find(val => val.name !== action.payload.name)
            state.find(val => ++val.qty)
        },
        productDec(state){
            state.find(val => --val.qty)            
        }
        
        
    },
});

export const{ addCart, deleteCart, productInc, productDec } = cartSlice.actions;

export default cartSlice.reducer;