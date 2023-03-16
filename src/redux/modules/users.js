import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    users:[],
    isLoading: false,
    error:null,
};

export const __getUsers = createAsyncThunk(
    "users/getUsers",
    async (payload, thunkAPI) => {
        try {
          const data = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
          return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );

export const __addUsers = createAsyncThunk(
    "users/addUsers",
    async (payload, thunkAPI) => {
        try {
          await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`,payload);

          return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );



const userSlice =createSlice({
    name:'users',
    initialState,
    reducers:{
        // addWish : (state, action) => {return {...state, wishes:[...state.wishes, action.payload]}},
        // switchWish : (state, action) => {
        //     const newList = state.wishes.map((item)=>item.id === action.payload ? {...item, isDone: !item.isDone}:item)
        //     return {...state, wishes:newList}
        // },
        // deleteWish : (state, action) => {
        //   const newList = state.wishes.filter((item)=>item.id !== action.payload)
        //   return {...state, wishes:newList}
        // },
        // updateWish : (state, action) => {
        //   const editId = action.payload.id;
        //   const editTargetIndex = state.wishes.findIndex((item)=>item.id === editId)
        //   const editList = [...state.wishes]
        //   editList.splice(editTargetIndex,1, action.payload)
        //   return {...state, wishes:editList}
        // }
    },
    extraReducers:{
        [__getUsers.pending]: (state) => {
            state.isLoading = true; 
          },
          [__getUsers.fulfilled]: (state, action) => {
            state.isLoading = false; 
            state.users = action.payload; 
          },
          [__getUsers.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload;
          },
          [__addUsers.pending]: (state) => {
            state.isLoading = true; 
          },
          [__addUsers.fulfilled]: (state, action) => {
            state.isLoading = false; 
            state.users = [...state.users,action.payload]; 
          },
          [__addUsers.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload;
          },
    }

})

// export const { addWish ,switchWish, deleteWish, updateWish} = wishSlice.actions;
export default userSlice.reducer;