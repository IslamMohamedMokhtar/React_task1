import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const initialState ={
    data:[],
    loading:false,
    error:'',
    ProductDetail:null,
};

export const fetchproducts = createAsyncThunk("products/fetchAllproducts",
    async(id="")=>{
        const x = await axios.get(`http://localhost:8000/Product/`)
            .then(response => response.data);
        return x;
    }
);
export const fetchproduct = createAsyncThunk("products/Fetchproduct",
    async(id="")=>{
        const x = await axios.get(`http://localhost:8000/Product/${id}`)
            .then(response => response.data);
        return x;
    }
);

export const postproducts = createAsyncThunk("products/postproducts",
    async(product)=>{
        const x = axios.post('http://localhost:8000/Product',product)
        .then((res) => {
            toast.success("product has been added",{
                position: "bottom-left",
            });
            return res.data;
        })
        .catch(error => {
            toast.error(error,{
                position: "bottom-left",
            });
        })
        return x;
    }
);
export const deleteproducts = createAsyncThunk("product/deleteproduct",
    async(id)=>{
        const product = axios.delete(`http://localhost:8000/Product/${id}`)
        .then((res) => res.data)
        .then(res => {
            const y = axios.post('http://localhost:8002/Product',res)
                 .then((res) => res.data);
            return y
        });
        
        return product;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchproducts.pending,(state) => {
            state.loading = true;
        })
        .addCase(fetchproducts.fulfilled,(state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        })
        .addCase(fetchproducts.rejected,(state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(fetchproduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchproduct.fulfilled, (state, action) => {
            state.loading = false;
            state.ProductDetail = action.payload;
        })
        .addCase(fetchproduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(deleteproducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteproducts.fulfilled, (state, action) => {
            state.loading = false;
            const itemindex = state.data.findIndex(
                (item) => item.id === action.payload.id
            );
            state.data.splice(itemindex, 1);
            state.ProductDetail = null;
        })
        .addCase(deleteproducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});
export default productsSlice.reducer;