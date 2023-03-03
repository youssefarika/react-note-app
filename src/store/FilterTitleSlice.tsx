import { createSlice } from "@reduxjs/toolkit";



const filterSlice = createSlice({
  name: "title",
  initialState: [],
  reducers: {
    addTitle: (state, action) => {
        if(state.length !== 0) {
          state.push(action.payload);
          state.splice(0, 1)
        } else {
          state.push(action.payload);
        }
      }
    },
  }
);

export const { addTitle } = filterSlice.actions;
export default filterSlice.reducer;
