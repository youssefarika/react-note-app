import { createSlice } from "@reduxjs/toolkit";

type DataState = {
  title: string,
  Desc?: string,
  tags?: { label: string }[],
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
    modifyData: (state, action) => {
      const { title, Desc, tags } = action.payload;
      const existingItem = state.find((item) => item.title === title);
      if (existingItem) {
        Object.assign(existingItem, { Desc, title, tags });
      }
    },
    DeleteData: (state, action) => {
      const filter = state.filter((item) => item.title !== action.payload.title);
      return filter;
    }
  }
});

export const { addData, modifyData, DeleteData } = dataSlice.actions;
export default dataSlice.reducer;

