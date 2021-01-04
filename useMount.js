import { useEffect } from "react";

export const useMount = func => {
    useEffect(() => {
        func();
    }, [func]);
};

export const useUnmount = func => {
    useEffect(() => () => {
        func();
    });
};
