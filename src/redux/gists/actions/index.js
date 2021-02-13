import { createAction } from "../../../utils/index";
import { GISTS } from "./GistsActionTypes";

export const gistAction = {
    request: () =>
        createAction(GISTS.GET, {
            fetching: true,
            success: false,
            error: null,
        }),
    success: (data) =>
        createAction(GISTS.SUCCESS, {
            ...data,
            fetching: true,
            success: true,
            error: null,
        }),
    nextPage: (data) =>
        createAction(GISTS.NEXTPAGE, {
            data: data,
            fetching: true,
            success: true,
            error: null,
        }),
    prevPage: (data) =>
        createAction(GISTS.PREVPAGE, {
            data: data,
            fetching: true,
            success: true,
            error: null,
        }),

    failure: (error) =>
        createAction(GISTS.FAILURE, {
            ...error,
            fetching: false,
            success: false,
        }),
};

export default gistAction;
