import { all, fork } from "redux-saga/effects";
import watchAllGistsSaga from "./GistSaga";

export default function* rootSaga() {
    yield all([fork(watchAllGistsSaga)]);
}
