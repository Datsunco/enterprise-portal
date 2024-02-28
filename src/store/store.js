import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slicers/tmpSlice'

export const store = configureStore({
  reducer: {
    counterSlice
},
})