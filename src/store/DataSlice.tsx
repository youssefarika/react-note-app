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
    DeleteData: (state, action) => {
      const filter = state.filter((item) => item.title !== action.payload.title);
      return filter
    }
    // other reducer functions
  },
});

export const { addData, DeleteData } = dataSlice.actions;
export default dataSlice.reducer;
