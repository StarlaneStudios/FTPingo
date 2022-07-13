import classNames from "classnames";
import { type ChangeEventHandler, useCallback, useState } from "react";
import { InputProps } from "./typings";
import "./style.scss";

export function TextInput(props: InputProps<string>) {

    const [value, setValue] = useState(props.value || props.defaultValue || "");

    const classes = classNames({
        "input": true,
        "input__text": true,
        [`${props.className}`]: true
    });

    return (
        <div className={classes}>
            <input
                type="text"
                placeholder={props.placeholder}
                onChange={(e) => props.onChange?.(e)}
            />
        </div>
    );
}