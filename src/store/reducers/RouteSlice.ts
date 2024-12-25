import { createSlice } from "@reduxjs/toolkit"

interface RouteState {
    routes: string[]
} 

const initialState: RouteState = {
    routes: [],
}

export const routeSlice = createSlice({
    name: "route",
    initialState,
    reducers: {}
})

export default routeSlice.reducer;