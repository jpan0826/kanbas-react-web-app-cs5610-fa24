import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    quizzes: [],
};
const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },

        addQuiz: (state, { payload: quiz }) => { 
            state.quizzes = [...state.quizzes, quiz] as any;
        },
        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter(
                (a: any) => a._id !== quizId);
        },
        editQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((a: any) =>
                a._id === quiz._id ? quiz : a
            ) as any;
        },
    },
});
export const { addQuiz, deleteQuiz, editQuiz, setQuizzes } =
    quizSlice.actions;
export default quizSlice.reducer;