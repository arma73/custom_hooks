import { useState, useEffect } from "react";

const setBrowserCookie = (name, value, days) => {
    let expires = "";

    if (days) {
        const convertToMillisecond = count => (count * 864e5);
        const date = new Date();
        date.setTime(date.getTime() + convertToMillisecond(days));
        expires = `; expires=${date.toUTCString()}`;
    }

    document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const getBrowserCookie = name => {
    const nameEQ = `${name}=`;
    const items = document.cookie.split(";");
    const search = items.find(item => item.trim().includes(nameEQ));

    return search ? search.substring(nameEQ.length).trim() : null;
};

export const useCookies = ({ key }) => {
    const initial = getBrowserCookie(key);
    const [cookie, setCookie] = useState(initial);

    useEffect(() => {
        setBrowserCookie(key, cookie);
    }, [cookie, key]);

    return [cookie, setCookie];
};
