import { configureStore } from '@reduxjs/toolkit'
import personalDataReducer from './slicers/personalData'

export const store = configureStore({
  reducer: {
    personalData: personalDataReducer
},
})