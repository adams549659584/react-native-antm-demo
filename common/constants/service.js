
import config from './config';

const URL = {
    searchPanGuWord: '/Home/SearchPanGuWordResult?KeyWord'
}

const HTTPMethod = {
    get: 'GET',
    post: 'POST'
}

/**
 * get/post
 * 
 * @param {string} url 
 * @param {string} [method=HTTPMethod.get] 
 * @param {any} [params={}] 
 * @returns 
 */
function request(url, method = HTTPMethod.get, params = {}) {
    let option = {
        method: method,
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // }
    };
    switch (method) {
        case HTTPMethod.get:
            if (url.search(/\?/) === -1) {
                const paramsStr = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
                url += `?${paramsStr}`;
            } else {
                const paramsStr = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
                url += `&${paramsStr}`;
            }
            break;
        case HTTPMethod.post:
            let parameters = new FormData();
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    const element = params[key];
                    parameters.append(key, element);
                }
            }
            option = { ...option, ...{ body: parameters } }
            break;
    }
    return fetch(config.host + url, option).then(response => response.json());
}

/**
 * 首页商品推荐
 */
export function searchPanGuWord(keyword) {
    return request(URL.searchPanGuWord, HTTPMethod.get, { keyword: keyword });
}