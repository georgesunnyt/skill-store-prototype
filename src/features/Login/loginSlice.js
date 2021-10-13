import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    showLogin: false,
    type: ''
}

let loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        toggleLogin(state, action) {
            state.type = action.payload.type
            const {show, type} = action.payload
            state.showLogin = show
            state.type = type
        }
    }
})

export const {toggleLogin} = loginSlice.actions
export default loginSlice.reducer