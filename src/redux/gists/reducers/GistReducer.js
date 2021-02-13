import { GISTS } from "../actions/GistsActionTypes";

const initialState = {
    success: false,
    errorMessage: null,
    gistsArray: {},
    pageDetails: {},
    nextPage: {}
};

export default function BlogReducer(state = initialState, action) {
    switch (action.type) {
        case GISTS.GET:
            return {
                ...state,
            };
        case GISTS.SUCCESS:
            return {
                ...state,
                gistsArray: action.payload.response.data,
                pageDetails: action.payload.response.pageDetails,
                fetching: true,
                success: true,
                error: null,
            };

        case GISTS.FAILURE:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
}
