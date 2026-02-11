import Cookies from 'js-cookie';

export function setCookie<T>(key: string, value: T) {
    Cookies.set(key, JSON.stringify(value), {
        expires: 7,
        sameSite: 'lax',
    });
}

export function getCookie<T>(key: string): T | null {
    const data = Cookies.get(key);
    return data ? JSON.parse(data) : null;
}

export function removeCookie(key: string) {
    Cookies.remove(key);
}