const request = (url, params = {}, method = 'GET', onSuccess = null, onError = null) => {
    let options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if ('GET' === method) {
        url += '?' + new URLSearchParams(params);
    } else {
        options.body = JSON.stringify(params);
    }

    const handleError = (error) => {
        if (onError) {
            onError(error);
        }
        return error;
    }

    const handleSuccess = (data) => {
        if (onSuccess) {
            onSuccess(data);
        }
        return data;
    }

    return fetch(url, options)
        .then(
            (response) => {
                let jsonPromise = response.json();
                if (!response.ok) {
                    return jsonPromise.then(Promise.reject.bind(Promise));
                }
                return jsonPromise;
            },
            handleError
        )
        .then(handleSuccess, handleError);
};

export const getRequest = (url, params, onSuccess, onError) => request(url, params, 'GET', onSuccess, onError);
export const postRequest = (url, body, onSuccess, onError) => request(url, body, 'POST', onSuccess, onError);