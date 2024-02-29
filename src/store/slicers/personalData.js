import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fullName: {

    },
    birtDate: '',
    education: {
        bachelor: '',
        magistr: '',
        college: ''
    },
    address: '',
    contacts: {
        phone: '',
        mail: ''
    },
    image: '',
    value: 0,
}

export const personalDataSlice = createSlice({
  name: 'personalData',
  initialState,
  reducers: {
    increment: (state) => {
      console.log('k')
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setFullNameData: (state, action) => {
        state.fullName = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = personalDataSlice.actions

export default personalDataSlice.reducer