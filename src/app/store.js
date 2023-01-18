import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import portfolioReducer from "../features/portfolio/portfolioSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        portfolio: portfolioReducer,
    },
});
