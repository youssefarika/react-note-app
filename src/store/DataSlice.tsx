import { createSlice } from "@reduxjs/toolkit";

type DataState = {
  title: string,
  Desc?: string,
  tags?: { label: string }[],
  id: string | number[],
}[];


const initialState: DataState = [];

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      const { title, Desc, tags, id } = action.payload;
      state.push({ title, Desc, tags, id });
    },
    modifyData: (state, action) => {
      const { title, Desc, tags, id } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        Object.assign(existingItem, { Desc, title, tags, id });
      }
    },
    DeleteData: (state, action) => {
      const filter = state.filter((item) => item.id !== action.payload.id);
      return filter;
    }
  }
});

export const { addData, modifyData, DeleteData } = dataSlice.actions;
export default dataSlice.reducer;

// const alltags = data?.map((items) => items.tags);
// const unused = alltags?.map((items) => items);
// const notused = unused.filter((tag) => tag !== tag)
// const options = notused.map((items) => ({ value: items, label: items }));

