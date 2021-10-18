import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    showLogin: false,
    type: '',
    name: localStorage.getItem('username'),
    image: localStorage.getItem('image')
}

let loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        toggleLogin(state, action) {
            const {show, type, username, image} = action.payload
            state.showLogin = show
            state.type = type
            state.name = username
            state.image = image
        },
        logout(state) {
            state.name = ''
        }
    }
})

export const {toggleLogin, logout} = loginSlice.actions
export default loginSlice.reducer