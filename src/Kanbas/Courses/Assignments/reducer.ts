import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
};
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                course: assignment.course,
                name: assignment.name,
                description: assignment.description,
                points: assignment.points,
                due_date: assignment.due_date,
                available_from: assignment.available_timestamp,
                available_until: assignment.due_timestamp
            };
            state.assignments = [...state.assignments, newAssignment];
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        editAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            );
        },
    },
});
export const { addAssignment, deleteAssignment, editAssignment } =
    assignmentSlice.actions;
export default assignmentSlice.reducer;

