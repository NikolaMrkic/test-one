import { createActionTypes } from "../../../utils/index";

export const GISTS = createActionTypes("GISTS", [
    "GET",
    "SUCCESS",
    "FAILURE",
    "NEXTPAGE",
    "PREVPAGE"

]);

export default GISTS;
