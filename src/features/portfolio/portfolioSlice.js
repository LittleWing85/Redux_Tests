import { createSlice } from "@reduxjs/toolkit";

const initialState = { projectId: 0 };

const portfolioSlice = createSlice({
    name: "portfolioSlice",
    initialState,
    reducers: {
        selectedProjectIdChanged(state, action) {
            console.log(action.payload);
            state.portfolio = action.payload.selectedProjectId;
            console.log(state.portfolio);
        },
    },
});

export const { selectedProjectIdChanged } = portfolioSlice.actions;
export default portfolioSlice.reducer;
