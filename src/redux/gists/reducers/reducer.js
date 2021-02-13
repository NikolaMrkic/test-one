import { combineReducers } from "redux";
import GistReducer from "./GistReducer";

export default function createReducer(asyncReducers) {
    return combineReducers({
        //Global state
        gists: GistReducer,
        ...asyncReducers,
    });
}
