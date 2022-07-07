import { useCallback, useMemo, useState } from "react";

export function useToggle<T>(initial: T, options: [T, T]) {
    const [value, setValue] = useState(initial);

    const toggle = useCallback(() => {
        
        setValue((current: T) => {
            if (current === options[0]) {
                return options[1];
            }

            return options[0];
        });
    }, []);

    return [value, toggle] as const;
}

export function useBooleanToggle(initial: boolean = false) {
    return useToggle<boolean>(initial, [true, false]);
}