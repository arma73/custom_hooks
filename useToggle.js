import { useState, useCallback } from "react";

export const useToggle = (initialValue = false) => {
    const [isToggled, setToggle] = useState(initialValue);

    const callToggle = useCallback(() => setToggle(prevState => !prevState), []);

    // Rename output, multiple uses of hook
    // return [isToggled, setToggle, callToggle];

    // Named properties, no order in return
    return { isToggled, setToggle, callToggle };
};
