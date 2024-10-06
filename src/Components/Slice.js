import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: null,
    reducers: { // Corrected to `reducers`
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        },
    },
});

export const { addUser, removeUser } = slice.actions; // Corrected to `actions`
export default slice.reducer;
