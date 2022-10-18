/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {

    const f = function () {},
        {
            method = 'GET',
            headers = {},
            success = f,
            error = f,
            callback = f,
            responseType,
            async = true,
            data = {}
        } = options;

    const url = {options};

    const xhr = new XMLHttpRequest();
    xhr.responseType = responseType;
    xhr.withCredentials = true;

    xhr.onload = function() {
        if (xhr.status !== 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else { 
            success.call(this, xhr.response);
            callback.call(this, null, xhr.response);
        }
    };
      
    xhr.onerror = function() {
        const e = new Error('Request Error');
        error.call(this, e);
        callback.call(this, e);
    };

    let requestData;
    if(method === 'GET') {
        const urlParam = Object.entries(data).map(([key, value]) => `${key}=${value}`).join('&');
        if (urlParam) {
            url += '?' + urlParam;
        }
    } else {
        requestData = Object.entries(data).reduce((target, [key, value]) => {
                target.append(key, value);
                return target;
            }, new FormData);
    }

    try {
        xhr.open(method, url, async);
        xhr.send(requestData);
    }
    catch (e) {
        error.call(this, e);
        callback.call(this, e);
        return xhr;
    }

    return xhr;
};
