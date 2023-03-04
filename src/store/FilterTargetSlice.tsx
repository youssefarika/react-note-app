import { createSlice } from "@reduxjs/toolkit";



type DataState = {
  tags?: { label: string, value: string }[] | null,
}[];

const filterSlice = createSlice({
  name: "target",
  initialState: [],
  reducers: {
    addTarget: (state, action) => {
        if(state.length !== 0) {
          const tags: DataState = action.payload
          state.push(tags);
          state.splice(0, 1)
          console.log(action.payload)
        } else {
          const tags: DataState = action.payload
          state.push(tags);
        }
      }
    },
  }
);

export const { addTarget } = filterSlice.actions;
export default filterSlice.reducer;
