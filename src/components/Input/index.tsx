import classNames from "classnames";
import { 
	type ChangeEventHandler, 
	useCallback, 
	useState 
} from "react";
import { MdLockOpen } from "react-icons/md";
import type { EmailInputProps, InputProps, NumberInputProps } from "./declerations";
import "./style.scss";

export function TextInput(props: InputProps<string>) {

	const [value, setValue] = useState(props.value || props.defaultValue || "");
	
	const onChangeTextInput = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
		if(!props.onChange) return;
		setValue(e.target.value);
	}, [props.onChange]);

	const classes = classNames({
		"input": true,
		"input__text": true,
		[`${props.className}`]: true,
	})

	return (
		<>
			<div className={classes}>
				<input
					type="text"
					placeholder={props.placeholder}
					onChange={onChangeTextInput}
				/>
			</div>
		</>
	);
}

export function NumberInput(props: NumberInputProps) {

	const [value, setValue] = useState(props.value || props.defaultValue || 0);

	const onChangeTextInput = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
		if(!props.onChange) return;
		setValue(Number(e.target.value));
	}, [props.onChange]);

	return (
		<div className="input input__number">
			<input
				type="number"
				placeholder={props.placeholder}
				onChange={onChangeTextInput}
			/>
		</div>
	);
};

export function PasswordInput({ className, value }: InputProps<string>) {

	return (
		<div className="input input__password">
			<input
				type="password"
				placeholder="Password"
				value={value}
			/>
			<div className="input__password-icon">
				<MdLockOpen />
			</div>
		</div>
	);
}

export function EmailInput(props: EmailInputProps) {

	return (
		<div className="input input__email">
			<input
				type="email"
				placeholder="Email"
				value={props.value}
			/>
		</div>
	);
}