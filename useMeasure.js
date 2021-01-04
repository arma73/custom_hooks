import { useState, useRef, useEffect } from "react";

export const useMeasure = () => {
    const ref = useRef();

    const [bounds, setBounds] = useState({
        "left": 0,
        "top": 0,
        "width": 0,
        "height": 0,
    });

    const [resize0] = useState(() => new ResizeObserver(([entry]) => setBounds(entry.contentRect)));

    useEffect(() => {
        if (ref.current) {
            resize0.observe(ref.current);
        }

        return () => resize0.disconnect();
    }, [resize0]);

    return [{ ref }, bounds];
};
