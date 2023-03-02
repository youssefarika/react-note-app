import { createSlice } from "@reduxjs/toolkit";



const filterSlice = createSlice({
  name: "target",
  initialState: [],
  reducers: {
    addTarget: (state, action) => {
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

export const { addTarget } = filterSlice.actions;
export default filterSlice.reducer;
