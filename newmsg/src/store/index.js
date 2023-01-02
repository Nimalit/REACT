import { legacy_createStore } from "redux";
import { profileReducer } from "./profile/reducer";

export const store = legacy_createStore(profileReducer);