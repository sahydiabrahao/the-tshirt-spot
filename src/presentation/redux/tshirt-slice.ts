import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tshirtInfo: {
    tshirtColor: '',
    logoName: '',
    fillColor: ''
  }
}

const tshirt = createSlice({
  name: 'tshirtInfo',
  initialState,
  reducers: {
    tshirtUpdateInfo: (state, actions) => {
      state.tshirtInfo = actions.payload
    },
    tshirtUpdateColor: (state, actions) => {
      state.tshirtInfo.tshirtColor = actions.payload
    }
  }
})

export default tshirt.reducer
export const { tshirtUpdateInfo, tshirtUpdateColor } = tshirt.actions
