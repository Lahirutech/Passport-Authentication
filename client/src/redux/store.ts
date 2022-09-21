import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        // will automatically call combinedreducers
        //     users: usersReducer,
        // posts: postsReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;
