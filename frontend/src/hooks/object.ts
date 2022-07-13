import { useCallback, useState } from "react";

interface ObjectReturnable<T> {
    current: T;
    modify: (value: Partial<T>) => void;
}

export default function useObject<T>(initial: Required<T>): ObjectReturnable<T> {

    const [current, setCurrent] = useState<T>(initial);

    const modify = useCallback((value: Partial<T>) => {
        const object = Object.assign({ }, current, value);
        setCurrent(object);
    }, []);

    return { current, modify };
}