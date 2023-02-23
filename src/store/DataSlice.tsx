import { createSlice } from "@reduxjs/toolkit";

type DataState = {
  title: string,
  Desc?: string,
  tags?: string,
}[];


const initialState: DataState = [];

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      const { title, Desc, tags } = action.payload;
      state.push({ title, Desc, tags });
    },
    // other reducer functions
  },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
