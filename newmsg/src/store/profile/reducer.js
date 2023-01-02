
import { TOGGLE_CHECKBOX } from "./actions";

const initalState = {
    showName: false,
    name: `defaulName`,
};

export const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX: {
            return {
                ...state,
                showName: !state.showName,
            };
        }
        default:
            return state;
    }
};