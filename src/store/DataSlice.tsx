import { createSlice } from "@reduxjs/toolkit";


export type DataState = {
  title: string,
  Desc?: string,
  tags?: { label: string }[],
  id: React.Key | undefined,
}[];


const initialState: DataState = localStorage.getItem("note") ? JSON.parse(localStorage.getItem("note")!) : [];

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      const { title, Desc, tags, id } = action.payload;
      state.push({ title, Desc, tags, id });
      localStorage.setItem("note", JSON.stringify(state)) 
    },
    modifyData: (state, action) => {
      const { title, Desc, tags, id } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      // do not create a new card jsu modify the current
      if (existingItem) {
        Object.assign(existingItem, { Desc, title, tags, id });
        localStorage.setItem("note", JSON.stringify(state))
      }
    },
    DeleteData: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("note", JSON.stringify(state)) 
      return state;
    },
    DeleteTags: (state, action) => {
      const tagToDelete = action.payload;
      const updatedState = state.map((item) => {
        const tags = item.tags?.filter((tag) => tag !== tagToDelete.join(" "));
        return { ...item, tags };
      });
      localStorage.setItem("note", JSON.stringify(updatedState));
      return updatedState;
    }
    
  }
});

export const { addData, modifyData, DeleteData, DeleteTags } = dataSlice.actions;
export default dataSlice.reducer;


