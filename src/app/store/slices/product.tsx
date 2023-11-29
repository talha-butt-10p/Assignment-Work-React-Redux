import { createSlice } from '@reduxjs/toolkit';

interface ProductState {
    colour: string;
    name: string;
    price: number;
    qty: number;
}

const initialState:ProductState[] = [
    {name:"shoes2", colour:"Blue", price:200, qty:1},
    {name:"shoes1", colour:"Blue", price:200, qty:1},
    {name:"shoes3", colour:"Blue", price:200, qty:1}]

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