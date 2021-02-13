import axios from "axios";

const api = axios.create({
    baseURL: `https://api.github.com`,
});

const get = async function (url, options = {}) {
    let result = [];
    let error;

    await api.get(url, options).then(
        (res) => (result = res),
        (err) => (error = err)
    );
    if (error !== undefined) {
        throw error.response;
    }

    const dataAndStatusForGet = { data: result, status: result.status };
    return dataAndStatusForGet;
};




export default {
    get,
};
