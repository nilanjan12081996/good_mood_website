import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';


export const getIntouch = createAsyncThunk(
    'getIntouch',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/contact-us/get-in-touch', userInput);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
const initialState={
    loading:false,
    error:false,
    getIntouchData:""
}
const ContactSlice=createSlice(
{
    name:"contact",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getIntouch.pending,(state)=>{
            state.loading=true
        })
        .addCase(getIntouch.fulfilled,(state,{payload})=>{
            state.loading=false
            state.getIntouchData=payload
            state.error=false
        })
        .addCase(getIntouch.rejected,(state,{payload})=>{
            state.loading=false
            state.error=payload
        })
    }
}
)
export default ContactSlice.reducer