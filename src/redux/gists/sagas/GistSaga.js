import { put, call, takeLatest, all } from "redux-saga/effects";
import DataUtils from "../../../utils/DataUtils";
import { gistAction } from "../actions/index";
import { GISTS } from "../actions/GistsActionTypes";
import parse from 'parse-link-header';

let endPoint;
const createUrl = (newUrl) => {
    const URLsplit = newUrl.split('/');
    const host = URLsplit[0] + "//" + URLsplit[2] + "/";
    endPoint = newUrl.replace(host, '');
}

function* handleGetGists() {
    try {
        const { data } = yield call(DataUtils.get, `/gists/public`);
        const header = data.headers.link;
        const pageDetails = parse(header);
        const response = {
            "data": data.data,
            "pageDetails": pageDetails
        }
        yield put(gistAction.success({ response }));
    } catch (e) {
        yield put(gistAction.failure({ error: { ...e } }));
    }
}

function* handleNextPage(url) {
    const newUrl = url.payload.data
    createUrl(newUrl);
    try {
        const data = yield call(DataUtils.get, endPoint);
        const header = data.data.headers.link;
        const pageDetails = parse(header);
        const response = {
            "data": data.data.data,
            "pageDetails": pageDetails
        }
        console.log('response', response);
        yield put(gistAction.success({ response }));
    } catch (e) {
        yield put(gistAction.failure({ error: { ...e } }));
    }
}

function* handlePreviousPage(url) {
    const newUrl = url.payload.data
    createUrl(newUrl);
    try {
        const data = yield call(DataUtils.get, endPoint);
        const header = data.data.headers.link;
        const pageDetails = parse(header);

        const response = {
            "data": data.data.data,
            "pageDetails": pageDetails
        }

        yield put(gistAction.success({ response }));
    } catch (e) {
        yield put(gistAction.failure({ error: { ...e } }));
    }
}

export function* watchAllGistsSaga() {
    yield all([
        takeLatest(GISTS.GET, handleGetGists),
        takeLatest(GISTS.NEXTPAGE, handleNextPage),
        takeLatest(GISTS.PREVPAGE, handlePreviousPage),

    ]);
}

export default watchAllGistsSaga;
