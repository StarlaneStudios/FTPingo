import style from "./style.module.scss";

export function TextInput(props: InputProps<string>) {

    return (
        <div className={style.input}>
            <input
                type="text"
                placeholder={props.placeholder}
                onChange={(e) => props.onChange?.(e.target.value)}
            />
        </div>
    );
}