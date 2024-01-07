import { createSlice } from '@reduxjs/toolkit';

interface ProductState {
    colour: string;
    name: string;
    price: number;
    qty: number;
}

const initialState:ProductState[] = [
    {name:"Nike", colour:"Blue", price:320, qty:1},
    {name:"Borjan", colour:"Green", price:230, qty:1},
    {name:"Adidas", colour:"Yellow", price:790, qty:1}]

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
        addProduct(state, action) {},
        deleteProduct(state, action) {}
    }
})

export const{ addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;