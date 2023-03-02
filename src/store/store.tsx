import { configureStore } from '@reduxjs/toolkit'
import data from "./DataSlice"
import target from "./FilterSlice"

export const store = configureStore({
  reducer: {
    data,
    target,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch