import Cookies from 'js-cookie';

/**
 * Reset User Cookie
 * @param key The key to remove
 * @param data Object Data to implement in the new cookie
 * @param expiresIn Expires in N
 */
export function resetCookies (key: String, data: Object, expiresIn: number) : void  {
    Cookies.remove(key);
    Cookies.set(key, JSON.stringify(data), {
        expires: expiresIn
    })
}