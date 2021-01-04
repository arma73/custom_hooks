import { useState } from "react";

export const useInc = (initialValue = 0, {
    maxValue = 100000,
    minValue = -100000,
    step = 1,
} = {
    
}) => {
    const [value, setValue] = useState(initialValue);

    const inc = () => {
        setValue(prevState => 
            prevState + step > maxValue ? maxValue : prevState + step
        );
    };

    const dec = () => {
        setValue(prevState => 
            prevState - step < minValue ? minValue : prevState - step
        );
    };

    const reset = () => setValue(initialValue);

    return [value, { inc, dec, reset }];
};
