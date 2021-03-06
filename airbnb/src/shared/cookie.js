const getCookie = (name) => {
    let value = '; ' + document.cookie;

    let parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
};

const setCookie = (Authorization, value, exp = 5) => {
    let date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = `${Authorization}=${value}; expires=${date.toUTCString()}`;
};

// 잘못된코드
const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

function deleteAllCookies() {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf('=');
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
}

export { getCookie, setCookie, deleteCookie, deleteAllCookies };

// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

// export const setCookie = (name, value, option) => {
//     return cookies.set(name, value, { ...option });
// };

// export const getCookie = (name) => {
//     return cookies.get(name);
// };

// export const deleteCookie = (name) => {
//     return cookies.remove(name);
// };
